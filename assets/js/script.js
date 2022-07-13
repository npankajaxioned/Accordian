const toggles = document.querySelectorAll('.accordian-item');

toggles.forEach(toggle => {
    toggle.addEventListener('click',() => {
        if(toggle.classList.contains('active')){
                toggle.classList.remove('active');

        }
        else{
            toggles.forEach(toggle => {
                toggle.classList.remove('active');
            });
            toggle.classList.add('active');
        }
    });
});






















