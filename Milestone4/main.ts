const form = document.getElementById('resume') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


//Handling form submission
form.addEventListener('submit',(event: Event) => {
    event.preventDefault(); //prevent page reload

    //Collect input values
    // const profilePicture =  (document.getElementById('file') as HTMLInputElement).value;
    // const profilePicture = (document.getElementById('file') as HTMLInputElement).value
    const name =  (document.getElementById('name') as HTMLInputElement).value;
    const email =  (document.getElementById('email') as HTMLInputElement).value;
    const phone =  (document.getElementById('phone') as HTMLInputElement).value;
    const education =  (document.getElementById('education') as HTMLInputElement).value;
    const experience =  (document.getElementById('experience') as HTMLInputElement).value;
    const from =  (document.getElementById('from') as HTMLSelectElement).value;
    const to =  (document.getElementById('to') as HTMLSelectElement).value;
    const skills =  (document.getElementById('skills') as HTMLInputElement).value;

    //Generating resume and making the content dynamically

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable = "true">${name}</span></p>
    <p><b>Email:</b><span contenteditable = "true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable = "true">${phone}</span></p>
    <h3>Education</h3>
    <p contenteditable = "true">${education}</p>
    <h3>Experience</h3>
    <p contenteditable = "true">${experience}</p>
    <p contenteditable = "true"><b>From: </b> ${from} </p>
    <p contenteditable = "true"><b>From: </b> ${to} </p>
    <h3>Skills</h3>
    <p contenteditable = "true">${skills}</p>
    `;
    //Display Resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing');
    }

});
