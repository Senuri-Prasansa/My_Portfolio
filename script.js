var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
})





function openGithub(){
    const githubUrl = "https://github.com/Senuri-Prasansa";

    window.open(githubUrl, "_blank");
}

function openLinkedIn(){
    const linkedInUrl = "https://www.linkedin.com/in/senuri-prasansa-sewwandi/";

    window.open(linkedInUrl, "_blank");
}

function openFaceBook(){
    const faceBookUrl = "https://www.facebook.com/profile.php?id=100080221631394";

    window.open(faceBookUrl, "_blank");
}

function openInsta(){
    const instaUrl = "https://www.instagram.com/senuriprasansa/profilecard/?igsh=MTRwZ2w4dzlkb2Z4Zw==";

    window.open(instaUrl, "_blank");
}




document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }; 

    emailjs.send('service_7sgehpu', 'template_h53149x', templateParams)
    .then(function(response) {
        document.getElementById('status').textContent = 'Message sent successfully!';
        document.getElementById('status').style.color = 'yellow';
    }, function(error) {
        document.getElementById('status').textContent = 'Error sending message!';
        document.getElementById('status').style.color = 'red';
    });

    document.getElementById('contactForm').reset();

});





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};