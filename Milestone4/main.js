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
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable = \"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable = \"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable = \"true\">").concat(phone, "</span></p>\n    <h3>Education</h3>\n    <p contenteditable = \"true\">").concat(education, "</p>\n    <h3>Experience</h3>\n    <p contenteditable = \"true\">").concat(experience, "</p>\n    <p contenteditable = \"true\"><b>From: </b> ").concat(from, " </p>\n    <p contenteditable = \"true\"><b>From: </b> ").concat(to, " </p>\n    <h3>Skills</h3>\n    <p contenteditable = \"true\">").concat(skills, "</p>\n    ");
    //Display Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
