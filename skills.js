<<<<<<< HEAD
const skillIcons = {
    JavaScript: 'fab fa-js',
    Python: 'fab fa-python',
    Java: 'fab fa-java',
    HTML: 'fab fa-html5',
    CSS: 'fab fa-css3-alt',
    PHP: 'fab fa-php',
    'C++': 'fab fa-cuttlefish',
    Bootstrap: 'fab fa-bootstrap',
    MySQL: 'fas fa-database',
    Arduino: 'fab fa-arduino',
    React: 'fab fa-react', // Ícone para React
    TypeScript: 'fas fa-code', // Personalize se quiser um ícone mais específico
    Vite: 'fas fa-bolt', // Ícone genérico ou substitua por um personalizado
    // Adicione outros ícones conforme necessário
};

async function fetchGithubRepos() {
    const response = await fetch(`https://api.github.com/users/Mateus-Zdebski/repos`);
    const repos = await response.json();
    return repos;
}

function extractSkills(repos) {
    const skills = {};
    repos.forEach(repo => {
        if (repo.language) {
            if (skills[repo.language]) {
                skills[repo.language] += 1;
            } else {
                skills[repo.language] = 1;
            }
        }
    });
    return skills;
}

function createSkillElement(skill, percentage) {
    const skillBox = document.createElement('div');
    skillBox.classList.add('flex', 'flex-col', 'items-center', 'p-6', 'bg-white', 'shadow-md', 'rounded-lg', 'w-64'); // Defina uma largura fixa se necessário

    const skillTitle = document.createElement('div');
    skillTitle.classList.add('text-center');

    const skillIcon = document.createElement('i');
    skillIcon.className = skillIcons[skill] || 'fas fa-code'; // Use um ícone padrão se não houver correspondência

    const skillName = document.createElement('h4');
    skillName.className = 'text-xl font-semibold text-gray-800';
    skillName.textContent = skill;

    const skillPercentage = document.createElement('span');
    skillPercentage.classList.add('block', 'mt-2', 'text-gray-600');
    skillPercentage.textContent = `${Math.round(percentage)}%`;

    const skillBar = document.createElement('div');
    skillBar.classList.add('w-full', 'mt-2');

    const skillProgress = document.createElement('div');
    skillProgress.classList.add('bg-blue-500', 'h-2', 'rounded-full');
    skillProgress.style.width = `${percentage}%`;

    skillBar.appendChild(skillProgress);
    skillTitle.appendChild(skillIcon);
    skillTitle.appendChild(skillName);
    skillTitle.appendChild(skillPercentage);

    skillBox.appendChild(skillTitle);
    skillBox.appendChild(skillBar);

    return skillBox;
}


async function displaySkills() {
    const repos = await fetchGithubRepos();
    const skills = extractSkills(repos);
    const totalRepos = repos.length;

    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';

    Object.keys(skills).forEach(skill => {
        const percentage = (skills[skill] / totalRepos) * 100;
        const skillElement = createSkillElement(skill, percentage);
        skillsContainer.appendChild(skillElement);
    });
}

document.addEventListener('DOMContentLoaded', displaySkills);

=======
const skillIcons = {
    JavaScript: 'fab fa-js',
    Python: 'fab fa-python',
    Java: 'fab fa-java',
    HTML: 'fab fa-html5',
    CSS: 'fab fa-css3-alt',
    PHP: 'fab fa-php',
    'C++': 'fab fa-cuttlefish',
    Bootstrap: 'fab fa-bootstrap',
    MySQL: 'fas fa-database',
    Arduino: 'fab fa-arduino',
    React: 'fab fa-react', // Ícone para React
    TypeScript: 'fas fa-code', // Personalize se quiser um ícone mais específico
    Vite: 'fas fa-bolt', // Ícone genérico ou substitua por um personalizado
    // Adicione outros ícones conforme necessário
};

async function fetchGithubRepos() {
    const response = await fetch(`https://api.github.com/users/Mateus-Zdebski/repos`);
    const repos = await response.json();
    return repos;
}

function extractSkills(repos) {
    const skills = {};
    repos.forEach(repo => {
        if (repo.language) {
            if (skills[repo.language]) {
                skills[repo.language] += 1;
            } else {
                skills[repo.language] = 1;
            }
        }
    });
    return skills;
}

function createSkillElement(skill, percentage) {
    const skillBox = document.createElement('div');
    skillBox.classList.add('flex', 'flex-col', 'items-center', 'p-6', 'bg-white', 'shadow-md', 'rounded-lg', 'w-64'); // Defina uma largura fixa se necessário

    const skillTitle = document.createElement('div');
    skillTitle.classList.add('text-center');

    const skillIcon = document.createElement('i');
    skillIcon.className = skillIcons[skill] || 'fas fa-code'; // Use um ícone padrão se não houver correspondência

    const skillName = document.createElement('h4');
    skillName.className = 'text-xl font-semibold text-gray-800';
    skillName.textContent = skill;

    const skillPercentage = document.createElement('span');
    skillPercentage.classList.add('block', 'mt-2', 'text-gray-600');
    skillPercentage.textContent = `${Math.round(percentage)}%`;

    const skillBar = document.createElement('div');
    skillBar.classList.add('w-full', 'mt-2');

    const skillProgress = document.createElement('div');
    skillProgress.classList.add('bg-blue-500', 'h-2', 'rounded-full');
    skillProgress.style.width = `${percentage}%`;

    skillBar.appendChild(skillProgress);
    skillTitle.appendChild(skillIcon);
    skillTitle.appendChild(skillName);
    skillTitle.appendChild(skillPercentage);

    skillBox.appendChild(skillTitle);
    skillBox.appendChild(skillBar);

    return skillBox;
}


async function displaySkills() {
    const repos = await fetchGithubRepos();
    const skills = extractSkills(repos);
    const totalRepos = repos.length;

    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';

    Object.keys(skills).forEach(skill => {
        const percentage = (skills[skill] / totalRepos) * 100;
        const skillElement = createSkillElement(skill, percentage);
        skillsContainer.appendChild(skillElement);
    });
}

document.addEventListener('DOMContentLoaded', displaySkills);

>>>>>>> 3e38f67 (tirado log)
