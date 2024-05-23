<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="proyecto.Pages.login" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Iniciar Sesión</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <form id="formRegistro" runat="server">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-primary text-white d-flex justify-content-between">
                            <h2 class="card-title">Iniciar Sesión</h2>
                            <button type="button" class="btn btn-warning" onclick="location.href='registro.aspx';">
                                Registrarse <i class="bi bi-plus"></i>
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <asp:Label ID="lblUsername" runat="server" Text="Nombre de Usuario:" CssClass="form-label"></asp:Label>
                                <asp:TextBox ID="txtUsername" runat="server" CssClass="form-control" Required="true"></asp:TextBox>
                            </div>
                            <div class="mb-3">
                                <asp:Label ID="lblPassword" runat="server" Text="Clave:" CssClass="form-label"></asp:Label>
                                <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" CssClass="form-control" Required="true"></asp:TextBox>
                            </div>
                            <asp:Button ID="btnIniciarSesion" runat="server" Text="Iniciar Sesión" OnClick="btnIniciarSesion_Click" CssClass="btn btn-primary" />
                            <p id="P1" class="error-message" runat="server"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <script src="../Javascript/jquery-3.6.0.min.js"></script>
    <script src="../Javascript/mensajes.js"></script>
    <script src="../Javascript/validaLogin.js"></script>
</body>
</html>