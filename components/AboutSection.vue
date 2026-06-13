<script setup lang="ts">
const companyInfo = [
  { label: "会社名", value: "ブロッサム沖縄" },
  { label: "代表者", value: "親川　翔" },
  { label: "所在地", value: "沖縄県国頭郡本部町〇〇" },
  { label: "電話番号", value: "0980-43-9230" },
  { label: "受付時間", value: "8:00〜18:00" },
];
</script>

<template>
  <section class="section" id="about">
    <div class="section-inner">
      <div class="about-grid">
        <div class="about-image">
          <img src="/images/about.jpg" alt="会社紹介" />
        </div>
        <div class="about-text">
          <div class="section-label">ブロッサム沖縄について</div>
          <p class="about-body">
            沖縄本部町を拠点に、ご家庭や宿泊施設の清掃を行っているハウスクリーニング専門店です。
          </p>
          <p class="about-body">
            お客様一人ひとりのお悩みに寄り添い、丁寧で安心のサービスをご提供いたします。お気軽にご相談ください。
          </p>
          <table class="about-table">
            <tr v-for="info in companyInfo" :key="info.label">
              <th>{{ info.label }}</th>
              <td>{{ info.value }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}

.about-image img {
  border-radius: var(--radius-md);
  width: 100%;
}

.about-body {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 12px;
  line-height: 1.85;
}

.about-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: var(--font-size-sm);
}

.about-table tr {
  border-bottom: 1px solid var(--color-primary-border);
}

.about-table th {
  text-align: left;
  padding: 10px 8px 10px 0;
  color: var(--color-primary-dark);
  font-weight: 700;
  width: 90px;
  white-space: nowrap;
}

.about-table td {
  padding: 10px 0;
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .about-grid {
    gap: var(--spacing-lg);
  }
}

@media (max-width: 767px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  .about-body {
    font-size: var(--font-size-base);
    line-height: 1.9;
  }
  .about-table {
    font-size: 14px;
  }
  .about-table th {
    padding: 14px 12px 14px 0;
    width: 100px;
  }
  .about-table td {
    padding: 14px 0;
    line-height: 1.6;
  }
}
</style>
