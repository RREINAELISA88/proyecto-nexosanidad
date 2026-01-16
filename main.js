const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
};
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const telefono = document.getElementById("telefono").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const hospital = document.getElementById("hospital").value.trim();
    const privacidad = document.getElementById("privacidad").checked;

    if (!nombre || !email || !hospital || !privacidad) {
        alert("Por favor complete todos los campos obligatorios.");
        return;
    }

    // NOTIFICACIÓN PREMIUM
    const msg = document.createElement("div");
    msg.innerText = "¡Mensaje enviado con éxito! 🎉 Nos pondremos en contacto en menos de 24 horas.";
    msg.style.position = "fixed";
    msg.style.bottom = "20px";
    msg.style.right = "20px";
    msg.style.padding = "15px 20px";
    msg.style.background = "#003366";
    msg.style.color = "white";
    msg.style.borderRadius = "12px";
    msg.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
    msg.style.zIndex = "9999";
    msg.style.opacity = "0";
    msg.style.transition = "0.5s";

    document.body.appendChild(msg);

    setTimeout(() => msg.style.opacity = "1", 100);
    setTimeout(() => msg.style.opacity = "0", 4000);
    setTimeout(() => msg.remove(), 4600);

    // Limpiar formulario
    document.getElementById("contact-form").reset();


  });
 
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute("data-delay") || 0;

                setTimeout(() => {
                    entry.target.classList.add("animate");
                }, delay);
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(el => observer.observe(el));
});
 // Smooth scrolling para los enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animación simple para las tarjetas al hacer scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Aplicar animación a las tarjetas del blog
        document.querySelectorAll('.blog-card').forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });

        document
          .querySelector(".map-item")
          .addEventListener("click", function () {
            window.open(
              "https://maps.google.com/?q=1234+Elm+St.+San+Francisco+CA",
              "_blank"
            );
          });


        
