function confirmarClave()
{
    var Pass1 = document.getElementById('txtPassword').value;
    var Pass2 = document.getElementById('txtConfirmarPassword').value;

    if (Pass1 !== Pass2)
    {
        mensajeAceptar('info', 'La clave es diferente, verifique!');
        return false;
    }
}