function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye');
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "./assets/show.png";  // Change the icon to show password
    } else {
        passwordField.type = "password";
        eyeIcon.src = "./assets/hide.png";  // Change the icon to hide password
    }
}
