window.addEventListener('load', function() {
    alert('¡Bienvenido a la página de Economía Digital!');
});
document.getElementById('get-location').addEventListener('click', getLocation);

function getLocation() {
  const status = document.getElementById('status');
  const map = document.getElementById('map');

  // Verifica si el navegador soporta la geolocalización
  if ('geolocation' in navigator) {
    status.textContent = 'Obteniendo tu ubicación...';
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    status.textContent = 'La geolocalización no es soportada por tu navegador.';
  }

  // Función que se ejecuta si la geolocalización tiene éxito
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.textContent = `Tu ubicación: Latitud ${latitude}, Longitud ${longitude}`;

    // Muestra un mapa usando Google Maps
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    map.innerHTML = `<iframe src="${mapUrl}" width="100%" height="100%" style="border:0;"></iframe>`;
  }

  // Función que se ejecuta si hay un error en la geolocalización
  function error() {
    status.textContent = 'No se pudo obtener tu ubicación.';
  }
}
