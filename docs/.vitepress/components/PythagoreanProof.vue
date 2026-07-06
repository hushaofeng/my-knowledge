<template>
  <div class="pyth">
    <h2>🧩 勾股定理"拼图证明"</h2>
    <p class="desc">分步动画演示两种拼法，面积关系一目了然</p>
    <div class="canvas-wrap"><canvas ref="cv" width="600" height="400"></canvas></div>
    <div class="controls">
      <button @click="prev">⬅ 上一步</button>
      <button @click="play">{{playing?'⏸ 暂停':'▶ 自动播放'}}</button>
      <button @click="next">下一步 ➡</button>
      <button @click="reset">🔄 重置</button>
    </div>
    <div class="step-info" v-html="stepText"></div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
const cv = ref(null), step = ref(0), playing = ref(false)
let timer = null
const steps = [
  {text:'第一步：画直角边 <b>a=3</b>、<b>b=4</b>，斜边 <b>c=5</b> 的直角三角形', formula:'a² + b² = c²'},
  {text:'第二步：4个全等直角三角形拼成大正方形（左边）', formula:'大正方形边长 = a + b = 7'},
  {text:'第三步：中间空出边长为 c 的正方形', formula:'空白面积 = c² = 25'},
  {text:'第四步：同样4个三角形换个摆法（右边），空出 a² + b² 两个正方形', formula:'空白面积 = a² + b² = 9 + 16 = 25'},
  {text:'第五步：两种摆法面积相同，三角形面积相同 → 空白相等！', formula:'c² = a² + b² → 25 = 25 ✅'},
]
const stepText = computed(() => {
  const s = steps[step.value]
  return s.text + `<div style="color:#fbbf24;font-weight:700;margin-top:4px;font-size:1.05rem">${s.formula}</div>`
})
function draw() {
  const canvas = cv.value; if(!canvas) return
  const ctx = canvas.getContext('2d')
  const W=600,H=400; ctx.clearRect(0,0,W,H)
  ctx.fillStyle='#0f172a'; ctx.fillRect(0,0,W,H)
  const S=25, a=3, b=4
  const n = step.value
  if(n===0) drawSingle(ctx,150,200,S,a,b)
  if(n>=1){drawLeft(ctx,150,200,S,a,b,n);ctx.fillStyle='#94a3b8';ctx.font='13px sans-serif';ctx.textAlign='center';ctx.fillText('摆法一',150,340)}
  if(n>=3){drawRight(ctx,450,200,S,a,b,n);ctx.fillStyle='#94a3b8';ctx.font='13px sans-serif';ctx.textAlign='center';ctx.fillText('摆法二',450,340)}
  if(n===4){ctx.fillStyle='#fbbf24';ctx.font='bold 30px sans-serif';ctx.textAlign='center';ctx.fillText('=',300,200);ctx.fillStyle='#1e3a5f';ctx.strokeStyle='#3b82f6';ctx.lineWidth=2;roundRect(ctx,120,350,360,40,8);ctx.fill();ctx.stroke();ctx.fillStyle='#fbbf24';ctx.font='bold 18px sans-serif';ctx.textAlign='center';ctx.fillText('c² = a² + b²  ⟹  25 = 9 + 16 ✅',300,376)}
}
function drawSingle(ctx,cx,cy,S,a,b){
  ctx.save();ctx.translate(cx-b*S/2,cy-a*S/2)
  ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(b*S,0);ctx.lineTo(0,a*S);ctx.closePath()
  ctx.fillStyle='#f87171';ctx.globalAlpha=0.7;ctx.fill();ctx.globalAlpha=1;ctx.strokeStyle='#f87171';ctx.lineWidth=2;ctx.stroke()
  ctx.restore()
}
function tri(ctx,x1,y1,x2,y2,x3,y3,col){ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.lineTo(x3,y3);ctx.closePath();ctx.fillStyle=col;ctx.globalAlpha=0.55;ctx.fill();ctx.globalAlpha=1;ctx.strokeStyle=col;ctx.lineWidth=1.5;ctx.stroke()}
function drawLeft(ctx,cx,cy,S,a,b){
  ctx.save();ctx.translate(cx-3.5*S,cy-3.5*S)
  const T=a*S,U=b*S
  tri(ctx,0,0,T,0,0,U,'#f87171');tri(ctx,T,0,T+U,0,T,T,'#fb923c')
  tri(ctx,T+U,T,T+U,T+U,T,T+U,'#f87171');tri(ctx,0,U,T,U+T,0,T+U,'#fb923c')
  ctx.fillStyle='#fbbf24';ctx.globalAlpha=0.3;ctx.fillRect(T,U,T,T);ctx.globalAlpha=1
  ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;ctx.setLineDash([4,4]);ctx.strokeRect(T,U,T,T);ctx.setLineDash([])
  ctx.fillStyle='#fbbf24';ctx.font='bold 16px sans-serif';ctx.textAlign='center';ctx.fillText('c²',T+T/2,U+T/2+6)
  ctx.restore()
}
function drawRight(ctx,cx,cy,S,a,b){
  ctx.save();ctx.translate(cx-3.5*S,cy-3.5*S)
  const T=a*S,U=b*S
  tri(ctx,0,0,U,0,0,T,'#f87171');tri(ctx,U,0,U+T,0,U,T,'#fb923c')
  tri(ctx,0,T,U,T+U,0,T+U,'#fb923c');tri(ctx,U+T,T,U+T,T+U,U,T+U,'#f87171')
  ctx.fillStyle='#60a5fa';ctx.globalAlpha=0.4;ctx.fillRect(U,0,T,T);ctx.globalAlpha=1;ctx.strokeStyle='#60a5fa';ctx.lineWidth=2;ctx.strokeRect(U,0,T,T)
  ctx.fillStyle='#60a5fa';ctx.font='bold 14px sans-serif';ctx.textAlign='center';ctx.fillText('a²',U+T/2,T/2+5)
  ctx.fillStyle='#4ade80';ctx.globalAlpha=0.4;ctx.fillRect(0,T,U,U);ctx.globalAlpha=1;ctx.strokeStyle='#4ade80';ctx.lineWidth=2;ctx.strokeRect(0,T,U,U)
  ctx.fillStyle='#4ade80';ctx.font='bold 14px sans-serif';ctx.textAlign='center';ctx.fillText('b²',U/2,T+U/2+5)
  ctx.restore()
}
function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath()}
function next(){if(step.value<4)step.value++;draw()}
function prev(){if(step.value>0)step.value--;draw()}
function reset(){step.value=0;stopPlay();draw()}
function play(){if(playing.value){stopPlay()}else{playing.value=true;step.value=0;draw();timer=setInterval(()=>{if(step.value<4){step.value++;draw()}else stopPlay()},2000)}}
function stopPlay(){playing.value=false;clearInterval(timer);timer=null}
onMounted(draw)
onUnmounted(stopPlay)
</script>
<style scoped>
.pyth{background:#0f172a;border-radius:12px;padding:20px;margin:16px 0;color:#e2e8f0;font-family:sans-serif}
.pyth h2{margin:0 0 4px;color:#4ade80;font-size:1.2rem}
.desc{color:#94a3b8;font-size:.85rem;margin-bottom:12px}
.canvas-wrap canvas{display:block;border-radius:8px;width:100%;max-width:600px;background:#1e293b}
.controls{margin-top:12px;display:flex;gap:10px;flex-wrap:wrap}
.controls button{background:#1e3a5f;color:#60a5fa;border:1px solid #334155;border-radius:8px;padding:6px 16px;cursor:pointer;font-size:.85rem}
.controls button:hover{background:#2563eb;color:#fff}
.step-info{margin-top:10px;background:#1e293b;border-radius:8px;padding:10px 16px;font-size:.9rem;line-height:1.6;text-align:center}
</style>
