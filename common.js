function navbar(){
    return `<header>
       
    <input type="checkbox" id="menu-bar">
    <label for="menu-bar">Menu</label>
     <nav class="navbar" id="nav-menu">
       <ul>
        <li title="HOME"><a class="nav-link home" href="#home"><span> HOME</span></a></li>
        <li title="ABOUT"><a class="nav-link about" href="#about"><span> ABOUT</span></a></li>
        <li title="SKILLS"><a class="nav-link skills" href="#skills"><span>SKILLS</span> </a></li>
        <li title="PROJECTS"><a class="nav-link projects" href="#projects"><span>PROJECTS</span></a></li>
        <li title="CONTACT"><a class="nav-link contact" href="#contact"><span>CONTACT</span> </a></li>
        <li title="RESUME" id="resume-button-1"><a class="nav-link resume" id="resume-link-1"
                href="/Resources/Ashish_Kumar_Resume.pdf" target="_blank" download="Ashish_Kumar_Resume.pdf"><span
                >RESUME</span> </a></li>
          
       </ul>
     </nav>
   </header>`
}

function home(){
    return `<section title="Home" id="home">
    <div class="child2">
        <img src="./Resources/pic.png" class="home-img" alt="#" />
    </div>

    <div class="child1">
        <h1 id="user-detail-name">
            Hello I' AM <br>
            Ashish Kumar</h1>
        <h2 id="user-details">Java Backend Developer </h2>
        <div class="resume-button-2">
            <button id="resume-button-2" class="btn"><a id="resume-link-2" href='./Resources/Ashish_Kumar_Resume.pdf' target="_blank"
                    download="Ashish_Kumar_Resume.pdf">RESUME</a></button>
        </div>

    </div>
</section>`
}

function about(){
    return ` <h1 class="mainheading">ABOUT</h1>
    <section title="About" id="about" class="about section">
        <title>About</title>
        <h1 id="user-detail-name"> </h1>
        <h2 id="user-detail-intro">
            Backend developer with a Specialization in SpringBoot,Java,JavaScript            
             who possess self-discipline and the ability to work 
             with minimum supervision. Looking forward to join a progressive
              organization with opportunities to work on significant projects.
        </h2>
    </section>`
}

function skill(){
    return `<h1 class="mainheading">SKILLS</h1>
    <section title="Skills" id="skills">
        <div class="skills-card">
            <div class="skills-card-name  bar"></div>
            <div class="skills-card-img name"><img src="/Resources/rest.png" alt=""></div>
        </div>
        <div class="skills-card">
            <div class="skills-card-name  bar">

            </div>
            <div class="skills-card-img name"><img src="/Resources/security.png" alt=""></div>
        </div>

        <div class="skills-card">
            <div class="skills-card-name  bar">

            </div>
            <div class="skills-card-img name"><img src="/Resources/Java.png" alt=""></div>
        </div>

        <div class="skills-card">
            <div class="skills-card-name  bar">

            </div>
            <div class="skills-card-img name"><img src="/Resources/spring.png" alt=""></div>
        </div>

        <div class="skills-card ">
            <div class="skills-card-name  bar">

            </div>
            <div class="skills-card-img name"><img src="/Resources/multi.png" alt=""></div>
        </div>

        <div class="skills-card">
            <div class="skills-card-name  bar">

            </div>
            <div class="skills-card-img name"><img src="/Resources/mysql.png" alt=""></div>
        </div>

        <div class="skills-card">
            <div class="skills-card-name  bar">

            </div>
            <div class="skills-card-img name"><img src="Resources/JavaScript.png" alt=""></div>
        </div>

        <div class="skills-card">
            <div class="skills-card-name  bar">

            </div>
            <div class="skills-card-img name"><img src="/Resources/Html.png" alt=""></div>
        </div>

        <div class="skills-card">
            <div class="skills-card-name  bar">

            </div>
            <div class="skills-card-img name"><img src="/Resources/css.png" alt=""></div>
        </div>

        <div class="skills-card">
            <div class="skills-card-name bar">

            </div>
            <div class="skills-card-img name"><img src="/Resources/github.png" alt=""></div>
        </div>

        

        

    </section>`
}

function project(){
    return `<h1 class="mainheading">PROJECTS</h1>
    <section title="Projects" id="projects">

        <div class="project-card">
            <p class="project-description">Clone of Himalaya USA</p>
            <img src="./Resources/himalaya.png" alt="">
            <title class="project-title">Himalaya USA</title>
            <h3 class="project-tech-stack">Html | CSS | JavaScript</h3>
            <div>
                <p class="project-github-link"> <a href="https://github.com/raj2820/Himalya-USA-Clone"
                        target="_blank">Github<i class="fa-brands fa-github"></i></a></p>

                <p class="project-deployed-link"><a href="https://630c7ea5fe01ec7d8a7acb5f--aquamarine-khapse-1fb54c.netlify.app"
                        target="_blank">Deployed link</a></p>
            </div>

        </div>
        <div class="project-card">
            <p class="project-description">Clone of Monster India Website</p>
            <img src="./Resources/monster.png" alt="">
            <title class="project-title">enormous-weight</title>
            <h3 class="project-tech-stack">Html | CSS | JavaScript</h3>
            <div>
                <p class="project-github-link"> <a href="https://github.com/RahulSonali/enormous-weight-975"
                        target="_blank">Github<i class="fa-brands fa-github"></i></a></p>

                <p class="project-deployed-link"><a href="https://enormous-weight-975.netlify.app"
                        target="_blank">Deployed link</a></p>
            </div>

        </div>
  
       



    </section>`
}

function git(){
    return ` <section title="Github-Stats" class="react-activity-calendar">
    <h1>GitHub React-Activity-Calendar</h1>
    <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=Ashish33000"
        alt="Ashish Kumar" />
    <div>
        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ashish33000"
            alt="top_languages" />
        <img id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Ashish33000&show_icons=true&locale=en"
            alt="stat-card" />
    </div>
</section>`
}


function contact(){
    return `<h1 class="mainheading">CONTACT</h1>
    <div title="Contact" id="contact">
        <div class="c-c1">
            <a href="https://www.linkedin.com/in/ashish-kumar-5199ba120/">
                <img src="Resources/linked.png" alt="">
            </a>
            <a href="https://www.linkedin.com/in/ashish-kumar-5199ba120/">
                <img src="Resources/github.png" alt="">
            </a>
            
    
        </div>
        <div class="contact-child-2">
            <form action="https://formsubmit.co/ashishbhagat330@gmail.com" method="POST">
                <input type="text" name="name" id="name" placeholder="NAME" required>
                <input type="email" name="email" id="email" placeholder="EMAIL" required>
                <input type="text" name="text" id="msg" placeholder="Your Massage Here">
                <div><button class="btns" type="submit">Submit</button></div>
            </form>
            <div class="contact-child3">
                <div class="lindingithub"> <a id="contact-github" href="https://github.com/Ashish33000"></a>
                    <a id="contact-linkedin" href="https://www.linkedin.com/in/ashish-kumar-5199ba120/"></a>
                </div>
                <div class="contact-child4">
                <a id="contact-phone" href="#">Contact Number: +918709428265</a>
                <a id="contact-email" href="ashishbhagat330@gmail.com">Email Address: ashishbhagat330@gmail.com</a>
            </div>
            </div>
        </div>
    </div>`
}

export {navbar,home,about,skill,project,git,contact}