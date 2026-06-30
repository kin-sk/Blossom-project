<script setup lang="ts">
useHead({
  title: '宿泊施設・ヴィラ客室清掃・業務用エアコン洗浄 | ブロッサム沖縄',
  meta: [
    {
      name: 'description',
      content: '沖縄本部町のホテル・ヴィラ・民泊の客室清掃、チェックアウト後のリネン交換から、事業所の定期清掃、天井埋込型などの業務用エアコンクリーニングまで幅広く対応。宿泊施設の品質維持をプロの技術でサポートします。定期契約や複数台割引もご相談ください。'
    }
  ]
});

const breadcrumbItems = [
  { label: "トップ", to: "/" },
  { label: "サービス一覧", to: "/#service" },
  { label: "宿泊施設・事業所向けサービス" },
];

const services = [
  {
    icon: "mdi-office-building",
    name: "ヴィラ・客室清掃",
    desc: "チェックアウト後の清掃・リネン交換を迅速に対応いたします。宿泊施設の品質維持をサポートいたします。定期契約も承っております。",
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
    <!-- Breadcrumb -->
    <Breadcrumb :items="breadcrumbItems" />

    <!-- Page Header -->
    <div class="service-page-header">
      <div class="section-inner">
        <h1 class="service-page-title">
          <v-icon size="32">mdi-domain</v-icon>
          宿泊施設・事業所向け<br />サービス
        </h1>
        <p class="service-page-subtitle">
          宿泊施設・事業所の清掃を<br />プロの技術でサポートいたします
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
          写真追加用スペース
          使用方法:
          1. public/images/ に写真を追加
          2. 以下のv-rowコンポーネントのコメントを外して使用
          3. 必要に応じて写真のパスを更新
        -->
        <v-row class="mt-8">
          <v-col cols="12">
            <h3 class="section-title text-center">清掃例</h3>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-text class="pa-0">
                <div class="slider-wrap">
                  <BeforeAfter
                    before="/images/aircon_out_before.jpg"
                    after="/images/aircon_out_after.jpg"
                  />
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-text class="pa-0">
                <div class="slider-wrap">
                  <BeforeAfter
                    before="/images/kankisen_before.jpg"
                    after="/images/kankisen_after.jpg"
                  />
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-text class="pa-0">
                <div class="slider-wrap">
                  <BeforeAfter
                    before="/images/renji_before.jpg"
                    after="/images/renji_after.jpg"
                  />
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- ===== 清掃写真ギャラリー ここまで ===== -->

        <!-- Benefits -->
        <!-- <v-card class="mt-8 pa-6 service-detail-price">
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

    <!-- Cross Link to Home Service -->
    <ServiceCrossLink
      title="一般家庭向けサービスはこちら"
      description="エアコン清掃、洗濯機清掃、換気扇清掃など"
      link="/services/home"
      icon="mdi-home"
    />

    <div>
      <ContactSection />
    </div>

    <FeaturesSection />

    <!-- Back to Top Button -->
    <BackToTop />
  </div>
</template>

<style scoped>
.slider-wrap {
  height: 220px;
  overflow: hidden;
}

.slider-wrap :deep(img-comparison-slider) {
  display: block;
  width: 100%;
  height: 220px;
}

.slider-wrap :deep(img) {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
</style>

