using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace proyecto.Class
{
    public class conexionDB
    {
        #region
        private string connection = string.Empty;
        private SqlConnection connect;
        private SqlCommand command;
        private SqlDataAdapter da;
        private DataTable dt;
        private DataSet ds;
        #endregion

        public conexionDB()
        {
            if (string.IsNullOrEmpty(connection.ToString()))
            {
                connect = new SqlConnection();
                //try
                //{
                //    connection = ConfigurationManager.ConnectionStrings["cn"].ConnectionString;
                //}
                //catch
                //{
                connection = ConfigurationManager.AppSettings.Get("cn");
                //}
            }
        }
        private SqlConnection connecttodb()
        {
            if (connect.State != ConnectionState.Open)
            {
                try
                {
                    connect.ConnectionString = connection;
                    connect.Open();
                }
                catch
                { }
            }
            return connect;
        }
        private void closeconnection()
        {
            if (connect.State != ConnectionState.Closed)
                connect.Close();
        }
        public string SelectString(string query)
        {
            string cadena = string.Empty;
            try
            {
                connecttodb();
                command = new SqlCommand(query, connect);
                cadena = command.ExecuteScalar().ToString();
            }
            catch
            {
                cadena = string.Empty;
            }
            finally
            {
                closeconnection();
            }
            return cadena;
        }
        public bool Insertar(string query)
        {
            bool exito;
            try
            {
                connecttodb();
                command = new SqlCommand(query, connect);
                command.ExecuteNonQuery();
                exito = true;
            }
            catch
            {
                exito = false;
            }
            finally
            {
                closeconnection();
            }
            return exito;
        }
        public DataSet EjecutarDs(string sp)
        {
            ds = new DataSet();
            try
            {
                connecttodb();
                command = new SqlCommand(sp, connect);
                da = new SqlDataAdapter();
                da.SelectCommand = command;
                da.Fill(ds);
                return ds;
            }
            catch
            { }
            finally
            {
                closeconnection();
            }
            return ds;
        }
        public DataTable EjecutarDt(string query)
        {
            dt = new DataTable();
            try
            {
                connecttodb();
                da = new SqlDataAdapter(query, connect);
                da.Fill(dt);
            }
            catch
            { }
            finally
            {
                connecttodb();
            }
            return dt;
        }
        public string SelectStringDt(string sp, string codigoVenta, DataTable dt)
        {
            string cadena = string.Empty;
            try
            {
                connecttodb();
                SqlCommand cmd = new SqlCommand(sp, connect);
                cmd.CommandType = CommandType.StoredProcedure;
                SqlParameter param = new SqlParameter();
                param.ParameterName = "@CodigoVenta";
                param.Value = codigoVenta;
                param.ParameterName = "@detalleVenta";
                param.Value = dt;
                cmd.Parameters.Add(param);
                cadena = cmd.ExecuteScalar().ToString();
            }
            catch (Exception ex)
            {
                cadena = string.Empty;
            }
            finally
            {
                closeconnection();
            }
            return cadena;
        }
    }
}