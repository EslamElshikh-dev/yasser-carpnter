document.addEventListener("DOMContentLoaded", function() {
    
    // إرسال البيانات إلى واتساب
    const form = document.getElementById('whatsappForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const service = document.getElementById('service').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value || 'لا يوجد';
        const details = document.getElementById('details').value;
        
        // بناء الرسالة بناءً على الشروط التسويقية الخالية من علامات الترقيم
        const message = `مرحبا ياسر للنجارة
الاسم ${name}
الخدمة المطلوبة ${service}
رقم الجوال ${phone}
البريد الإلكتروني ${email}
التفاصيل ${details}`;

        const whatsappUrl = `https://wa.me/966570308373?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // الأسئلة الشائعة Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            }
        });
    });

    // Lightbox لمعرض الأعمال
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const images = document.querySelectorAll('.gallery-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    images.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
        });
    });

    closeLightbox.addEventListener('click', function() {
        lightbox.style.display = "none";
    });

    window.addEventListener('click', function(e) {
        if (e.target == lightbox) {
            lightbox.style.display = "none";
        }
    });
});
