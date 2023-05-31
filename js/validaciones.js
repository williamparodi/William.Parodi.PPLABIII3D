export function validarNumeros(numero)
{
    let retorno = false;
    if(!isNaN(numero))
    {
        retorno = true
    }
    else
    {
        mostrarVentanaModal("Solo numeros validos","mensaje-error");
    }
    return retorno;
}

export function validarLetras(palabras)
{
    let retorno = false;
    if(palabras.length > 0 && palabras.length < 50)
    {
        retorno = true
    }
    else
    {
        mostrarVentanaModal("Se paso con la cantidad de palabras","mensaje-error");
    }
    return retorno;
}

export function validarForm(formulario)
{
    let retorno = false;

    if(validarNumeros(formulario.rangeFuerza.value) 
        && validarLetras(formulario.txtNombre.value)
        && validarLetras(formulario.txtAlias.value)
        && validarLetras(formulario.selectArma.value))
    {
        retorno = true;
    }

    return retorno;
}

export function mostrarVentanaModal(mensaje,nombreElemento)
{
    const $modal = document.getElementById("modal");
    const $mensaje = document.getElementById(nombreElemento);
    const $cerrarBtn = document.getElementById("cerrar");
    if($modal.open)
    {
        $modal.close();
    }

    $mensaje.textContent = mensaje;

    $modal.showModal();

    $cerrarBtn.addEventListener("click",()=>
    {    
        $modal.close();
    });
}