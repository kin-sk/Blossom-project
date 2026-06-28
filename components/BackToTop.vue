<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  // 300px以上スクロールしたら表示
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="トップへ戻る"
    >
      <v-icon size="28" color="white">mdi-chevron-up</v-icon>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 16px rgba(30, 80, 150, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition:
    background 0.2s,
    transform 0.2s;
}

.back-to-top:hover {
  background: var(--color-primary-dark);
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(30, 80, 150, 0.4);
}

.back-to-top:active {
  transform: translateY(-2px);
}

/* トランジション */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 767px) {
  .back-to-top {
    bottom: 16px;
    right: 16px;
    width: 48px;
    height: 48px;
  }
}
</style>
