const bookButtons = document.querySelectorAll("#services a");
const selectedService = document.querySelector("#selected-service");
const whatsappBooking = document.querySelector("#whatsapp-booking");

bookButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const service = button.dataset.service;

        selectedService.textContent = "Selected service: " + service;

        whatsappBooking.href =
            "https://wa.me/2348165578548?text=" +
            encodeURIComponent("Hi, I'd like to book a " + service + ".");

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
});