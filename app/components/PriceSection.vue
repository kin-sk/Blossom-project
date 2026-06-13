<script setup lang="ts">
const prices = [
  { name: "エアコン清掃", amount: "¥12,000", suffix: "〜（税込）" },
  { name: "洗濯機清掃", amount: "¥15,000", suffix: "〜（税込）" },
  { name: "換気扇清掃", amount: "¥10,000", suffix: "〜（税込）" },
  { name: "レンジフード清掃", amount: "¥18,000", suffix: "〜（税込）" },
  { name: "ヴィラ客室清掃", amount: "要お見積り", suffix: "" },
];
</script>

<template>
  <section class="section section--gray" id="price">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title">料金の目安</h2>
        <p class="section-note">
          ※
          状態・機種によって変動する場合があります。まずはお気軽にご相談ください。
        </p>
      </div>
      <div class="price-grid">
        <div v-for="price in prices" :key="price.name" class="price-card">
          <div class="price-name">{{ price.name }}</div>
          <div class="price-amount">
            {{ price.amount
            }}<span v-if="price.suffix">{{ price.suffix }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.price-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--spacing-sm);
}

.price-card {
  background: var(--color-bg);
  border: 1.5px solid var(--color-primary-border);
  border-radius: var(--radius-lg);
  padding: 20px var(--spacing-sm);
  text-align: center;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
}

.price-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.price-name {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-xs);
}

.price-amount {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
}

.price-amount span {
  font-size: 12px;
  font-weight: 400;
  color: var(--color-text-muted);
  margin-left: 2px;
}

@media (max-width: 767px) {
  .price-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
