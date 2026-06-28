<script setup lang="ts">
useHead({
  title: "一般家庭向けサービス | ブロッサム沖縄",
});

const breadcrumbItems = [
  { label: "トップ", to: "/" },
  { label: "サービス一覧", to: "/#service" },
  { label: "一般家庭向けサービス" },
];

const services = [
  {
    icon: "mdi-snowflake",
    name: "エアコン清掃",
    desc: "カビ・ホコリを徹底除去！快適な空気で省エネ効果も期待できます。壁掛けエアコンから天井埋込タイプまで対応いたします。",
    price: "¥12,000〜（税込）",
  },
  {
    icon: "mdi-washing-machine",
    name: "洗濯機清掃",
    desc: "洗濯槽の見えない汚れやカビを徹底除去。清潔な洗濯で衣類を守り、嫌なニオイの発生を防ぎます。縦型・ドラム式どちらも対応。",
    price: "¥15,000〜（税込）",
  },
  {
    icon: "mdi-fan",
    name: "換気扇清掃",
    desc: "頑固な油汚れをスッキリ落とし、換気効率をアップ。キッチンの空気を清潔に保ちます。",
    price: "¥10,000〜（税込）",
  },
  {
    icon: "mdi-stove",
    name: "レンジフード清掃",
    desc: "分解洗浄で油汚れを徹底除去！キッチンを清潔に保ち、火災リスクも低減します。",
    price: "¥18,000〜（税込）",
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
          <v-icon size="32">mdi-home</v-icon>
          一般家庭向けサービス
        </h1>
        <p class="service-page-subtitle">
          ご家庭のお掃除をプロの技術でサポートいたします
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
          1. public/images/services/home/ に写真を追加
          2. 以下のv-rowコンポーネントのコメントを外して使用
          3. 必要に応じて写真のパスを更新
        -->
        <v-row class="mt-8">
          <v-col cols="12">
            <h3 class="section-title">清掃例</h3>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-text>
                <BeforeAfter
                  before="/images/aircon_out_before.jpg"
                  after="/images/aircon_out_after.jpg"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-text>
                <BeforeAfter
                  before="/images/aircon_before.jpg"
                  after="/images/aircon_after.jpg"
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-text>
                <BeforeAfter
                  before="/images/renji_before.jpg"
                  after="/images/renji_after.jpg"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- ===== 清掃写真ギャラリー ここまで ===== -->
      </div>
    </section>

    <!-- Cross Link to Business Service -->
    <ServiceCrossLink
      title="宿泊施設・事業所向けサービスはこちら"
      description="ヴィラ・客室清掃、事業所清掃、業務用エアコン清掃など"
      link="/services/business"
      icon="mdi-domain"
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
