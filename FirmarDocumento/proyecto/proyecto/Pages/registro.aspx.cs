using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using proyecto.Models;
using proyecto.Class;

namespace proyecto.Pages
{
    public partial class registro : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        private bool validaPassword()
        {
            if (txtPassword.Text != txtConfirmarPassword.Text)
            {
                mensajeHelper.mensajeAceptar("info","Las claves son diferentes, verifique!");
                return false;
            }
            return true;
        }

        protected void btnRegistrar_Click(object sender, EventArgs e)
        {
            if (validaPassword())
            {
                string sRespuesta = insertaRegistro();
                if (sRespuesta.Equals("true"))
                {
                    mensajeHelper.mensajeAceptar("exito", "El registro se realizo con éxito!");
                    return;
                }
                mensajeHelper.mensajeAceptar("error", sRespuesta);
            }
        }

        private string insertaRegistro()
        {
            loginInfo _INFO = new loginInfo();
            _INFO.nombreUsuario = txtUsername.Text;
            _INFO.clave = txtPassword.Text;
            _INFO.nombreCompleto = txtNombreCompleto.Text;

            loginBll _BLL = new loginBll();
            return _BLL.registro(_INFO);
        }
    }
}