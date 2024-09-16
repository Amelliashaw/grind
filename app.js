const menu = document.getElementById('menu');
// console.log(menu);
menu.addEventListener('click',()=>{
    document.querySelector('nav > ul').classList.toggle('showmenu');
})