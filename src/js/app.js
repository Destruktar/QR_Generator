let qr;

document.querySelector('.generateBtn').addEventListener('click', (e) => {
    e.preventDefault;
    console.log("Se clico generar");
    const contenedor = document.querySelector('.qrCode');
    contenedor.innerHTML = "";
    const textArea = document.querySelector('.textArea');
    const text = textArea.value;

    if(text !== ""){
        qr = new QRCode(contenedor, {
            text: text,
            widht: 256,
            height: 256
        });
    
        textArea.value = "";
    } else{
        alert('Debe escribir algo');
    }
    
} );

document.querySelector('.downloadBtn').addEventListener('click', (e) =>{
    e.preventDefault;

    console.log("Se clico Download");
    const img = document.querySelector('.qrCode img');

    if(img){
        const link = document.createElement('A');
        link.href = img.src;
        link.download = 'codigo_QR.png';
        link.click();
    } else{
        alert('Primero genera un QR');
    }
})