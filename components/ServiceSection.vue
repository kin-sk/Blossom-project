<script setup lang="ts">
const services = [
  {
    icon: "mdi-air-purifier",
    name: "エアコン清掃",
    desc: "カビ・ホコリを徹底除去！快適な空気で省エネにも。",
    before: "/images/aircon_out_before.jpg",
    after: "/images/aircon_out_after.jpg",
  },
  {
    icon: "mdi-fan mdi-spin",
    name: "換気扇清掃",
    desc: "頑固な油汚れをスッキリ落とし、換気効率をアップ。",
    before: "/images/kankisen_before.jpg",
    after: "/images/kankisen_after.jpg",
  },
  {
    icon: "mdi-hvac",
    name: "レンジフード清掃",
    desc: "油汚れを徹底除去！キッチンを清潔に保ちます。",
    before: "/images/renji_before.jpg",
    after: "/images/renji_after.jpg",
  },
  {
    icon: "mdi-washing-machine",
    name: "洗濯機清掃",
    desc: "洗濯槽の汚れ・カビを除去！清潔な洗濯をサポート。",
  },
  {
    icon: "mdi-office-building",
    name: "ヴィラ客室清掃",
    desc: "チェックアウト後の清掃・リネン交換を迅速対応。",
  },
];
</script>

<template>
  <section class="section" id="service">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">
          <v-icon>mdi-leaf</v-icon> サービス一覧 <v-icon>mdi-leaf</v-icon>
        </h2>
      </div>
      <v-row justify="center">
        <v-col
          v-for="service in services"
          :key="service.name"
          cols="12"
          sm="6"
          md="4"
          class="d-flex"
        >
          <div
            class="c-hover-card service-card flex-grow-1"
            :class="service.before ? 'service-card--with-img' : 'service-card--no-img'"
          >
            <!-- Before/After スライダー -->
            <div v-if="service.before" class="service-slider">
              <BeforeAfter :before="service.before" :after="service.after!" />
            </div>

            <div class="service-body">
              <!-- 写真なし：アイコン中央表示 -->
              <div v-if="!service.before" class="service-icon-wrap">
                <v-icon size="36">{{ service.icon }}</v-icon>
              </div>

              <div class="service-name-row">
                <v-icon v-if="service.before" size="18" color="primary">{{ service.icon }}</v-icon>
                <span class="service-name">{{ service.name }}</span>
              </div>
              <p class="service-desc">{{ service.desc }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  overflow: hidden;
}

.service-card--with-img {
  text-align: left;
}

.service-card--no-img .service-body {
  padding: 28px 20px 24px;
  text-align: center;
}

.service-slider {
  height: 180px;
  overflow: hidden;
}

.service-slider :deep(img-comparison-slider) {
  display: block;
  width: 100%;
  height: 180px;
}

.service-slider :deep(img) {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.service-body {
  padding: 14px 16px 18px;
}

.service-icon-wrap {
  margin-bottom: 14px;
}

.service-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: var(--spacing-xs);
}

.service-name {
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--color-primary-dark);
}

.service-desc {
  font-size: 12px;
  color: var(--color-text-muted);
  line-height: 1.7;
}
</style>