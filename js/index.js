let accordions = document.querySelectorAll('.accordion-wrapper .accordion');

accordions.forEach((acco) => {
    acco.onclick = () => {
        accordions.forEach((subcontent) => {
            if (subcontent !== acco) {
                subcontent.classList.remove('active');
            }
        });

        acco.classList.toggle('active');
    }
})