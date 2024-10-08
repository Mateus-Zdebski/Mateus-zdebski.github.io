async function fetchGithubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/Mateus-Zdebski/repos');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const repos = await response.json();
        return repos.filter(repo => !repo.private); // Filtrar repositórios privados
    } catch (error) {
        console.error('Erro ao buscar repositórios do GitHub:', error);
    }
}

const projectData = {
    'LojaVeiculos': {
        image: '/assets/Motorcode.png',
        description: 'Esse é um projeto criado no Senai no último semestre com base em Bootstrap, HTML, CSS e PHP.',
        languages: ['Bootstrap', 'HTML', 'CSS', 'PHP']
    },
    'Fokus_alura': {
        image: '/assets/Fokus-alura.png',
        description: 'Esse projeto foi desenvolvido na Alura para otimizar o tempo. Foi usado HTML, CSS e JS.',
        languages: ['JavaScript', 'HTML', 'CSS']
    },
    '-o-que-aprendi-no-senai-em-java': {
        image: '/assets/3.jpg',
        description: 'Essa foi minha trajetória aprendendo Java e MySQL.',
        languages: ['Java', 'MySQL']
    },
    'o-que-aprendi-no-senai-em-site': {
        image: '/assets/3.jpg',
        description: 'Essa foi minha trajetória aprendendo JavaScript, MySQL, PHP, CSS, HTML.',
        languages: ['JavaScript', 'MySQL', 'PHP', 'CSS', 'HTML']
    },
    // Adicione mais projetos conforme necessário
};

function getLanguageIcons(languages) {
    const icons = {
        Bootstrap: 'fab fa-bootstrap',
        HTML: 'fab fa-html5',
        CSS: 'fab fa-css3-alt',
        PHP: 'fab fa-php',
        JavaScript: 'fab fa-js',
        MySQL: 'fas fa-database', // MySQL icon
        Java: 'fab fa-java',
        Python: 'fab fa-python',
        // Adicione mais ícones conforme necessário
    };

    return languages.map(lang => {
        const iconClass = icons[lang] || 'fas fa-code'; // Default icon if not found
        const icon = document.createElement('i');
        icon.className = `text-xl ${iconClass}`;
        return icon;
    });
}

async function displayProjects() {
    try {
        const repos = await fetchGithubRepos();
        // console.log('Repositórios:', repos); // Verifique os dados retornados

        const portifolioContainer = document.getElementById('portifolio-container');
        if (!portifolioContainer) {
            console.error('Elemento com id "portifolio-container" não encontrado.');
            return;
        }
        portifolioContainer.innerHTML = '';

        repos.forEach(repo => {
            // console.log('Criando projeto para:', repo.name); // Verifique se está criando os elementos corretamente

            const project = projectData[repo.name];
            if (!project) return; // Pular projetos não definidos no projectData

            const projectBox = document.createElement('div');
            projectBox.classList.add('max-w-sm', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow', 'dark:bg-gray-800', 'dark:border-gray-700', 'overflow-hidden', 'flex', 'flex-col');

            const projectImage = document.createElement('img');
            projectImage.classList.add('w-full', 'h-48', 'object-cover');
            projectImage.src = project.image;
            projectImage.alt = repo.name;

            const projectContent = document.createElement('div');
            projectContent.classList.add('p-5', 'flex', 'flex-col', 'gap-3');

            const projectTitle = document.createElement('h5');
            projectTitle.classList.add('text-2xl', 'font-bold', 'tracking-tight', 'text-gray-900', 'dark:text-white');
            projectTitle.textContent = repo.name;

            const projectDescription = document.createElement('p');
            projectDescription.classList.add('font-normal', 'text-gray-700', 'dark:text-gray-400');
            projectDescription.textContent = project.description;

            const languageIcons = document.createElement('div');
            languageIcons.classList.add('flex', 'gap-2', 'flex-wrap');
            getLanguageIcons(project.languages).forEach(icon => languageIcons.appendChild(icon));

            const readMoreLink = document.createElement('a');
            readMoreLink.href = repo.html_url;
            readMoreLink.target = '_blank';
            readMoreLink.classList.add('inline-flex', 'items-center', 'px-3', 'py-2', 'text-sm', 'font-medium', 'text-center', 'text-white', 'bg-blue-700', 'rounded-lg', 'hover:bg-blue-800', 'focus:ring-4', 'focus:outline-none', 'focus:ring-blue-300', 'dark:bg-blue-600', 'dark:hover:bg-blue-700', 'dark:focus:ring-blue-800');
            readMoreLink.textContent = 'Leia mais';

            const svgIcon = document.createElement('svg');
            svgIcon.classList.add('rtl:rotate-180', 'w-3.5', 'h-3.5', 'ms-2');
            svgIcon.setAttribute('aria-hidden', 'true');
            svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svgIcon.setAttribute('fill', 'none');
            svgIcon.setAttribute('viewBox', '0 0 14 10');

            const path = document.createElement('path');
            path.setAttribute('stroke', 'currentColor');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('d', 'M1 5h12m0 0L9 1m4 4L9 9');

            svgIcon.appendChild(path);
            readMoreLink.appendChild(svgIcon);

            projectContent.appendChild(projectTitle);
            projectContent.appendChild(projectDescription);
            projectContent.appendChild(languageIcons);
            projectContent.appendChild(readMoreLink);

            projectBox.appendChild(projectImage);
            projectBox.appendChild(projectContent);

            portifolioContainer.appendChild(projectBox);
        });
    } catch (error) {
        console.error('Erro ao exibir projetos:', error);
    }
}

// Chame a função para exibir projetos
displayProjects();
