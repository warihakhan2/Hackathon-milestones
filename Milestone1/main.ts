// var toggleButton = document.getElementById('btn') as HTMLButtonElement;
var skills = document.getElementById('skills') as HTMLElement;
var display = 0;
function hideshow(){
    if(display == 1){
        skills.style.display = 'flex';
        display = 0;
    }
    else{
        skills.style.display = 'none';
        display = 1;
    }
}