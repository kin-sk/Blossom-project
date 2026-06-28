<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to?: string;
}

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>

<template>
  <nav class="breadcrumb">
    <div class="section-inner">
      <ol class="breadcrumb-list">
        <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
          <NuxtLink v-if="item.to" :to="item.to" class="breadcrumb-link">
            {{ item.label }}
          </NuxtLink>
          <span v-else class="breadcrumb-current">{{ item.label }}</span>
          <v-icon v-if="index < items.length - 1" size="16" class="breadcrumb-separator">
            mdi-chevron-right
          </v-icon>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style scoped>
.breadcrumb {
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-primary-pale);
  padding: var(--spacing-sm) 0;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumb-link {
  font-size: 13px;
  color: var(--color-primary);
  transition: color 0.2s;
  text-decoration: none;
}

.breadcrumb-link:hover {
  color: var(--color-primary-dark);
  text-decoration: underline;
}

.breadcrumb-current {
  font-size: 13px;
  color: var(--color-text-muted);
  font-weight: 500;
}

.breadcrumb-separator {
  color: var(--color-text-muted);
  opacity: 0.6;
}

@media (max-width: 767px) {
  .breadcrumb-link,
  .breadcrumb-current {
    font-size: 12px;
  }
}
</style>
