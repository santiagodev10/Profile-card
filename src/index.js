const links = document.getElementById('links');
const projects = document.querySelector('.projects');

const loadLinks = () => {
  const linkList = [
    { name: 'Awesome Movies', url: 'https://santiagodev10.github.io/Awesome-Movies/' },
    { name: 'Product List', url: 'https://product-list-h48p21za3-santiago-s-projects-57b87035.vercel.app/' },
    { name: 'Advice Generator App', url: 'https://santiagodev10.github.io/advice-generator-app/' },
    { name: 'Article Preview Component', url: 'https://santiagodev10.github.io/Article-preview-component/' },
  ];

const projectClasses = ['project1', 'project2', 'project3', 'project4'];
const emojis = ['📽️', '🍰', '⚙️', '⭐'];
let classIndex = 0;

  linkList.forEach(link => {
    const container = document.createElement('div');
    const anchor = document.createElement('a');
    container.classList.add('project');
    container.classList.add(projectClasses[classIndex]); // Asigna la clase del array

    anchor.href = link.url;
    anchor.classList.add('project-link');
    anchor.textContent = `${link.name} ${emojis[classIndex]}`; // Añade emoji al texto
    anchor.target = '_blank';
    
    container.appendChild(anchor);
    projects.appendChild(container);

    classIndex = (classIndex + 1) % projectClasses.length; // Avanza al siguiente índice, reinicia si llega al final
  });
};

// Llama la función para cargar los enlaces
loadLinks();