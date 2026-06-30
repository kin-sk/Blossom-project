// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Before,Afterの画像のため
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "img-comparison-slider",
    },
  },

  // Cloudflare Pages用の設定
  nitro: {
    preset: "cloudflare-pages",
  },

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  css: [
    "vuetify/styles",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/main.css",
  ],

  // SPAモード:false　SSGモード:true
  // GoogleはJavaScriptを読み込めますが、ローカルSEO（地域密着ビジネス）においては、
  // 最初から文字が全て書き込まれているHTML（SSG）の方が
  // 圧倒的にインデックスされやすく、SEOに強いです。
  // デプロイ（ビルド）コマンドを nuxt generate
  // （またはCloudflare側で静的ファイルを生成する設定）にすることで、
  // 全ページが完全なHTMLとして書き出されます。
  ssr: true,

  app: {
    head: {
      title: "ブロッサム沖縄 | ハウスクリーニング・清掃サービス",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap",
        },
      ],
    },
  },
});
