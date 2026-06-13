<template>
  <footer class="footer">
    <div class="section-inner">
      <div class="footer-logo">
        <img src="/images/logo.png" alt="ブロッサム沖縄" class="logo-img-sm" />
        <span>ブロッサム沖縄</span>
      </div>
      <p class="footer-copy">
        &copy; {{ new Date().getFullYear() }} ブロッサム沖縄 All rights
        reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-text);
  padding: 28px 0;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-white);
  font-size: var(--font-size-base);
  font-weight: 700;
  font-family: var(--font-family-serif);
  margin-bottom: var(--spacing-xs);
}

.logo-img-sm {
  width: auto;
  height: 40px;
  object-fit: contain;
}

.footer-copy {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.45);
}
</style>
