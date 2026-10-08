// Mobile menu
(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('mobile-nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');btn.textContent=open?'Close':'Menu';
  });}
})();
// Rep attribution: ?rep=CODE on any page is remembered for 60 days and added to the booking form
(function(){
  var KEY='a360_rep',params=new URLSearchParams(location.search),rep=params.get('rep');
  try{
    if(rep){localStorage.setItem(KEY,JSON.stringify({code:rep.slice(0,40),t:Date.now()}));}
    var saved=JSON.parse(localStorage.getItem(KEY)||'null');
    if(saved&&Date.now()-saved.t>60*864e5){localStorage.removeItem(KEY);saved=null;}
    var f=document.getElementById('f-rep');if(f&&saved&&!f.value)f.value=saved.code;
    if(!sessionStorage.getItem('a360_landing'))sessionStorage.setItem('a360_landing',location.pathname+location.search);
    var l=document.getElementById('f-landing');if(l)l.value=sessionStorage.getItem('a360_landing')||'';
  }catch(e){}
  // Preselect interest from ?interest=
  var i=params.get('interest'),sel=document.getElementById('f-interest');
  if(i&&sel){for(var k=0;k<sel.options.length;k++){if(sel.options[k].value===i){sel.selectedIndex=k;break;}}}
})();
