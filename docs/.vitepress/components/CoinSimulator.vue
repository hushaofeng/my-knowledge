<template>
  <div class="coin">
    <h2>🪙 投硬币模拟器（大数定律）</h2>
    <p class="desc">从10次到10000次，看正面频率如何逼近0.5</p>
    <div class="canvas-wrap"><canvas ref="cv" width="600" height="300"></canvas></div>
    <div class="controls">
      <button @click="flip(1)">投 1 次</button>
      <button @click="flip(10)">投 10 次</button>
      <button @click="flip(100)">投 100 次</button>
      <button @click="flip(1000)">投 1000 次</button>
      <button @click="flip(10000)">投 10000 次</button>
      <button @click="toggleAuto">{{autoTimer?'⏸ 暂停':'⚡ 连续'}}</button>
      <button @click="resetAll">🔄 重置</button>
    </div>
    <div class="stats">
      <div class="card"><div class="lbl">总次数</div><div class="num r">{{total}}</div></div>
      <div class="card"><div class="lbl">正面</div><div class="num g">{{heads}}</div></div>
      <div class="card"><div class="lbl">反面</div><div class="num red">{{total-heads}}</div></div>
      <div class="card"><div class="lbl">正面频率</div><div class="num y">{{total?(heads/total).toFixed(4):'—'}}</div></div>
      <div class="card"><div class="lbl">偏离0.5</div><div class="num y">{{total?Math.abs(heads/total-0.5).toFixed(4):'—'}}</div></div>
    </div>
    <div class="insight"><b>大数定律</b>：当 n→∞ 时，正面频率趋近理论概率 0.5。投10次可能偏差大，投10000次几乎贴近0.5。</div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const cv = ref(null), heads = ref(0), total = ref(0)
const history = ref([])
let autoTimer = null
function flip(n){
  for(let i=0;i<n;i++){total.value++;if(Math.random()<0.5)heads.value++;history.value.push(heads.value/total.value)}
  draw()
}
function resetAll(){heads.value=0;total.value=0;history.value=[];stopAuto();draw()}
function toggleAuto(){autoTimer?stopAuto():startAuto()}
function startAuto(){autoTimer=setInterval(()=>flip(1),50)}
function stopAuto(){clearInterval(autoTimer);autoTimer=null}
function draw(){
  const canvas=cv.value;if(!canvas)return
  const ctx=canvas.getContext('2d'),W=600,H=300
  ctx.clearRect(0,0,W,H);ctx.fillStyle='#0f172a';ctx.fillRect(0,0,W,H)
  const pL=50,pR=20,pT=30,pB=40,cw=W-pL-pR,ch=H-pT-pB
  // grid
  ctx.strokeStyle='#1e293b';ctx.lineWidth=0.5
  for(let y=0;y<=10;y++){const py=pT+ch*y/10;ctx.beginPath();ctx.moveTo(pL,py);ctx.lineTo(pL+cw,py);ctx.stroke()}
  // y labels
  ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.textAlign='right'
  for(let y=0;y<=10;y+=2)ctx.fillText((1-y/10).toFixed(1),pL-6,pT+ch*y/10+4)
  // 0.5 line
  const y05=pT+ch*0.5
  ctx.strokeStyle='#7c3aed';ctx.lineWidth=1.5;ctx.setLineDash([6,3]);ctx.beginPath();ctx.moveTo(pL,y05);ctx.lineTo(pL+cw,y05);ctx.stroke();ctx.setLineDash([])
  ctx.fillStyle='#7c3aed';ctx.font='12px sans-serif';ctx.textAlign='right';ctx.fillText('P=0.5',pL+cw-4,y05-6)
  // data
  const h=history.value,n=h.length
  if(n>1){
    ctx.strokeStyle='#4ade80';ctx.lineWidth=1.5;ctx.beginPath()
    for(let i=0;i<n;i++){const x=pL+i/(n-1)*cw,y=pT+ch*(1-h[i]);i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)}
    ctx.stroke()
    const lx=pL+cw,ly=pT+ch*(1-h[n-1])
    ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(lx,ly,4,0,Math.PI*2);ctx.fill()
    ctx.font='11px sans-serif';ctx.textAlign='right';ctx.fillText(h[n-1].toFixed(4),lx-8,ly-8)
  }
  // x label
  ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText('投掷次数',pL+cw/2,H-4)
}
onMounted(()=>{draw()})
onUnmounted(stopAuto)
</script>
<style scoped>
.coin{background:#0f172a;border-radius:12px;padding:20px;margin:16px 0;color:#e2e8f0;font-family:sans-serif}
.coin h2{margin:0 0 4px;color:#a78bfa;font-size:1.2rem}
.desc{color:#94a3b8;font-size:.85rem;margin-bottom:12px}
.canvas-wrap canvas{display:block;border-radius:8px;width:100%;max-width:600px;background:#1e293b}
.controls{margin-top:12px;display:flex;gap:8px;flex-wrap:wrap}
.controls button{background:#1e3a5f;color:#60a5fa;border:1px solid #334155;border-radius:8px;padding:5px 14px;cursor:pointer;font-size:.82rem}
.controls button:hover{background:#2563eb;color:#fff}
.stats{margin-top:12px;display:flex;gap:10px;flex-wrap:wrap}
.card{background:#1e293b;border-radius:8px;padding:6px 12px;text-align:center;min-width:80px}
.card .lbl{font-size:.7rem;color:#64748b}.card .num{font-size:1rem;font-weight:700}
.g{color:#4ade80}.red{color:#f87171}.y{color:#fbbf24}.r{color:#e2e8f0}
.insight{margin-top:10px;background:#1e293b;border-radius:8px;padding:10px 14px;font-size:.82rem;line-height:1.6;color:#94a3b8;text-align:center}
.insight b{color:#a78bfa}
</style>
