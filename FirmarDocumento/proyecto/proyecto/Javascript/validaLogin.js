$(document).ready(function () {



});

function validaCampos()
{
    var user = document.getElementById('txtUsername').value;
    var Pass = document.getElementById('txtPassword').value;

    if (user == "")
    {
        mensajeAceptar('info','Debe indicar un usuario');
        return false;
    }
    else if(Pass == "")
    {
        mensajeAceptar('info','Debe indicar una clave');
        return false;
    }
    return true;
}
