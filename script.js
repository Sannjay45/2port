// =======================
// Open Popup
// =======================

function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// =======================
// Close Popup
// =======================

function closePopup() {
    document.getElementById("popup").style.display = "none";

    document.getElementById("error").style.display = "none";

    document.getElementById("error").innerHTML = "";
}

// =======================
// Close Popup When Clicking Outside
// =======================

window.onclick = function(event) {

    let popup = document.getElementById("popup");

    if (event.target == popup) {

        closePopup();

    }

};

// =======================
// Close Popup using ESC
// =======================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePopup();

    }

});

// =======================
// Form Validation
// =======================

function validateForm() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("error");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let phonePattern = /^[6-9][0-9]{9}$/;

    // Name
    if (name.length < 3) {

        error.style.display = "block";

        error.innerHTML = "Enter a valid name.";

        return false;

    }

    // Email
    if (!emailPattern.test(email)) {

        error.style.display = "block";

        error.innerHTML = "Enter a valid email address.";

        return false;

    }

    // Phone
    if (!phonePattern.test(phone)) {

        error.style.display = "block";

        error.innerHTML = "Enter a valid 10-digit mobile number.";

        return false;

    }

    // Message
    if (message.length < 10) {

        error.style.display = "block";

        error.innerHTML = "Message should contain at least 10 characters.";

        return false;

    }

    // Hide Error

    error.style.display = "none";

    // Success

    alert("🎉 Thank you, " + name + "! Your message has been sent successfully.");

    // Reset Form

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("message").value = "";

    // Close Popup

    closePopup();

    return false;
}