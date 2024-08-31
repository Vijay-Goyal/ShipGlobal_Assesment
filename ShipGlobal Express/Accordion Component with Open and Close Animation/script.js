document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const section = this.parentElement;
            const content = section.querySelector('.accordion-content');
            if (section.classList.contains('active')) {
                section.classList.remove('active');
            } else {
                document.querySelectorAll('.section.active').forEach(openSection => {
                    openSection.classList.remove('active');
                });

                section.classList.add('active');
            }
        });
    });
});
