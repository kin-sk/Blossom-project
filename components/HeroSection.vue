<script setup lang="ts">
const badges = [
  { icon: "mdi-handshake", text: "事業所・宿泊施設・ご家庭\nどちらも対応可能" },
  { icon: "mdi-shield-check", text: "安心・丁寧な\nプロの作業" },
  { icon: "mdi-calendar-check", text: "土日・祝日は\n要相談" },
];
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <h1 class="hero-title">
          沖縄の暮らしを、<br />
          もっと<span class="hero-accent">快適に。</span>
        </h1>
        <p class="hero-lead">事業所や宿泊施設、ご家庭のお掃除まで、</p>
        <p class="hero-sub">プロの技術でキレイをお届けします。</p>
        <div class="hero-badges">
          <div v-for="badge in badges" :key="badge.icon" class="hero-badge">
            <span class="badge-icon">
              <v-icon>{{ badge.icon }}</v-icon>
            </span>
            <span v-html="badge.text.replace('\n', '<br />')"></span>
          </div>
        </div>
        <div class="hero-cta-row">
          <div class="hero-cta">
            <a href="tel:0980-43-9230" class="btn-primary">
              <v-icon>mdi-phone</v-icon>
              今すぐ電話する
            </a>
          </div>
          <!-- Mobile icon badges -->
          <div class="hero-icon-badges-mobile">
            <img
              src="/images/okinawa-icon.png"
              alt="地域密着 沖縄本部町拠点"
              class="hero-icon-badge-mobile"
            />
            <img
              src="/images/songaihoken-icon.png"
              alt="損害保険加入店"
              class="hero-icon-badge-mobile"
            />
          </div>
        </div>
      </div>
      <!-- PC: Right side visual area -->
      <div class="hero-visual">
        <!-- 右上のアイコン -->
        <img
          src="/images/okinawa-icon.png"
          alt="地域密着 沖縄本部町拠点"
          class="hero-icon-badge hero-icon-badge--top-right"
        />
        <!-- 左下のアイコン -->
        <img
          src="/images/songaihoken-icon.png"
          alt="損害保険加入店"
          class="hero-icon-badge hero-icon-badge--bottom-left"
        />
        <v-card>
          <v-card-text>
            <BeforeAfter
              before="/images/aircon_out_before.jpg"
              after="/images/aircon_out_after.jpg"
            />
          </v-card-text>
        </v-card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background:
    linear-gradient(
      to right,
      rgba(10, 30, 60, 0.38) 0%,
      rgba(10, 30, 60, 0.15) 60%,
      rgba(10, 30, 60, 0.05) 100%
    ),
    url("/images/hero.jpg") center center / cover no-repeat;
  padding: 60px 0 48px;
  overflow: hidden;
  filter: brightness(1.15);
}

.hero-inner {
  filter: brightness(calc(1 / 1.15));
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: 0.05em;
  color: var(--color-white);
  margin-bottom: 12px;
}

.hero-accent {
  color: var(--color-accent);
}

.hero-lead,
.hero-sub {
  font-size: var(--font-size-base);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-xs);
}

.hero-sub {
  margin-bottom: 28px;
}

.hero-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-lg);
}

.hero-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: rgba(255, 255, 255, 0.18);
  border: 1.5px solid rgba(255, 255, 255, 0.45);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xs) 14px;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-white);
  line-height: 1.4;
  backdrop-filter: blur(4px);
}

.badge-icon {
  font-size: 20px;
}

.hero-cta-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.hero-cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: var(--font-size-base);
  font-weight: 700;
  border-radius: var(--radius-lg);
  transition: background 0.2s;
}

.btn-primary:hover {
  background: var(--color-primary-dark);
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-icon-badge {
  position: absolute;
  width: 120px;
  height: 120px;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.35));
  transition: transform 0.3s ease;
  z-index: 2;
}

.hero-icon-badge:hover {
  transform: scale(1.05);
}

/* 右上に配置 */
.hero-icon-badge--top-right {
  top: -70px;
  right: -70px;
}

/* 左下に配置 */
.hero-icon-badge--bottom-left {
  bottom: -70px;
  left: -70px;
}

.hero-cleaning-image {
  width: 100%;
  max-width: 480px;
}

.hero-cleaning-placeholder {
  width: 100%;
  aspect-ratio: 16 / 10;
  background: rgba(255, 255, 255, 0.15);
  border: 2px dashed rgba(255, 255, 255, 0.4);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
}

.hero-icon-badges-mobile {
  display: none;
}

@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }
  .hero-visual {
    display: none;
  }
  .hero-icon-badges-mobile {
    display: flex;
    flex-direction: horizontal;
    gap: 8px;
  }
  .hero-icon-badge-mobile {
    width: 100px;
    height: 100px;
    object-fit: contain;
    filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.3));
  }
}

@media (max-width: 767px) {
  .hero {
    padding: 40px 0 32px;
  }
  .hero-inner {
    gap: var(--spacing-lg);
  }
  .hero-cta {
    flex-direction: column;
    gap: 10px;
  }
  .hero-badges {
    flex-direction: column;
    gap: 8px;
  }
  .hero-icon-badge-mobile {
    width: 100px;
    height: 100px;
  }
}
</style>
