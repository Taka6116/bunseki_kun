document.addEventListener('DOMContentLoaded', () => {
    // Accordion Logic
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            const icon = this.querySelector('span');
            
            // パネルの開閉アニメーション
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                // アイコンがあれば切り替え（現在のHTMLにはspanがないため、必要ならHTMLに追加してください）
                if(icon) icon.textContent = '+'; 
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                if(icon) icon.textContent = '-';
            }
        });
    });
});