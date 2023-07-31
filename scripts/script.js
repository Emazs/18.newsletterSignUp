/*Container */

let inputbutton = document.querySelector('#inputButton');
let inputEmail = document.querySelector('#inputEmail');
let requiredEmail = document.querySelector('.requiredEmail');
let container1 = document.querySelector('.container');

/*Container2*/

let container2 = document.querySelector('.container2');
let agregarEmail = document.querySelector('.agregarEmail');
let buttonDismiss = document.querySelector('.buttonDismiss');

inputEmail.addEventListener('keyup', () => {
    if (inputEmail.value == '') {
        inputEmail.classList.remove('error');
        requiredEmail.style.display = 'none';
    }
});

buttonDismiss.addEventListener("click", () => {
    container1.style.display = 'flex';
    container2.classList.toggle('Activate');
    inputEmail.value = '';
});

inputbutton.addEventListener("click", (event) => {
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputEmail.value.match(validEmail)) {
        agregarEmail.innerHTML = inputEmail.value;
        container1.style.display = 'none';
        container2.classList.add('Activate');
    } else {
        inputEmail.classList.add('error');
        requiredEmail.style.display = 'block';
    }
})