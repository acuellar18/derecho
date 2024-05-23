using proyecto.Class;
using proyecto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace proyecto.Pages
{
    public partial class login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        private void consultaUsuario()
        {

        }

        protected void btnIniciarSesion_Click(object sender, EventArgs e)
        {
            string sRespuesta = validaLogin();
            if (sRespuesta.Equals("true"))
            {
                Response.Redirect("firmaDocumento.aspx", false);
                return;
            }
            mensajeHelper.mensajeAceptar("error", sRespuesta);
        }

        private string validaLogin()
        {
            loginInfo _INFO = new loginInfo();
            _INFO.nombreUsuario = txtUsername.Text;
            _INFO.clave = txtPassword.Text;

            loginBll _BLL = new loginBll();
            return _BLL.login(_INFO);
        }

        protected void btnNuevoRegistro_Click(object sender, EventArgs e)
        {
            Response.Redirect("registro.aspx", false);
        }
    }
}