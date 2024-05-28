// La función fetch es una función incorporada en JavaScript que se utiliza para realizar solicitudes de red y recuperar recursos de forma asíncrona. Es comúnmente utilizada para realizar solicitudes HTTP a un servidor y obtener datos.

// La función fetch acepta al menos un parámetro obligatorio, que es la URL del recurso al que se desea acceder. También se pueden proporcionar opciones adicionales como un objeto de configuración para personalizar la solicitud.

// Cuando se llama a la función fetch, devuelve una promesa que se resuelve con un objeto Response una vez que se completa la solicitud. El objeto Response contiene información sobre la respuesta del servidor, como el estado de la respuesta, los encabezados y el cuerpo de la respuesta.

// Aquí hay un ejemplo básico de cómo se puede utilizar la función fetch para realizar una solicitud GET a una API y obtener los datos:fetch('https://api.example.com/data')
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Hacer algo con los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    // Manejar cualquier error que ocurra durante la solicitud
    console.error('Error:', error);
  });

//   En este ejemplo, la función fetch se utiliza para realizar una solicitud GET a la URL 'https://api.example.com/data'. Luego, encadenamos las llamadas a los métodos then para procesar la respuesta. En el primer then, llamamos al método json() en el objeto Response para obtener los datos de la respuesta en formato JSON. Luego, en el segundo then, podemos hacer algo con los datos obtenidos, como mostrarlos en la consola.

//   Si ocurre algún error durante la solicitud, podemos manejarlo utilizando el método catch encadenado al final de la cadena de promesas.
  
//   Es importante tener en cuenta que la función fetch sigue la especificación de la API Fetch, que es compatible con la mayoría de los navegadores modernos. Sin embargo, si necesitas admitir navegadores más antiguos, es posible que debas utilizar una biblioteca o un polifill para proporcionar una funcionalidad similar.