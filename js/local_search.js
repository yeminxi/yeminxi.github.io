var searchFunc=function(e,t,r){"use strict";var n=document.getElementById(t),a=document.getElementById(r);$.ajax({url:e,dataType:"xml",success:function(e){var t=$("entry",e).map((function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}})).get();a.innerHTML="",n.addEventListener("input",(function(){var e='<ul class="search-result-list">',r=this.value.trim().toLowerCase().split(/[\s\-]+/);if(a.innerHTML="",!(this.value.trim().length<=0)){if(t.forEach((function(t){var n=!0;t.title&&""!==t.title.trim()||(t.title="Untitled");var a=t.title.trim(),l=a.toLowerCase(),i=t.content.trim().replace(/<[^>]+>/g,""),c=i.toLowerCase(),s=t.url,o=-1,u=-1,h=-1;if(""!==c?r.forEach((function(e,t){o=l.indexOf(e),u=c.indexOf(e),o<0&&u<0?n=!1:(u<0&&(u=0),0==t&&(h=u))})):n=!1,n){e+="<li><a href='"+s+"' class='search-result-title color-primary'>"+a+"</a>";var f=i;if(h>=0){var p=h-20,d=h+80;p<0&&(p=0),0==p&&(d=100),d>f.length&&(d=f.length);var m=f.substr(p,d);r.forEach((function(e){var t=new RegExp(e,"gi");m=m.replace(t,'<span class="search-keyword">'+e+"</span>")})),e+='<p class="search-result">'+m+"...</p>"}e+="</li>"}})),-1===(e+="</ul>").indexOf("<li>"))return a.innerHTML="<ul><span class='local-search-empty'>没有找到内容，请尝试更换检索词。<span></ul>";a.innerHTML=e,window.pjax&&window.pjax.refresh(a)}}))}}),$(document).on("click","#local-search-close",(function(){$("#local-search-input").val(""),$("#local-search-result").html("")}))},getSearchFile=function(e){searchFunc(e,"local-search-input","local-search-result")};