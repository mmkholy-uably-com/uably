// Post-build normalisation for `next export`.
//
// The Next.js `opengraph-image` file convention emits a PNG at a route with no
// file extension (e.g. `/opengraph-image`). Some static hosts serve extension-less
// files with an incorrect Content-Type, which breaks LinkedIn/X/Slack link previews.
//
// This step copies each generated OG image to a `.png` sibling and rewrites the
// references in the exported HTML/TXT so the metadata points at the `.png` URL.
// It is idempotent and host-agnostic.

import { promises as fs } from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "out");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? walk(full) : Promise.resolve([full]);
    })
  );
  return files.flat();
}

async function main() {
  try {
    await fs.access(OUT);
  } catch {
    console.error("[fix-og] out/ not found - run `next build` first.");
    process.exit(1);
  }

  const all = await walk(OUT);

  // 1. Copy extension-less OG images to a .png sibling.
  const ogImages = all.filter((f) => path.basename(f) === "opengraph-image");
  for (const src of ogImages) {
    const dest = `${src}.png`;
    await fs.copyFile(src, dest);
    console.log(`[fix-og] wrote ${path.relative(OUT, dest)}`);
  }

  // 2. Rewrite references so paths gain the .png extension (query hash preserved).
  const textFiles = all.filter((f) => /\.(html|txt|xml)$/.test(f));
  let rewritten = 0;
  for (const file of textFiles) {
    const original = await fs.readFile(file, "utf8");
    const updated = original.replaceAll("opengraph-image?", "opengraph-image.png?");
    if (updated !== original) {
      await fs.writeFile(file, updated);
      rewritten += 1;
    }
  }
  console.log(`[fix-og] rewrote OG references in ${rewritten} file(s).`);
}

main().catch((err) => {
  console.error("[fix-og] failed:", err);
  process.exit(1);
});
