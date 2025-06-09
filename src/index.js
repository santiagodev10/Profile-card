const links = document.getElementById('links');
const projects = document.querySelector('.projects');

const loadLinks = () => {
  const linkList = [
    { 
      name: 'Awesome Movies', 
      url: 'https://santiagodev10.github.io/Awesome-Movies/',
      color: 'project1',
      emoji: '🎬' 
    },
    { 
      name: 'Product List',
      url: 'https://product-list-h48p21za3-santiago-s-projects-57b87035.vercel.app/',
      color: 'project2',
      emoji: '🍕'
    },
    { 
      name: 'Advice Generator App', 
      url: 'https://santiagodev10.github.io/advice-generator-app/',
      color: 'project3',
      emoji: '💡' 
    },
    { 
      name: 'Article Preview Component', 
      url: 'https://santiagodev10.github.io/Article-preview-component/',
      color: 'project4',
      emoji: '📄' 
    },
  ];

  linkList.forEach(link => {
    const container = document.createElement('div');
    const anchor = document.createElement('a');
    container.classList.add('project');
    container.classList.add(link.color);
    container.addEventListener('click', () => {
      window.open(link.url, '_blank');
    });

    anchor.href = link.url;
    anchor.classList.add('project-link');
    anchor.textContent = `${link.name} ${link.emoji}`;
    anchor.target = '_blank';
    
    container.appendChild(anchor);
    projects.appendChild(container);
  });
};

// Llama la función para cargar los enlaces
loadLinks();