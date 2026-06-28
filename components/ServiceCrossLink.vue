<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  link: string;
  icon?: string;
}>();
</script>

<template>
  <section class="cross-link-section">
    <div class="section-inner">
      <NuxtLink :to="link" class="cross-link-card">
        <div class="cross-link-content">
          <v-icon v-if="icon" size="40" color="primary" class="cross-link-icon">
            {{ icon }}
          </v-icon>
          <div class="cross-link-text">
            <h3 class="cross-link-title">{{ title }}</h3>
            <p class="cross-link-desc">{{ description }}</p>
          </div>
        </div>
        <v-icon size="32" color="primary" class="cross-link-arrow">
          mdi-arrow-right-circle
        </v-icon>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.cross-link-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-primary-pale);
}

.cross-link-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  background: var(--color-white);
  border: 2px solid var(--color-primary-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg) var(--spacing-xl);
  transition:
    border-color 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
  text-decoration: none;
}

.cross-link-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(30, 80, 150, 0.15);
}

.cross-link-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex: 1;
}

.cross-link-icon {
  flex-shrink: 0;
}

.cross-link-text {
  flex: 1;
}

.cross-link-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 4px;
}

.cross-link-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin: 0;
}

.cross-link-arrow {
  flex-shrink: 0;
  transition: transform 0.2s;
}

.cross-link-card:hover .cross-link-arrow {
  transform: translateX(4px);
}

@media (max-width: 767px) {
  .cross-link-card {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-md);
  }

  .cross-link-content {
    flex-direction: column;
    text-align: center;
  }

  .cross-link-arrow {
    transform: rotate(90deg);
  }

  .cross-link-card:hover .cross-link-arrow {
    transform: rotate(90deg) translateX(4px);
  }
}
</style>
