//Configurar el Service worker
alert('hola')
if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('sw.js') //Ruta al archivo del service worker
    .then(function (registration){
        //El Service worker se ha registrado correctamente
        console.log('Service Worler registrado con exito.', registration);
    })
    .catch(function (error){
        //Hubo un error al registrar el Service Worker
        console.error('Error al registar el Service Worker:', error);     
    });
}else{
    console.error('Error no soporta el Service Worker');
}