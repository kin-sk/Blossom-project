<script setup lang="ts">
const navItems = [
  { label: "トップ", href: "/" },
  { label: "サービス一覧", href: "/#service" },
  { label: "料金の目安", href: "/#price" },
  { label: "会社概要", href: "/#about" },
  { label: "お問い合わせ", href: "/#contact" },
];
</script>

<template>
  <header class="header" id="top">
    <div class="header-inner">
      <!-- Logo -->
      <NuxtLink to="/" class="header-logo">
        <img src="/images/logo.png" alt="ブロッサム沖縄" class="logo-img" />
        <div class="logo-text">
          <span class="logo-name">ブロッサム沖縄</span>
          <span class="logo-sub">ハウスクリーニング・清掃サービス</span>
        </div>
      </NuxtLink>

      <!-- Navigation -->
      <nav class="header-nav">
        <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Contact: Phone -->
      <div class="header-contact">
        <a href="tel:0980-43-9230" class="header-tel">
          <span class="phone">
            <v-icon>mdi-phone</v-icon>
          </span>
          <div>
            <span class="tel-number">0980-43-9230</span>
            <span class="tel-hours">受付時間 8:00〜18:00</span>
          </div>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg);
  border-bottom: 2px solid var(--color-primary);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  height: var(--header-height);
  display: flex;
  align-items: center;
  gap: 28px;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  padding: 4px 0;
}

.logo-img {
  height: 100%;
  width: auto;
  max-height: 72px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.logo-name {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary-dark);
  letter-spacing: 0.03em;
  font-family: var(--font-family-serif);
}

.logo-sub {
  font-size: 10px;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

.header-nav {
  display: flex;
  gap: 4px;
  flex: 1;
  justify-content: center;
}

.header-nav a {
  font-size: var(--font-size-sm);
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  color: var(--color-text);
  border-radius: var(--radius-sm);
  white-space: nowrap; /* 改行を防ぐ */
  transition:
    background 0.2s,
    color 0.2s;
}

.header-nav a:hover {
  background: var(--color-primary-pale);
  color: var(--color-primary);
}

.header-contact {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.header-tel {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: var(--spacing-xs) 14px;
  background: var(--color-primary-pale);
  border: 1.5px solid var(--color-primary-border);
  border-radius: var(--radius-md);
  transition:
    background 0.2s,
    border-color 0.2s;
}

.header-tel:hover {
  background: #dceefb;
  border-color: var(--color-primary);
}

.phone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: 50%;
}

.tel-number {
  display: block;
  font-size: 17px;
  font-weight: 700;
  color: var(--color-primary-dark);
  letter-spacing: 0.03em;
  line-height: 1.2;
}

.tel-hours {
  display: block;
  font-size: 10px;
  color: var(--color-text-muted);
  margin-top: 1px;
}

@media (max-width: 1150px) {
  .header-inner {
    flex-wrap: wrap;
    gap: 0;
    height: auto;
    padding: var(--spacing-xs) var(--spacing-md);
    justify-content: space-between;
  }

  /* 上段：ロゴ（左） */
  .header-logo {
    order: 1;
    flex-shrink: 0;
    padding: var(--spacing-xs) 0;
  }

  /* 上段：電話番号（右端） */
  .header-contact {
    order: 2;
    flex-shrink: 0;
    padding: var(--spacing-xs) 0;
  }

  /* 下段：ナビゲーション（中央揃え） */
  .header-nav {
    order: 3;
    flex: 1 1 100%;
    width: 100%;
    justify-content: center;
    padding: var(--spacing-xs) 0;
    border-top: 1px solid var(--color-primary-pale);
  }

  .header-nav a {
    padding: 6px 8px;
    font-size: 12px;
  }

  .tel-number {
    font-size: 15px;
  }
}

@media (max-width: 767px) {
  .header-inner {
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .logo-img {
    height: 40px;
    max-height: 40px;
  }

  .logo-name {
    font-size: 20px;
  }

  .header-nav {
    justify-content: center;
    flex-wrap: wrap;
    gap: 3px;
    padding: 4px 0;
  }

  .header-nav a {
    padding: 3px 6px;
    font-size: 11px;
  }

  .header-tel {
    padding: 4px 8px;
    gap: 6px;
  }

  .phone {
    width: 28px;
    height: 28px;
  }

  .tel-hours {
    display: none;
  }

  .tel-number {
    font-size: 13px;
  }
}

@media (max-width: 400px) {
  .logo-img {
    height: 32px;
    max-height: 32px;
  }

  .logo-name {
    font-size: 16px;
  }

  .logo-sub {
    display: none;
  }
}
</style>
