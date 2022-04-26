let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
     menu.classList.toglle("move");   
}

window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};

//Consumindo API do meu cep 
fetch(`https://viacep.com.br/ws/52170320/json/`).then(r=>{
    return r.json()
}) .then(corpo=>{
    document.getElementById("span").innerHTML=corpo.localidade
})

