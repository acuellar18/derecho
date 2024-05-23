<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="firmaDocumento.aspx.cs" Inherits="proyecto.Pages.firmaDocumento" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Subir y firmar documentos</title>
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- PDF.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h2>Subir Documento</h2>
            <input type="file" id="fileInput" accept=".pdf"/><br/>
            <br/>
            <button onclick="handleFile()">Subir Documento</button>

            <h2>Documento Visualizado</h2>
            <canvas id="pdfCanvas"></canvas>
            <br/>
            <br/>

            <h2>Firma Electrónica</h2>
            <canvas id="signatureCanvas" width="400" height="200" style="border: 1px solid #000;"></canvas>
            <br/>
            <br/>
            <button onclick="saveSignature()">Guardar Firma</button>
            <button onclick="clearSignature()">Borrar Firma</button><br>
            <br/>

            <button onclick="signDocument()">Firmar Documento</button>
            <button onclick="downloadSignedDocument()">Descargar Documento Firmado</button>
        </div>
    </form>
    <script src="../Javascript/firmaDoc.js"></script>
</body>
</html>