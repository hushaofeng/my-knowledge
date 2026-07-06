<template>
  <div class="qexp">
    <h2>🎯 动态二次函数探索器</h2>
    <p class="desc">拖动滑块，观察 a、b、c 如何影响抛物线 y = ax² + bx + c</p>
    <div class="controls">
      <label>a = <input type="range" min="-3" max="3" step="0.1" v-model.number="a" /> <span>{{a}}</span></label>
      <label>b = <input type="range" min="-5" max="5" step="0.1" v-model.number="b" /> <span>{{b}}</span></label>
      <label>c = <input type="range" min="-5" max="5" step="0.5" v-model.number="c" /> <span>{{c}}</span></label>
    </div>
    <canvas ref="cv" width="600" height="400"></canvas>
    <div class="info">
      <div>解析式：y = {{a}}x² + {{b}}x + {{c}}</div>
      <div>顶点：({{vx}}, {{vy}})　对称轴：x = {{vx}}</div>
      <div>Δ = {{delta}} → {{deltaType}}</div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, watch } from 'vue'
const a = ref(1), b = ref(0), c = ref(0)
const cv = ref(null)
const vx = computed(() => a.value ? (-b.value/(2*a.value)).toFixed(2) : '—')
const vy = computed(() => a.value ? (a.value*vx.value*vx.value + b.value*vx.value + c.value).toFixed(2) : '—')
const delta = computed(() => (b.value*b.value - 4*a.value*c.value).toFixed(2))
const deltaType = computed(() => { const d = b.value*b.value - 4*a.value*c.value; return d > 0 ? '两个不等实根' : d === 0 ? '两个相等实根' : '无实根' })
function draw() {
  const canvas = cv.value; if(!canvas) return
  const ctx = canvas.getContext('2d')
  const W=600,H=400; ctx.clearRect(0,0,W,H)
  ctx.fillStyle='#0f172a'; ctx.fillRect(0,0,W,H)
  const cx=W/2,cy=H/2,sx=30,sy=30
  // grid
  ctx.strokeStyle='#1e293b'; ctx.lineWidth=0.5
  for(let x=cx%sx;x<W;x+=sx){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke()}
  for(let y=cy%sy;y<H;y+=sy){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke()}
  // axes
  ctx.strokeStyle='#475569'; ctx.lineWidth=1.5
  ctx.beginPath();ctx.moveTo(0,cy);ctx.lineTo(W,cy);ctx.stroke()
  ctx.beginPath();ctx.moveTo(cx,0);ctx.lineTo(cx,H);ctx.stroke()
  // axis labels
  ctx.fillStyle='#64748b'; ctx.font='11px sans-serif'; ctx.textAlign='center'
  for(let i=-10;i<=10;i++){if(i===0)continue;ctx.fillText(i,cx+i*sx,cy+14)}
  // parabola
  ctx.strokeStyle='#4ade80'; ctx.lineWidth=2.5; ctx.beginPath()
  let first=true
  for(let px=0;px<W;px++){
    const x=(px-cx)/sx, yv=a.value*x*x+b.value*x+c.value, py=cy-yv*sy
    if(py<-200||py>H+200){first=true;continue}
    if(first){ctx.moveTo(px,py);first=false}else ctx.lineTo(px,py)
  }
  ctx.stroke()
  // vertex dot
  const vvx=parseFloat(vx.value),vvy=parseFloat(vy.value)
  if(!isNaN(vvx)&&!isNaN(vvy)){
    const dotX=cx+vvx*sx,dotY=cy-vvy*sy
    ctx.fillStyle='#f87171';ctx.beginPath();ctx.arc(dotX,dotY,5,0,Math.PI*2);ctx.fill()
    ctx.fillStyle='#fbbf24';ctx.font='12px sans-serif';ctx.textAlign='left'
    ctx.fillText(`顶点(${vvx.toFixed(1)},${vvy.toFixed(1)})`,dotX+8,dotY-8)
  }
}
onMounted(draw)
watch([a,b,c],draw)
</script>
<style scoped>
.qexp{background:#0f172a;border-radius:12px;padding:20px;margin:16px 0;color:#e2e8f0;font-family:sans-serif}
.qexp h2{margin:0 0 4px;color:#4ade80;font-size:1.2rem}
.desc{color:#94a3b8;font-size:.85rem;margin-bottom:12px}
.controls{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:12px}
.controls label{display:flex;align-items:center;gap:6px;font-size:.9rem}
.controls input[type=range]{width:120px}
.controls span{color:#fbbf24;font-weight:700;min-width:32px}
canvas{display:block;border-radius:8px;width:100%;max-width:600px;background:#0f172a}
.info{margin-top:10px;font-size:.9rem;line-height:1.8}
.info div{color:#94a3b8}
</style>
