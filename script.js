const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function showMore() {
    var moreContent = document.getElementById("more-content");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
   
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`;
    
    
    window.location.href = `mailto:jomanatantawy42@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});



