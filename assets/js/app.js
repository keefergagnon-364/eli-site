const header=document.querySelector('[data-header]');
const jobberQuoteUrl=document.querySelector('meta[name="jobber-quote-url"]')?.content;
document.querySelectorAll('[data-jobber-quote]').forEach(link=>{if(jobberQuoteUrl)link.href=jobberQuoteUrl;});
const toggle=document.querySelector('[data-menu-toggle]');
const menu=document.querySelector('[data-menu]');
toggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});
menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
addEventListener('scroll',()=>header?.classList.toggle('is-scrolled',scrollY>30),{passive:true});
const range=document.querySelector('[data-comparison-range]');const after=document.querySelector('[data-comparison-after]');const handle=document.querySelector('[data-comparison-handle]');
range?.addEventListener('input',()=>{after.style.width=`${range.value}%`;handle.style.left=`${range.value}%`;});
document.querySelectorAll('[data-accordion] .faq-item button').forEach(button=>button.addEventListener('click',()=>{const item=button.closest('.faq-item');const active=item.classList.contains('open');document.querySelectorAll('[data-accordion] .faq-item').forEach(entry=>{entry.classList.remove('open');entry.querySelector('button').setAttribute('aria-expanded','false');});if(!active){item.classList.add('open');button.setAttribute('aria-expanded','true');}}));
const filters=document.querySelectorAll('[data-filter]');const cards=document.querySelectorAll('[data-category]');filters.forEach(filter=>filter.addEventListener('click',()=>{filters.forEach(item=>item.classList.remove('active'));filter.classList.add('active');cards.forEach(card=>card.classList.toggle('hidden',filter.dataset.filter!=='all'&&card.dataset.category!==filter.dataset.filter));}));
const lightbox=document.querySelector('[data-lightbox]');const label=document.querySelector('[data-lightbox-label]');const caption=document.querySelector('[data-lightbox-caption]');cards.forEach(card=>card.addEventListener('click',()=>{label.textContent=card.textContent;caption.textContent=card.dataset.caption;lightbox.showModal();}));document.querySelector('[data-lightbox-close]')?.addEventListener('click',()=>lightbox.close());
// FUTURE JOBBER EMBED HANDLER: enable only with an approved embedded form or secure server-side API endpoint.
// document.querySelector('[data-form]')?.addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;const status=form.querySelector('[data-form-status]');if(!form.checkValidity()){status.textContent='Please complete the required fields so we can follow up.';form.reportValidity();return;}status.textContent='Thank you — your estimate request is ready to be connected to the approved form service.';form.reset();});
document.querySelector('[data-year]').textContent=new Date().getFullYear();
