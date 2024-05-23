using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using proyecto.Models;
namespace proyecto
{
    public class loginBll
    {
        proyecto.Class.conexionDB cn = new Class.conexionDB();

        //-- VALIDA INICIO DE SESION ---------------------------
        public string login(loginInfo _INFO)
        {
            string sql = string.Empty;

            sql = "EXEC login @nombreUsuario  = '" + _INFO.nombreUsuario +
                           "',@clave          = '" + _INFO.clave +
                                               "'";

            string sRespuesta = cn.SelectString(sql);
            return sRespuesta;
        }

        //-- NUEVO REGISTRO ------------------------------------
        public string registro(loginInfo _INFO)
        {
            string sql = string.Empty;

            sql = "EXEC insertaUsuarios @nombreUsuario    = '" + _INFO.nombreUsuario +
                                      "',@clave           = '" + _INFO.clave +
                                      "',@nombreCompleto  = '" + _INFO.nombreCompleto +
                                                           "'";

            string sRespuesta = cn.SelectString(sql);
            return sRespuesta;
        }
    }
}