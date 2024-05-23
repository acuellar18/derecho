var pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 1,
    canvas = document.getElementById('pdfCanvas'),
    ctx = canvas.getContext('2d'),
    signatureCanvas = document.getElementById('signatureCanvas'),
    signatureCtx = signatureCanvas.getContext('2d'),
    drawing = false;

function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(function (page) {
        var viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        var renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
}

function handleFile() {
    var file = document.getElementById('fileInput').files[0];
    var fileReader = new FileReader();
    fileReader.onload = function () {
        var typedarray = new Uint8Array(this.result);
        pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
            pdfDoc = pdf;
            renderPage(pageNum);
            // Habilitar dibujo de firma después de cargar el documento
            signatureCanvas.style.pointerEvents = "auto";
        }).catch(function (error) {
            console.error('Error al cargar el documento:', error);
        });
    };
    fileReader.readAsArrayBuffer(file);
}

function saveSignature() {
    var signatureData = signatureCanvas.toDataURL();
    localStorage.setItem('signature', signatureData);
}

function clearSignature() {
    signatureCtx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    localStorage.removeItem('signature');
}

function signDocument() {
    if (!pdfDoc) {
        alert('Por favor, primero carga un documento PDF.');
        return;
    }
    var signatureData = localStorage.getItem('signature');
    if (!signatureData) {
        alert('Por favor, guarda tu firma primero.');
        return;
    }
    // Dibujar la firma en el canvas del documento
    var img = new Image();
    img.onload = function () {
        var page = pdfDoc.getPage(pageNum);
        page.then(function (page) {
            var viewport = page.getViewport({ scale: 1 });
            var signatureWidth = signatureCanvas.width;
            var signatureHeight = signatureCanvas.height;
            var xPos = (viewport.width - signatureWidth) / 2;
            var yPos = viewport.height - signatureHeight - 10; // 10 pixels from bottom
            ctx.drawImage(img, xPos, yPos, signatureWidth, signatureHeight);
        });
    };
    img.src = signatureData;
}

function downloadSignedDocument() {
    if (!pdfDoc) {
        alert('Por favor, primero carga un documento PDF.');
        return;
    }
    var signatureData = localStorage.getItem('signature');
    if (!signatureData) {
        alert('Por favor, guarda tu firma primero.');
        return;
    }
    // Agregar la firma al documento y descargar
    signDocument();
    setTimeout(function () {
        var signedDocumentData = canvas.toDataURL();
        var a = document.createElement('a');
        a.href = signedDocumentData;
        a.download = 'documento_firmado.pdf';
        a.click();
    }, 500); // Esperar un poco para asegurarse de que la firma se ha dibujado correctamente
}

signatureCanvas.addEventListener('mousedown', function (e) {
    drawing = true;
    draw(e.offsetX, e.offsetY);
});

signatureCanvas.addEventListener('mousemove', function (e) {
    if (drawing) {
        draw(e.offsetX, e.offsetY);
    }
});

signatureCanvas.addEventListener('mouseup', function () {
    drawing = false;
});

function draw(x, y) {
    if (!drawing) return;
    signatureCtx.lineWidth = 2;
    signatureCtx.lineCap = 'round';
    signatureCtx.strokeStyle = '#000';
    signatureCtx.lineTo(x, y);
    signatureCtx.stroke();
    signatureCtx.beginPath();
    signatureCtx.moveTo(x, y);
}