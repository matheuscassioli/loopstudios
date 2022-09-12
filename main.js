const menuInvisible = document.querySelector('.img-hambuguer');

menuInvisible.addEventListener('click', () =>{ 
    let aparecerMenu = document.querySelector('.menu-mobile');

    aparecerMenu.classList.add('testando')
});

 
const fecharMenu = document.querySelector('.fechar');

fecharMenu.addEventListener('click', () =>{ 
    let fecharMenu = document.querySelector('.menu-mobile');
    
    fecharMenu.classList.remove('testando')
});
 