document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.getElementById('videoElement');
    const captureButton = document.getElementById('captureButton');
    const fileInput = document.getElementById('fileInput');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const selectedImage = document.getElementById('selectedImage');

    // Comprueba si el navegador admite getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Solicita acceso a la cámara y al micrófono
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(function (stream) {
                // Muestra la transmisión de la cámara en el elemento de video
                videoElement.srcObject = stream;
            })
            .catch(function (error) {
                console.error('Error al acceder a la cámara y al micrófono:', error);
                alert('No se pudo acceder a la cámara o microfono. Asegúrate de permitir el acceso.');
            });

        // Agrega un event listener al botón de captura de foto
        captureButton.addEventListener('click', function () {
            // Verifica si se detectó la cámara antes de intentar capturar una foto
            if (!videoElement.srcObject) {
                alert('No se detectó la cámara. Asegúrate de que la cámara esté conectada y permitida.');
                return;
            }

            // Dibuja el contenido del video en el canvas
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

            // Convierte el contenido del canvas a una imagen
            const imageData = canvas.toDataURL('image/png');

            // Muestra la imagen capturada
            selectedImage.src = imageData;
            selectedImage.style.display = 'block';
        });

        // Agrega un event listener al campo de entrada de archivos
        fileInput.addEventListener('change', function (event) {
            // Verifica si se seleccionó un archivo
            if (event.target.files.length > 0) {
                const file = event.target.files[0];

                // Lee el contenido del archivo como una URL de datos (base64)
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imageData = e.target.result;

                    // Muestra la imagen seleccionada
                    selectedImage.src = imageData;
                    selectedImage.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    } else {
        alert('getUserMedia no es compatible con este navegador.');
    }
});