/* TYPEWRITER */
const txt="Selamat Datang Teman-Teman :3";
let p=0,f=true,e=document.getElementById("typewriter");
function loop(){
  e.textContent=txt.slice(0,p);
  if(f){p++; if(p>txt.length){f=false; setTimeout(loop,800); return}}
  else{p--; if(p<0){f=true; setTimeout(loop,400); return}}
  setTimeout(loop,80);
}
loop();

/* AUDIO AUTOPLAY ON INTERACTION */
const bgm=document.getElementById("bgm");
document.addEventListener("click",()=>bgm.play().catch(()=>{}));
document.addEventListener("touchstart",()=>bgm.play().catch(()=>{}));

/* UI FLASH ON INTERACTION */
document.addEventListener("click",()=>{
  document.body.style.filter="hue-rotate(90deg)";
  setTimeout(()=>document.body.style.filter="none",200);
});

/* BUBBLES */
const bub=document.getElementById("bubbles");
for(let i=0;i<25;i++){
  let s=document.createElement("div");
  s.className="bubble";
  let size=Math.random()*40+10;
  s.style.width=size+"px"; s.style.height=size+"px";
  s.style.left=Math.random()*100+"vw";
  s.style.animationDuration=(6+Math.random()*6)+"s";
  bub.appendChild(s);
}

/* RAIN (thicker) */
const rain=document.getElementById("rain");
const r=rain.getContext("2d");
function rs(){ rain.width=innerWidth; rain.height=innerHeight; }
rs(); addEventListener("resize",rs);
let d=[];
for(let i=0;i<220;i++){ d.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,l:10+Math.random()*20,s:4+Math.random()*5}); }
function draw(){
  r.clearRect(0,0,rain.width,rain.height);
  r.strokeStyle="rgba(255,255,255,.45)";
  d.forEach(o=>{
    r.beginPath(); r.moveTo(o.x,o.y); r.lineTo(o.x,o.y+o.l);
    r.stroke();
    o.y+=o.s;
    if(o.y>rain.height)o.y=-5;
  });
  requestAnimationFrame(draw);
}
draw();

/* VIEWER */
const view=document.getElementById("viewer");
const vimg=document.getElementById("viewer-img");
document.querySelectorAll(".gallery img").forEach(e=>{
  e.onclick=()=>{
    vimg.src=e.src;
    view.style.display="flex";
    bgm.play().catch(()=>{});
  };
});
view.onclick=()=>view.style.display="none";
