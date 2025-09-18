// script.js

window.addEventListener('load', () => {
    const loaderBackdrop = document.querySelector('.loader-backdrop');
    const content = document.querySelector('.content');

    // Simula um tempo de carregamento de 3 segundos para mostrar a animação
    setTimeout(() => {
        // Inicia a transição de saída da tela de carregamento
        loaderBackdrop.style.opacity = '0';
        
        // Remove a tela de carregamento e exibe o conteúdo após a transição
        setTimeout(() => {
            loaderBackdrop.style.display = 'none';
            content.classList.remove('hidden');
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 1000); // 1000 milissegundos corresponde à duração da transição no CSS
        
    }, 3000); // Simula o carregamento por 3 segundos
});