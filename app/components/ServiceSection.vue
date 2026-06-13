<script setup lang="ts">
const services = [
  {
    icon: "mdi-air-purifier",
    name: "エアコン清掃",
    desc: "カビ・ホコリを徹底除去！快適な空気で省エネにも。",
  },
  {
    icon: "mdi-washing-machine",
    name: "洗濯機清掃",
    desc: "洗濯槽の汚れ・カビを除去し、清潔な洗濯をサポート。",
  },
  {
    icon: "mdi-fan mdi-spin",
    name: "換気扇清掃",
    desc: "頑固な油汚れをスッキリ落とし、換気効率をアップ。",
  },
  {
    icon: "mdi-hvac",
    name: "レンジフード清掃",
    desc: "油汚れを徹底除去！キッチンを清潔に保ちます。",
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
        <p class="section-mode" style="margin-top: 16px">
          <NuxtLink
            to="/services/home"
            class="service-link"
            style="margin-bottom: 10px"
          >
            <v-icon size="small">mdi-home</v-icon>
            一般家庭向けサービス
          </NuxtLink>
          <NuxtLink to="/services/business" class="service-link">
            <v-icon size="small">mdi-domain</v-icon> 企業向けサービス
          </NuxtLink>
        </p>
      </div>
      <div class="service-grid">
        <div
          v-for="service in services"
          :key="service.name"
          class="service-card"
        >
          <div class="service-icon-wrap">
            <v-icon size="36">{{ service.icon }}</v-icon>
          </div>
          <div class="service-name">{{ service.name }}</div>
          <div class="service-desc">{{ service.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-link {
  color: var(--color-primary);
  font-weight: 500;
  transition: color 0.2s;
}

.service-link:hover {
  color: var(--color-primary-dark);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.service-card {
  background: var(--color-bg);
  border: 1.5px solid var(--color-primary-border);
  border-radius: var(--radius-lg);
  padding: 28px 20px 24px;
  text-align: center;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.section-mode {
  font-size: 16px;
  color: var(--gray-text);
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

.service-icon-wrap {
  margin-bottom: 14px;
}

.service-name {
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-xs);
}

.service-desc {
  font-size: 12px;
  color: var(--color-text-muted);
  line-height: 1.7;
}

@media (max-width: 767px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
