import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, resolve } from "path";
const POLAS_DIR = resolve(process.cwd(), "public/images/polas");

const files = (await readdir(POLAS_DIR))
  .filter(f => [".png", ".jpg", ".jpeg"].includes(extname(f).toLowerCase()))
  .sort();

console.log(`Found ${files.length} pola files:`, files);

for (let i = 0; i < files.length; i++) {
  const src = join(POLAS_DIR, files[i]);
  const dest = join(POLAS_DIR, `pola-${i + 1}.jpg`);

  const before = (await stat(src)).size;
  await sharp(src)
    .withMetadata()
    .resize(1800, 2700, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 92, mozjpeg: true, progressive: true })
    .toFile(dest);
  const after = (await stat(dest)).size;

  if (src !== dest) await unlink(src);
  console.log(`${files[i]} → pola-${i + 1}.jpg: ${(before/1024/1024).toFixed(1)}MB → ${(after/1024).toFixed(0)}KB`);
}

console.log("Polas compressed.");
