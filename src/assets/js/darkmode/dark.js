const btnSwitch = document.querySelector('#switch');
const btnbody = document.querySelector('#body');
btnSwitch.addEventListener('click', () =>{
    console.log('Pintar');
    btnbody.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});