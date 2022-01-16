const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');



window.onload = () => {

        formulario.addEventListener('submit', validarFormulario);

}

function validarFormulario(e) {
            e.preventDefault();


            const terminoBusqueda = document.querySelector('#termino').value;

            if (terminoBusqueda === '') {
                    mostrarAlertar('Agrege un termino de busqueda');
                    
                    return;
            }


}

function mostrarAlertar(mensaje){
        // const Alerta= document.createElement('p');

        // Alerta.classList.add('bg-red-100','border-red-400','text-red-700', 'px-4', 'py-3','rounder','max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        // Alerta.innerHTML = `
        //                     <strong class="font-bold">Error</strong>
        //                  <span class="block sm:inline">${mensaje}</span>
        
        // `;

        // formulario.appendChild(Alerta);

        // setTimeout(() => {
        //         Alerta.remove();
        // }, 2000);
        Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: `${mensaje}`,
                
                })
}