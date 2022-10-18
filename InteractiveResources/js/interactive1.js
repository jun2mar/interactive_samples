const checkList19 = document.querySelectorAll(".intr_one_ans");

checkList19.forEach(function(elem, index){

    elem.addEventListener("click", function(event){
        if(elem.checked){

            if(event.target.getAttribute('data-value') == "yes"){
                elem.classList.remove('is-invalid');
                elem.classList.add('is-valid');
            }

            if(event.target.getAttribute('data-value') == "no"){
                elem.classList.remove('is-valid');
                elem.classList.add('is-invalid');
            }

        } else {
            elem.classList.remove('is-valid');
            elem.classList.remove('is-invalid');
        }

    });

});