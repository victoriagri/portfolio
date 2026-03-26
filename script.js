// Hero Animation
document.addEventListener('DOMContentLoaded', function() {
    const heroHola = document.getElementById('heroHola');
    const heroHi = document.getElementById('heroHi');
    const heroDetails = document.getElementById('heroDetails');

    setTimeout(() => {
        heroHola.classList.add('hide');
    }, 1500);

    setTimeout(() => {
        heroHi.classList.add('show');
    }, 1800);

    setTimeout(() => {
        heroDetails.classList.add('show');
    }, 2500);
});

// Smooth scroll and active nav
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Experience items toggle
const experienceItems = document.querySelectorAll('.experience-item');

experienceItems.forEach(item => {
    item.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            experienceItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Smooth scroll para navegación
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// PROJECT INTERACTIVITY - Simplificado
const projectCards = document.querySelectorAll('.project-card');
const projectDetailSections = document.querySelectorAll('.project-detail-section');
const workSection = document.getElementById('work');

// Click en tarjeta de proyecto
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        const projectNumber = this.getAttribute('data-project');
        const projectDetail = document.getElementById(`project-detail-${projectNumber}`);
        
        // Ocultar todas las secciones de detalle
        projectDetailSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Mostrar la sección correspondiente
        if (projectDetail) {
            projectDetail.style.display = 'block';
            setTimeout(() => {
                projectDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
        
        // Marcar tarjeta activa
        projectCards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
    });
});

// Función para volver a proyectos
function backToProjects() {
    // Ocultar todas las secciones de detalle
    projectDetailSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Volver a la sección de trabajo
    workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    setTimeout(() => {
        projectCards.forEach(c => c.classList.remove('active'));
    }, 500);
}

// Botones de volver
document.querySelectorAll('.btn-back-projects, .btn-close-project').forEach(btn => {
    btn.addEventListener('click', backToProjects);
});