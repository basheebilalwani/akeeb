const files = {
   home: `



<p>Welcome to my <span class="highlight">portfolio!</span></p>
<p>Use the <span class="highlight">menu</span> to explore my work and experience.</p>
`,
  about: `

Hello, I’m <span class="highlight">Mohmmad Akeeb</span>

I’m an <span class="highlight">AI/ML Engineer</span> passionate about solving real-world problems 
using data-driven intelligence. My journey started with a love for mathematics and coding, 
and over time I’ve developed expertise in building <span class="highlight">machine learning models, deep learning architectures, and intelligent web applications</span>.  
  `,

  experience: `
Work Experience:

AI/ML Engineer – Freelance
- Designed and trained machine learning models for clients.  
- Built predictive systems using <span class="highlight">TensorFlow</span> and <span class="highlight">PyTorch</span>.  
- Deployed models into scalable web applications.  

Intern – Data Science, Tech Startup 
- Collected and cleaned large datasets for analysis.  
- Developed <span class="highlight">NLP pipeline</span> for sentiment analysis.  
- Automated reporting using Python and Pandas.  
  `,

  projects: `
Featured Projects:

1. <a href="https://yourportfolio.com/chatbot" target="_blank" class="highlight">AI-Powered Chatbot</a> – Conversational assistant trained with NLP.  

2. <a href="https://yourportfolio.com/image-classifier" target="_blank" class="highlight">Image Classifier</a> – Deep learning model for real-time image recognition.

3. <a href="https://yourportfolio.com/stock-predictor" target="_blank" class="highlight">Stock Price Predictor</a> – Time-series forecasting using LSTM networks.  

4. <a href="https://yourportfolio.com" target="_blank" class="highlight">Portfolio Website</a> – Built in VS Code theme with responsive design.  
`
,

  skills: `
Skills:

- Programming: Python, JavaScript, C++  
- Libraries: NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow, PyTorch  
- Web Dev: React.js, Node.js, Express, MySQL  
- Tools: Git, Docker, Jupyter, VS Code  
- Concepts: Machine Learning, Deep Learning, NLP, Computer Vision, Data Analysis  
  `,

  contact: `
Contact:

Email: <a href="mailto:mohammadakeeb786@gmail.com" class="highlight">mohammadakeeb786@gmail.com</a>

LinkedIn: <a href="https://www.linkedin.com/in/mohmmad-akeeb-5b2114252/" target="_blank" class="highlight">https://www.linkedin.com/in/mohmmad-akeeb-5b2114252/</a>

GitHub: <a href="https://github.com/akeeb-ai" target="_blank" class="highlight">github.com/akeeb-ai</a>

Portfolio: <a href="https://mohammadakeeb.dev" target="_blank" class="highlight">mohammadakeeb.dev</a>

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


