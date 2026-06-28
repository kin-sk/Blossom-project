<template>
  <section class="contact-section" id="contact">
    <div class="section-inner">
      <div class="section-header">
        <h2 class="section-title section-title--white">
          まずはお気軽にご相談ください！
        </h2>
        <p class="section-note section-note--white">
          お見積り無料・ご相談だけでも大歓迎です。
        </p>
      </div>
      <!-- Phone contact only (LINE removed) -->
      <div class="contact-card">
        <div class="contact-label">お電話でのお問い合わせ</div>
        <a href="tel:0980-43-9230" class="contact-tel">
          <v-icon>mdi-phone-in-talk</v-icon> 0980-43-9230
        </a>
        <div class="contact-hours">受付時間 8:00〜18:00</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: var(--spacing-2xl) 0;
  background: var(--color-primary-dark);
}

.contact-card {
  background: var(--color-bg);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg) 28px;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.contact-label {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-primary-dark);
  margin-bottom: 12px;
}

.contact-tel {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  letter-spacing: 0.04em;
}

.contact-hours {
  font-size: 12px;
  color: var(--color-text-muted);
}

@media (max-width: 767px) {
  .contact-tel {
    font-size: var(--font-size-xl);
  }
}
</style>
