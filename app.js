const config = window.SITE_CONFIG;
const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.message)}`;
document.querySelectorAll('[data-whatsapp]').forEach(a => { a.href = whatsappUrl; a.target = '_blank'; a.rel = 'noopener noreferrer'; });
document.querySelectorAll('[data-instagram]').forEach(a => { a.href = config.instagram; a.target = '_blank'; a.rel = 'noopener noreferrer'; });
document.querySelectorAll('[data-region]').forEach(el => el.textContent = config.regionText);
document.querySelector('#year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
function closeMenu() { menu.setAttribute('aria-expanded','false'); document.querySelector('nav').classList.remove('open'); menu.setAttribute('aria-label','Abrir menu'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open ? 'Fechar menu' : 'Abrir menu'); document.querySelector('nav').classList.toggle('open',open); });
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();menu.focus();}});
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08});
 document.querySelectorAll('.section h2,.method-grid,.steps > div,.about-image,.manifesto h2').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
}
config.results.filter(pair=>pair.authorized===true).forEach((pair,index)=>{
 const figure=document.createElement('figure');figure.className='comparison';
 const before=new Image(); before.src=pair.before;before.alt=`Antes: ${pair.alt}`;before.loading='lazy';
 const after=new Image();after.src=pair.after;after.alt=`Depois: ${pair.alt}`;after.loading='lazy';after.className='after';
 const label=document.createElement('label');label.textContent='Comparar antes e depois';
 const range=document.createElement('input');range.type='range';range.min=0;range.max=100;range.value=50;range.setAttribute('aria-label',`Comparar antes e depois: ${pair.alt}`);range.addEventListener('input',()=>figure.style.setProperty('--split',`${range.value}%`));
 const stage=document.createElement('div');stage.className='comparison-stage';stage.style.aspectRatio=pair.aspectRatio || '4 / 5';stage.append(before,after);
 const caption=document.createElement('figcaption');caption.textContent='ANTES / DEPOIS';label.append(range);figure.append(stage,caption,label);document.querySelector('#results-gallery').append(figure);
});
const schema={'@context':'https://schema.org','@type':'ProfessionalService',name:'Juliana Souza — Estética e Beleza',telephone:`+${config.whatsapp}`,sameAs:[config.instagram],description:config.regionText};
if(config.areaServed.length) schema.areaServed=config.areaServed;
if(config.siteUrl){schema.url=config.siteUrl;const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=config.siteUrl;document.head.append(canonical);const meta=document.createElement('meta');meta.setAttribute('property','og:url');meta.content=config.siteUrl;document.head.append(meta);}
const json=document.createElement('script');json.type='application/ld+json';json.textContent=JSON.stringify(schema);document.head.append(json);
