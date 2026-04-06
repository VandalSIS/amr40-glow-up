import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { resizePastEditionGalleryPlugin } from "./plugins/resizePastEditionGallery";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Extensii cu majuscule (telefon/cameră) — altfel Vite încearcă să parseze binarele ca JS
  assetsInclude: [
    "**/*.JPEG",
    "**/*.JPG",
    "**/*.PNG",
    "**/*.WEBP",
    "**/*.GIF",
    "**/*.MP4",
    "**/*.WEBM",
    "**/*.MOV",
  ],
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    resizePastEditionGalleryPlugin(),
    ViteImageOptimizer({
      // Fără SVG — nu necesită svgo instalat (placeholder.svg etc.)
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      // JPEG: mozjpeg + progressive = fișiere mai mici și încărcare mai plăcută
      jpg: {
        quality: 76,
        mozjpeg: true,
        progressive: true,
        chromaSubsampling: "4:2:0",
      },
      jpeg: {
        quality: 76,
        mozjpeg: true,
        progressive: true,
        chromaSubsampling: "4:2:0",
      },
      png: {
        quality: 85,
        compressionLevel: 9,
        progressive: true,
      },
      webp: {
        quality: 78,
        effort: 6,
        smartSubsample: true,
        preset: "photo",
      },
      avif: {
        quality: 70,
        effort: 6,
      },
      logStats: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
