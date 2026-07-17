import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, resolve } from "path";
const PUBLIC = resolve(process.cwd(), "public/images");
const MAX_W = 2400;
const MAX_H = 3200;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "polas") continue; // polas handled separately
      files.push(...(await walk(full)));
    } else {
      const ext = extname(e.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) files.push(full);
    }
  }
  return files;
}

const files = await walk(PUBLIC);
console.log(`Found ${files.length} images`);

for (const file of files) {
  try {
    const before = (await stat(file)).size;
    const ext = extname(file).toLowerCase();
    const img = sharp(file).withMetadata().resize(MAX_W, MAX_H, { fit: "inside", withoutEnlargement: true });

    if (ext === ".png") {
      await img.png({ compressionLevel: 3 }).toFile(file + ".tmp");
    } else {
      await img.jpeg({ quality: 97, progressive: true, mozjpeg: true }).toFile(file + ".tmp");
    }

    const { rename } = await import("fs/promises");
    await rename(file + ".tmp", file);
    const after = (await stat(file)).size;
    console.log(`${basename(file)}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
  } catch (e) {
    console.error(`Error: ${file}`, e.message);
  }
}

console.log("Done.");
