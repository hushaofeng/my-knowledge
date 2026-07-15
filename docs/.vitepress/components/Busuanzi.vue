<script setup>
import { ref, onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const sitePV = ref('...')
const siteUV = ref('...')
const pagePV = ref('...')

// 加载不蒜子脚本
const loadBusuanzi = () => {
  if (typeof window !== 'undefined' && !document.getElementById('busuanzi-script')) {
    const script = document.createElement('script')
    script.id = 'busuanzi-script'
    script.async = true
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    document.body.appendChild(script)
    script.onload = () => {
      updateStats()
    }
  }
}

// 更新统计数据
const updateStats = () => {
  setTimeout(() => {
    const sitePVEl = document.getElementById('busuanzi_value_site_pv')
    const siteUVEl = document.getElementById('busuanzi_value_site_uv')
    const pagePVEl = document.getElementById('busuanzi_value_page_pv')
    if (sitePVEl && sitePVEl.textContent) sitePV.value = sitePVEl.textContent
    if (siteUVEl && siteUVEl.textContent) siteUV.value = siteUVEl.textContent
    if (pagePVEl && pagePVEl.textContent) pagePV.value = pagePVEl.textContent
  }, 500)
}

onMounted(() => {
  loadBusuanzi()
  updateStats()
})

watch(() => page.value.path, () => {
  updateStats()
})
</script>

<template>
  <div class="busuanzi-container">
    <!-- 隐藏的容器供不蒜子脚本填充 -->
    <span id="busuanzi_container_site_pv" style="display: none;">
      <span id="busuanzi_value_site_pv"></span>
    </span>
    <span id="busuanzi_container_site_uv" style="display: none;">
      <span id="busuanzi_value_site_uv"></span>
    </span>
    <span id="busuanzi_container_page_pv" style="display: none;">
      <span id="busuanzi_value_page_pv"></span>
    </span>
    
    <!-- 显示统计信息 -->
    <div class="stats-display">
      <span class="stat-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        本页阅读 <strong>{{ pagePV }}</strong> 次
      </span>
      <span class="stat-divider">|</span>
      <span class="stat-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        累计访客 <strong>{{ siteUV }}</strong> 人
      </span>
      <span class="stat-divider">|</span>
      <span class="stat-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        累计阅读 <strong>{{ sitePV }}</strong> 次
      </span>
    </div>
  </div>
</template>

<style scoped>
.busuanzi-container {
  margin-top: 2rem;
  padding: 0.75rem 0;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
}

.stats-display {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.stat-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.stat-item svg {
  opacity: 0.7;
}

.stat-item strong {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.stat-divider {
  color: var(--vp-c-divider);
  margin: 0 0.25rem;
}

@media (max-width: 640px) {
  .stats-display {
    flex-direction: column;
    gap: 0.5rem;
  }
  .stat-divider {
    display: none;
  }
}
</style>