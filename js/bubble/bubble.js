!function(){var a,n,e,t,o,h=!0;function c(){if(h)for(var a in n.clearRect(0,0,e,t),o)o[a].draw();requestAnimationFrame(c)}function i(){var n=document.getElementById("thumbnail_canvas");e=n?n.offsetWidth:0,t=n?n.offsetHeight:0,a.width=e,a.height=t}function r(){var a=this;function o(){a.pos.x=Math.random()*e,a.pos.y=t+100*Math.random(),a.alpha=.1+.3*Math.random(),a.alpha_change=2e-4+5e-4*Math.random(),a.scale=.2+.2*Math.random(),a.scale_change=.002*Math.random(),a.speed=.1+1.5*Math.random()}a.pos={},o(),this.draw=function(){a.alpha<=0&&o(),a.pos.y-=a.speed,a.alpha-=a.alpha_change,a.scale+=a.scale_change,n.beginPath(),n.arc(a.pos.x,a.pos.y,10*a.scale,0,2*Math.PI,!1),n.fillStyle="rgba(255,255,255,"+a.alpha+")",n.fill()}}!function(){a=document.getElementById("header_canvas"),i(),n=a.getContext("2d"),o=[];for(var t=.04*e,h=0;h<t;h++){var s=new r;o.push(s)}c()}(),window.onresize=function(){i()}}();