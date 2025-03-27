self.addEventListener('install', function (event) {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('fetch', function (event) {
    // Este SW no hace caching, pero ya activa la instalación
  });
  