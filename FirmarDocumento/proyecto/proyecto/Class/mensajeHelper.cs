using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

namespace proyecto.Class
{
    public static class mensajeHelper
    {
        public static void mensajeAceptar(string pTipo, string pMensaje)
        {
            // Agrega comillas alrededor de los parámetros
            string tipoConComillas = "\"" + pTipo + "\"";
            string mensajeConComillas = "\"" + pMensaje + "\"";

            // Genera el código JavaScript con las comillas agregadas
            string script = "$(function() { mensajeAceptar(" + tipoConComillas + "," + mensajeConComillas + "); });";

            // Registra el bloque de script cliente
            ScriptManager.RegisterClientScriptBlock(HttpContext.Current.CurrentHandler as Page, typeof(Page), "mensaje", script, true);
        }
    }
}