function enviarMensajeWhatsApp() {
    var telefono = "1138479551"; // Reemplaza con tu número de teléfono
    var mensaje = "necesito info"; // Mensaje predeterminado (opcional)
    var url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}
