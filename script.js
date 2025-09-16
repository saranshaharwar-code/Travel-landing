// Mobile menu
    const hamb = document.getElementById('hamb');
    const menu = document.getElementById('menu');
    hamb && hamb.addEventListener('click', ()=>{
      if(menu.style.display==='flex') menu.style.display='none';
      else { menu.style.display='flex'; menu.style.flexDirection='column'; menu.style.position='absolute'; menu.style.right='20px'; menu.style.top='68px'; menu.style.background='white'; menu.style.padding='12px'; menu.style.borderRadius='12px'; menu.style.boxShadow='0 10px 30px rgba(2,6,23,0.08)'; }
    });

    // Lightbox (simple and unobtrusive)
    document.querySelectorAll('.gallery img').forEach(img=>{
      img.addEventListener('click', ()=>{
        const overlay = document.createElement('div');
        overlay.style.cssText='position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,0.75);z-index:9999';
        const modal = img.cloneNode(); modal.style.maxWidth='90%'; modal.style.maxHeight='90%'; modal.style.borderRadius='12px';
        overlay.appendChild(modal);
        overlay.addEventListener('click', ()=>overlay.remove());
        document.body.appendChild(overlay);
      })
    })