

import {navbar,home,about,skill,project,git,contact} from "./common.js"
document.getElementById("nav").innerHTML=navbar();
document.getElementById("hom").innerHTML=home();
document.getElementById("abt").innerHTML=about();
document.getElementById("skil").innerHTML=skill();
document.getElementById("pro").innerHTML=project();
document.getElementById("git").innerHTML=git();
document.getElementById("con").innerHTML=contact();


document.getElementById("resume-button-1").addEventListener("click",()=>{
    window.location.assign("https://drive.google.com/file/d/1J4GwycqDhyFkf7K7Qmdt7tVjJOQSWl-p/view?usp=share_link","_blank");
})
document.getElementById("resume-button-2").addEventListener("click",()=>{
    window.location.assign("https://drive.google.com/file/d/1J4GwycqDhyFkf7K7Qmdt7tVjJOQSWl-p/view?usp=share_link","_blank");
})

