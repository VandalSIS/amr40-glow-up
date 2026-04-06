import type { Plugin } from "vite";
import type { OutputBundle } from "rollup";

/** Lățime maximă pentru pozele din carousel (ediția I & II); păstrează aspect ratio. */
const MAX_WIDTH = 1920;

function isPastEditionAsset(pathFragment: string): boolean {
  const n = pathFragment.replace(/\\/g, "/");
  return /(^|\/)editia-[12]\//i.test(n);
}

export function resizePastEditionGalleryPlugin(): Plugin {
  return {
    name: "resize-past-edition-gallery",
    apply: "build",
    enforce: "pre",
    async generateBundle(_options, bundle: OutputBundle) {
      const sharp = (await import("sharp")).default;

      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== "asset") continue;

        const origin =
          chunk.originalFileName ||
          (typeof chunk.name === "string" ? chunk.name : "") ||
          "";

        if (!isPastEditionAsset(origin)) continue;
        if (!/\.(jpe?g|png|webp)$/i.test(origin)) continue;

        const raw = chunk.source;
        const buffer = Buffer.isBuffer(raw) ? raw : Buffer.from(raw);

        const meta = await sharp(buffer).metadata();
        if (!meta.width || meta.width <= MAX_WIDTH) continue;

        const pipeline = sharp(buffer).resize({
          width: MAX_WIDTH,
          withoutEnlargement: true,
        });

        const fmt = meta.format;
        let out: Buffer;

        if (fmt === "jpeg" || fmt === "jpg") {
          out = await pipeline
            .jpeg({
              quality: 76,
              mozjpeg: true,
              progressive: true,
              chromaSubsampling: "4:2:0",
            })
            .toBuffer();
        } else if (fmt === "png") {
          out = await pipeline.png({ compressionLevel: 9, quality: 85, progressive: true }).toBuffer();
        } else if (fmt === "webp") {
          out = await pipeline.webp({
            quality: 78,
            effort: 6,
            preset: "photo",
            smartSubsample: true,
          }).toBuffer();
        } else {
          continue;
        }

        chunk.source = out;
      }
    },
  };
}
