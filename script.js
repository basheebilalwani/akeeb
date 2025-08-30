const files = {
   home: `



<p>Welcome to my <span class="highlight">portfolio!</span></p>
<p>Use the <span class="highlight">menu</span> to explore my work and experience.</p>
`,
  about: `

Hello, I’m <span class="highlight">Bashee Bilal</span>

Passionate and creative Front-End Web Developer with a keen eye for design and user experience. Pursuing a B.Tech degree in Computer Science & Engineering at the Central University of Kashmir. Skilled in building responsive, dynamic, and visually striking
websites. Highly adaptable, a fast learner, and driven by enthusiasm for continuous growth.  
  `,

  experience: `
Work Experience:

<span class="highlight">Frontend Web Development Intern</span>
 Internpe | Remote | Jan 2025 - Mar 2025
 -Successfully completed four end-to-end front-end development projects.
 -Developed responsive, visually appealing webpages.
 -Strengthened frontend optimization skills.

<span class="highlight">Web Designer & Developer (Contributor)</span>
 CodeSquad - Central University of Kashmir | 2024 - Present
 -Contributed to the design and development of the CodeSquad university group website.
 -Ensured professional and attractive design aesthetics
  `,

  projects: `
Featured Projects:

1. <a href="https://basheebilalwani.github.io/ecommerce/" target="_blank" class="highlight"> E-commerce Frontend:</a>

2. <a href="https://basheebilalwani.github.io/reg_form/" target="_blank" class="highlight">Contact Us Page</a> 

3. <a href="https://basheebilalwani.github.io/footer/" target="_blank" class="highlight">Footer Design</a>  

4. <a href="https://basheebilalwani.github.io/todo_list/" target="_blank" class="highlight">To-Do List App</a>  

5. <a href="https://basheebilalwani.github.io/calculator/" target="_blank" class="highlight">Calculator App</a>  
`
,

  skills: `
Skills:

Frontend Development: HTML5, CSS3, JavaScript, Tailwind CSS, Responsive Design
UI/UX Design: Prototyping, Webpage Designing, Figma, Canva
Version Control: Git, GitHub
Soft Skills: Creativity, Attention to Detail, Team Collaboration, Adaptability, Quick Learner 
  `,

  contact: `
Contact:

Email: <a href="mailto:basheebilalwani@gmail.com@gmail.com" class="highlight">basheebilalwani@gmail.com</a>

LinkedIn: <a href="www.linkedin.com/in/bashee-bilal-6984a12b2" target="_blank" class="highlight">Bashee Bilal</a>

GitHub: <a href="https://github.com/basheebilalwani" target="_blank" class="highlight">basheebilalwani</a>

Portfolio: <a href="https://mohammadakeeb.dev" target="_blank" class="highlight">Bashee Bilal</a>

`,}

  const burger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');

  function toggleMenu() {
    const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  burger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  
  document.querySelectorAll('.sidebar li').forEach(li => {
    li.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) toggleMenu();
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const defaultFile = "home"; 
  loadContent(defaultFile);
  const fileContent = document.getElementById("file-content");
  const mobileContent = document.querySelector('.mobile-content'); 
  const sidebarItems = document.querySelectorAll(".sidebar li");
  const tabs = document.querySelectorAll(".tab");

  fileContent.innerHTML = files[defaultFile];
  mobileContent.innerHTML = files[defaultFile];

  document.querySelector(`.sidebar li[data-file="${defaultFile}"]`).classList.add("active");
  document.querySelector(`.tab[data-file="${defaultFile}"]`).classList.add("active");

  function switchFile(file) {
    const content = files[file];
    fileContent.innerHTML = content;
    if (window.innerWidth <= 768) {
      mobileContent.innerHTML = content;
    }

    sidebarItems.forEach(li => li.classList.remove("active"));
    document.querySelector(`.sidebar li[data-file="${file}"]`).classList.add("active");

    tabs.forEach(tab => tab.classList.remove("active"));
    document.querySelector(`.tab[data-file="${file}"]`).classList.add("active");
  }

  sidebarItems.forEach(li => {
    li.addEventListener("click", () => {
      switchFile(li.dataset.file);
    });
  });

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchFile(tab.dataset.file);
    });
  });
});


const mobileContent = document.querySelector('.mobile-content');
const fileContent = document.getElementById('file-content');

function loadContent(file) {
    const content = files[file];
    fileContent.innerHTML = content;

    if (window.innerWidth <= 768) {
        mobileContent.innerHTML = content;

        mobileContent.classList.remove("home", "overlay");

        if (file === "home") {
            mobileContent.classList.add("home");
        } else {
            mobileContent.classList.add("overlay");
        }
    }
}

document.querySelectorAll('.sidebar ul li').forEach(item => {
  item.addEventListener('click', () => {
    const file = item.getAttribute('data-file');
    let content = "";

   document.querySelectorAll('.sidebar ul li').forEach(item => {
  item.addEventListener('click', () => {
    const file = item.getAttribute('data-file');
    loadContent(file, files[file]); 
  });
});


    loadContent(file, content);
  });
});


