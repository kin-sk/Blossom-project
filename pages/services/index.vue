<script setup lang="ts">
useHead({
  title: "サービス一覧 | ブロッサム沖縄",
});
</script>

<template>
  <div>
    <!-- Page Header -->
    <div class="service-page-header">
      <div class="section-inner">
        <h1 class="service-page-title">サービス一覧</h1>
        <p class="service-page-subtitle">
          ご家庭から宿泊施設まで、幅広く対応いたします
        </p>
      </div>
    </div>

    <!-- Service Selection -->
    <section class="section">
      <div class="section-inner">
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-8 text-center h-100" hover :to="'/services/home'">
              <v-icon size="64" color="primary" class="mb-4">mdi-home</v-icon>
              <h2 class="text-h5 font-weight-bold mb-4">
                一般家庭向けサービス
              </h2>
              <p class="text-body-2 text-grey-darken-1 mb-4">
                エアコン・洗濯機・換気扇・レンジフードなど、<br />
                ご家庭のお掃除をサポートします。
              </p>
              <v-btn color="primary" variant="outlined">
                詳しく見る
                <v-icon end>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card
              class="pa-8 text-center h-100"
              hover
              :to="'/services/business'"
            >
              <v-icon size="64" color="primary" class="mb-4">mdi-domain</v-icon>
              <h2 class="text-h5 font-weight-bold mb-4">事業所向けサービス</h2>
              <p class="text-body-2 text-grey-darken-1 mb-4">
                ヴィラ・客室清掃、事業所清掃など、<br />
                法人様向けのサービスをご提供します。
              </p>
              <v-btn color="primary" variant="outlined">
                詳しく見る
                <v-icon end>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section>

    <FeaturesSection />
  </div>
</template>

<style scoped>
.hero {
  background:
    linear-gradient(
      to right,
      rgba(10, 30, 60, 0.38) 0%,
      rgba(10, 30, 60, 0.15) 60%,
      rgba(10, 30, 60, 0.05) 100%
    ),
    url("/images/hero.jpg") center center / cover no-repeat;
  padding: 60px 0 48px;
  overflow: hidden;
  filter: brightness(1.15);
}

.service-page-header {
  background: linear-gradient(
    135deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 100%
  );
  padding: 80px 0 60px;
  text-align: center;
  color: var(--color-white);
}

.service-page-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.service-page-subtitle {
  font-size: var(--font-size-base);
  opacity: 0.9;
}
</style>
