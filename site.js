(()=>{
const drawer=document.getElementById('siteDrawer'),search=document.getElementById('siteSearch');
const open=(el)=>{if(el){el.classList.add('open');el.setAttribute('aria-hidden','false')}};
const close=(el)=>{if(el){el.classList.remove('open');el.setAttribute('aria-hidden','true')}};
document.querySelectorAll('[data-open-menu]').forEach(b=>b.addEventListener('click',()=>open(drawer)));
document.querySelectorAll('[data-open-search]').forEach(b=>b.addEventListener('click',()=>{open(search);setTimeout(()=>document.getElementById('searchInput')?.focus(),30)}));
document.querySelectorAll('[data-close-menu]').forEach(b=>b.addEventListener('click',()=>close(drawer)));
document.querySelectorAll('[data-close-search]').forEach(b=>b.addEventListener('click',()=>close(search)));
drawer?.addEventListener('click',e=>{if(e.target===drawer)close(drawer)});
search?.addEventListener('click',e=>{if(e.target===search)close(search)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){close(drawer);close(search)}});
document.getElementById('searchForm')?.addEventListener('submit',e=>{e.preventDefault();const q=document.getElementById('searchInput').value.trim();location.href='products.html'+(q?'?search='+encodeURIComponent(q):'')});
const params=new URLSearchParams(location.search),q=params.get('search');
if(q){const input=document.querySelector('[data-product-filter]');if(input)input.value=q;filterCards(q)}
function filterCards(q){const cards=[...document.querySelectorAll('.product-card')];let count=0;cards.forEach(card=>{const ok=card.textContent.toLowerCase().includes(q.toLowerCase());card.hidden=!ok;if(ok)count++});const result=document.getElementById('searchResult');if(result)result.textContent=count?`พบสินค้า ${count} รายการสำหรับ “${q}”`:`ไม่พบสินค้า “${q}” ลองค้นหาด้วยชื่อหรือรหัสอื่น`;}
document.querySelector('[data-product-filter]')?.addEventListener('input',e=>filterCards(e.target.value));
})();