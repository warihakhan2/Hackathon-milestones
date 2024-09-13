var form = document.getElementById('resume');
var resumeDisplayElement = document.getElementById('resume-display');
//Handling form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //Collect input values
    // const profilePicture =  (document.getElementById('file') as HTMLInputElement).value;
    // const profilePicture = (document.getElementById('file') as HTMLInputElement).value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var skills = document.getElementById('skills').value;
    //Generating resume and making the content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <p><b>From: </b> ").concat(from, " </p>\n    <p><b>From: </b> ").concat(to, " </p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //Display Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
