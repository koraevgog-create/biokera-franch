// Keep range controls accessible and allow exact values from the keyboard.
document.querySelectorAll('#calculator input[type="range"]').forEach(range=>{
 const number=document.createElement('input'); number.type='number'; number.className='number-input';
 number.min=range.min; number.max=range.max; number.step=range.step; number.value=range.value;
 number.setAttribute('aria-label',document.querySelector('label[for="'+range.id+'"]').textContent+' — точное значение');
 range.insertAdjacentElement('afterend',number);
 range.addEventListener('input',()=>number.value=range.value);
 number.addEventListener('input',()=>{if(number.value==='')return;let v=Number(number.value);if(!Number.isFinite(v))return;range.value=Math.min(Number(range.max),Math.max(Number(range.min),v));range.dispatchEvent(new Event('input',{bubbles:true}));});
 number.addEventListener('blur',()=>number.value=range.value);
 document.querySelectorAll('[data-plan]').forEach(button=>button.addEventListener('click',()=>number.value=range.value));
});
const menuEl=document.getElementById('menu'),burgerEl=document.getElementById('burger');
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuEl.classList.contains('open')){menuEl.classList.remove('open');burgerEl.setAttribute('aria-expanded','false');burgerEl.focus();}});
