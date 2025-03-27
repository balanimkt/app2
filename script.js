const productos = [
    { id: "pepino", nombre: "Jugo de pepino", precio: 1 },
    { id: "kiwi", nombre: "Apio, manzana y kiwi", precio: 1.5 },
    { id: "perejil", nombre: "Apio, manzana y perejil", precio: 1.5 },
    { id: "espinaca", nombre: "Piña y espinaca", precio: 1.5 },
    { id: "sandia", nombre: "Sandía", precio: 1 },
    { id: "maracuya", nombre: "Maracuyá", precio: 1 },
    { id: "mora", nombre: "Mora", precio: 1 },
    { id: "naranja", nombre: "Naranja", precio: 1 },
    { id: "queso", nombre: "Tostada de queso", precio: 1 },
    { id: "mixta", nombre: "Tostada mixta", precio: 1.75 },
  ];
  
  document.getElementById("formularioPedido").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let mensaje = "Hola, quiero hacer el siguiente pedido:\n\n";
    let total = 0;
  
    productos.forEach((producto) => {
      const cantidad = parseInt(document.getElementById(producto.id).value);
      if (cantidad > 0) {
        const subtotal = (producto.precio * cantidad).toFixed(2);
        mensaje += `• ${cantidad} x ${producto.nombre} = $${subtotal}\n`;
        total += producto.precio * cantidad;
      }
    });
  
    mensaje += `\nTotal: $${total.toFixed(2)}`;
  
    const numero = "593986535080";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
  
  document.querySelectorAll("input[type='number']").forEach((input) => {
    input.addEventListener("input", () => {
      let total = 0;
      productos.forEach((producto) => {
        const cantidad = parseInt(document.getElementById(producto.id).value);
        if (cantidad > 0) {
          total += producto.precio * cantidad;
        }
      });
      document.getElementById("total").textContent = total.toFixed(2);
    });
  });
  