<script setup lang="ts">
const features = [
  { icon: 'mdi-auto-fix', title: '丁寧・安心のプロの仕上がり' },
  { icon: 'mdi-account-group', title: '女性のお客様からも多数ご依頼' },
  { icon: 'mdi-calculator', title: 'お見積り無料・お気軽にご相談ください' },
  { icon: 'mdi-map-marker', title: '沖縄本部町拠点・エリア内迅速対応' },
  { icon: 'mdi-shield', title: '損害保険加入店で安心のサポート' },
]
</script>

<template>
  <section class="features">
    <div class="section-inner">
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-item">
          <span class="feature-icon">
            <v-icon>{{ feature.icon }}</v-icon>
          </span>
          <div class="feature-title">{{ feature.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 40px 0;
  border-top: 1px solid var(--color-primary-border);
  border-bottom: 1px solid var(--color-primary-border);
  background: var(--color-primary-pale);
}

.features-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-lg);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-icon {
  font-size: var(--font-size-xl);
}

.feature-title {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-primary-dark);
}

@media (max-width: 767px) {
  .features-grid {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
    padding: 0 var(--spacing-sm);
  }
}
</style>
