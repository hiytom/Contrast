!function(){function t(t,o){if(a[o])for(var e in a[o])window.isDebug&&(t.className=o),t.style[e]=a[o][e]}function o(){p.style.width=l.width+"px",p.style.height=r.height+"px"}function e(){k.style.bottom=toolbarOption.y+"px",k.style.right=toolbarOption.x+"px"}var n=document.createElement("style");n.type="text/css",n.innerHTML="@-webkit-keyframes contrast-an-show{0%{opacity:0}20%{opacity:1}80%{opacity:1}100%{opacity:0}}",document.head.appendChild(n);var a={"contrast-bg":{width:"100%",height:"100%",backgroundSize:"100vw auto",backgroundRepeat:"no-repeat",backgroundPosition:"left top"},"contrast-tip":{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",zIndex:"10000",color:"#000",fontSize:"5vw"},"contrast-design":{position:"absolute",top:"0",left:"0",bottom:"0",paddingTop:"30px",display:"webkitBox",webkitBoxAlign:"center",webkitBoxPack:"center",right:"50%",textAlign:"center",backgroundColor:"rgba(255, 191, 0, .65)",webkitAnimation:"contrast-an-show 3s linear .1s both"},"contrast-drag":{position:"absolute",left:"0",top:"30%",right:"0",textAlign:"center",textShadow:"#FC0 0 0 8px",opacity:"0",webkitAnimation:"contrast-an-show 3s linear 3.4s both"},"contrast-range":{position:"fixed",bottom:"0",height:"140px",left:"0",right:"0",display:"-webkit-box",webkitBoxAlign:"center",webkitBoxPack:"center",backgroundColor:"rgba(255, 191, 0, .65)",opacity:"0",webkitAnimation:"contrast-an-show 3s linear 6.8s both"},"contrast-percentage":{position:"absolute",top:"300px",left:"50%",marginLeft:"-2em",padding:"0 4px",textAlign:"center",backgroundColor:"rgba(255, 235, 59,1)",color:"#000",webkitTransition:"opacity .2s ease-in",whiteSpace:"nowrap",fontSize:"4vw"},"contrast-box":{zIndex:"10001",position:"absolute",display:"none",left:"0",top:"0",boxShadow:"rgba(0, 0, 0, .2) 0 0 2px",pointerEvents:"none",webkitTransition:"box-shadow .3s ease-in"},"contrast-box-inactive":{boxShadow:"rgba(0, 0, 0, .2) 0 0 2px"},"contrast-box-active":{boxShadow:"rgb(0, 0, 0) 0 0 4px"},"contrast-toolbar":{boxShadow:"#BBB 0 2px 8px",borderRadius:"50%",overflow:"hidden",position:"fixed",height:"10vw",lineHeight:"10vw",display:"-webkit-box",webkitBoxAlign:"center",overflow:"hidden",zIndex:"100002"},"contrast-toolbar-span":{backgroundColor:"rgba(0, 0, 0, .4)"},"contrast-toolbar-span-active":{backgroundColor:"rgba(33, 150, 243, 1)"},"contrast-compare":{display:"block",backgroundColor:"rgba(0, 0, 0, .4)",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMAQMDwYKAwIBA/0J+AsHC6bjOZAAAA5UlEQVRIx+3VMQ6CQBAF0AkxVhZyAjkFLRyBzlIvYKys1dIjcANKOo/BETyCAZaYaDHGJbvLLrOuiRQU/HLyipnmDwycS5p+ByvE8YJdhCIAHvLUV5CZIRqAJ5ZgT4OHBDcaNBJENKglQA3MfZ47IgnUyROYwN+g+AwXdsD40MutIGkBs4EKWoBLC8gECGlQbwV4nkhQggAYkCBW4EWBBhTAmABBF5R9oBbz+MI9EEIXYNYDSx1UJmCgA8wNkJiA6aACE2ChAaqjhgTuGty4ivToqGJ3mcOBegfrkf2sn8HZ92HwvAEaVf3gbViUKQAAAABJRU5ErkJggg==')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"8vw",width:"10vw",height:"10vw"}},i=document.body.clientWidth||document.documentElement.clientWidth,c=document.body.clientHeight||document.documentElement.clientHeight,r={setBg:function(t){var o=new Image;o.src=t,o.onload=function(){r.width=i,r.height=o.height*i/o.width,p.style.height=r.height+"px"},h.style.backgroundImage="url("+t+")"},width:0,height:0};window.Contrast=r;var s=localStorage.getItem("contrastjs_opacity"),d=localStorage.getItem("contrastjs_width"),l={opacity:Number(s)||1,width:Number(d)||i/2,opacity_height:140},p=document.createElement("div"),h=document.createElement("div");document.body.appendChild(p);var b=document.createElement("span");if(p.appendChild(h),t(h,"contrast-bg"),p.appendChild(b),t(b,"contrast-percentage"),t(p,"contrast-box"),o(),void 0==d){localStorage.setItem("contrastjs_width",l.width);var g=document.createElement("div"),u=document.createElement("span"),m=document.createElement("span"),w=document.createElement("span");p.appendChild(g),t(g,"contrast-tip"),g.appendChild(u),u.innerText="左侧为设计稿",t(u,"contrast-design"),g.appendChild(m),m.innerText="横向滑动，调整设计稿宽度",t(m,"contrast-drag"),g.appendChild(w),w.innerText="底部横向滑动，调整设计稿透明度",t(w,"contrast-range")}var A,v,y,x=!1,f=!1;document.addEventListener("touchstart",function(t){toolbarOption.compare.active&&(A=t.touches[0].clientX,y=t.touches[0].clientY,c-t.touches[0].clientY<l.opacity_height?(x=!0,b.style.opacity=1):f=!0)},!0),document.addEventListener("touchmove",function(o){Math.abs(o.touches[0].clientX-A)/Math.abs(o.touches[0].clientY-y)>1&&(o.preventDefault(),o.stopPropagation()),toolbarOption.compare.active&&(v=o.touches[0].clientX-A,A=o.touches[0].clientX,x?(l.opacity+=v/i,l.opacity>1?l.opacity=1:l.opacity<0&&(l.opacity=0),b.innerText=parseInt(100*l.opacity)+"%",h.style.opacity=l.opacity,localStorage.setItem("contrastjs_opacity",l.opacity)):f&&(t(p,"contrast-box-active"),l.width+=v,l.width>i?l.width=i:l.width<0&&(l.width=0),p.style.width=l.width+"px",localStorage.setItem("contrastjs_width",l.width)))},!0),document.addEventListener("touchend",function(){x=!1,f=!1,setTimeout(function(){x||(b.style.opacity=0)},200),setTimeout(function(){f||t(p,"contrast-box-inactive")},200)});var k=document.createElement("div"),E=document.createElement("span");document.body.appendChild(k),k.appendChild(E),toolbarOption={x:60,y:100,moving:!1,hasTouched:!1,compare:{active:!1}},e(),t(k,"contrast-toolbar"),t(E,"contrast-compare");var B,C;k.addEventListener("touchstart",function(){B=event.touches[0].clientX,C=event.touches[0].clientY,toolbarOption.hasTouched=!0},!0),document.addEventListener("touchmove",function(t){toolbarOption.hasTouched&&(toolbarOption.moving=!0,toolbarOption.x-=t.touches[0].clientX-B,toolbarOption.y-=t.touches[0].clientY-C,e(),B=t.touches[0].clientX,C=t.touches[0].clientY,t.preventDefault(),t.stopPropagation())},!0),document.addEventListener("touchend",function(){toolbarOption.hasTouched&&(toolbarOption.hasTouched=!1),toolbarOption.moving=!1}),E.addEventListener("touchend",function(){toolbarOption.moving||(toolbarOption.compare.active=!toolbarOption.compare.active,toolbarOption.compare.active?(t(E,"contrast-toolbar-span-active"),p.style.display="block",g&&setTimeout(function(){g.parentNode.removeChild(g),g=null},1e4)):(t(E,"contrast-toolbar-span"),p.style.display="none"))},!0)}();