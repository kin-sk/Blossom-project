<script setup lang="ts">
useHead({
  title: "企業向けサービス | ブロッサム沖縄",
});

const services = [
  {
    icon: "mdi-office-building",
    name: "ヴィラ・客室清掃",
    desc: "チェックアウト後の清掃・リネン交換を迅速対応。宿泊施設の品質維持をサポートいたします。定期契約も承っております。",
    price: "要お見積り",
  },
  {
    icon: "mdi-domain",
    name: "事業所清掃",
    desc: "オフィス、店舗、施設の清掃を承ります。定期清掃から単発のご依頼まで、ご要望に合わせて対応いたします。",
    price: "要お見積り",
  },
  {
    icon: "mdi-snowflake",
    name: "業務用エアコン清掃",
    desc: "天井埋込型や大型エアコンの清掃に対応。快適な空間づくりと省エネ効果をサポートします。",
    price: "要お見積り",
  },
];
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="service-page-header">
      <div class="section-inner">
        <h1 class="service-page-title">
          <v-icon size="32">mdi-domain</v-icon>
          宿泊施設・事業所向けサービス
        </h1>
        <p class="service-page-subtitle">
          宿泊施設・事業所の清掃をプロの技術でサポートいたします
        </p>
      </div>
    </div>

    <!-- Service Details -->
    <section class="section">
      <div class="section-inner">
        <div
          v-for="service in services"
          :key="service.name"
          class="service-detail-card"
        >
          <h3 class="service-detail-title">
            <v-icon color="primary">{{ service.icon }}</v-icon>
            {{ service.name }}
          </h3>
          <p class="service-detail-desc">{{ service.desc }}</p>
          <div class="service-detail-price">{{ service.price }}</div>
        </div>

        <!-- ===== 清掃写真ギャラリー ===== -->
        <!--
          将来の写真追加用スペース
          使用方法:
          1. public/images/services/business/ に写真を追加
          2. 以下のv-rowコンポーネントのコメントを外して使用
          3. 必要に応じて写真のパスを更新
        -->
        <!--
        <v-row class="mt-8">
          <v-col cols="12">
            <h3 class="section-title">清掃実績</h3>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-img src="/images/services/business/photo1.jpg" height="200" cover />
              <v-card-text>ヴィラ客室清掃の様子</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-img src="/images/services/business/photo2.jpg" height="200" cover />
              <v-card-text>事業所清掃の様子</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-img src="/images/services/business/photo3.jpg" height="200" cover />
              <v-card-text>業務用エアコン清掃の様子</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        -->
        <!-- ===== 清掃写真ギャラリー ここまで ===== -->

        <!-- Benefits -->
        <!-- <v-card class="mt-8 pa-6" color="surface-variant">
          <h3 class="section-label mb-4">法人契約のメリット</h3>
          <v-row>
            <v-col cols="12" md="4">
              <div class="d-flex align-center ga-3">
                <v-icon color="primary">mdi-calendar-clock</v-icon>
                <span>定期契約で優先予約</span>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="d-flex align-center ga-3">
                <v-icon color="primary">mdi-percent</v-icon>
                <span>ボリュームディスカウント</span>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="d-flex align-center ga-3">
                <v-icon color="primary">mdi-file-document</v-icon>
                <span>請求書払い対応</span>
              </div>
            </v-col>
          </v-row>
        </v-card> -->

        <!-- CTA -->
      </div>
    </section>
    <div>
      <ContactSection />
    </div>

    <FeaturesSection />
  </div>
</template>

<style scoped>
.service-page-header {
  background:
    linear-gradient(
      to right,
      rgba(10, 30, 60, 0.38) 0%,
      rgba(10, 30, 60, 0.15) 60%,
      rgba(10, 30, 60, 0.05) 100%
    ),
    url("/images/hero.jpg") center center / cover no-repeat;
  padding: 60px 0 48px;
  text-align: center;
  overflow: hidden;
  filter: brightness(1.15);
}

.service-page-title {
  font-size: var(--font-size-3xl);
  color: var(--color-white);
  font-weight: 400;
  margin-bottom: var(--spacing-sm);
}

.service-page-subtitle {
  font-size: var(--font-size-base);
  color: var(--color-white);
  opacity: 0.9;
}

.service-detail-card {
  background: var(--color-bg);
  border: 1.5px solid var(--color-primary-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.service-detail-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  gap: 12px;
}

.service-detail-desc {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: var(--spacing-sm);
}

.service-detail-price {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary);
}
</style>
