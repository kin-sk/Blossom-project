<script setup lang="ts">
import "img-comparison-slider/dist/styles.css";
import "img-comparison-slider";

const props = defineProps<{
  before: string;
  after: string;
}>();
</script>

<template>
  <ClientOnly>
    <img-comparison-slider>
      <img slot="first" :src="props.before" alt="Before" />
      <img slot="second" :src="props.after" alt="After" />
    </img-comparison-slider>
  </ClientOnly>
</template>
