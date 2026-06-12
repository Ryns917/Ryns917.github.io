// ============================================
// Smooth Scroll Navigation
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Animate Elements on Scroll
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and elements
document.querySelectorAll('.experience-card, .skill-category, .highlight, .cert-item, .industry-block').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// Form Validation & Submission
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        // Basic validation
        if (!nameInput.value.trim()) {
            alert('Please enter your name');
            e.preventDefault();
            return;
        }

        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            alert('Please enter a valid email');
            e.preventDefault();
            return;
        }

        if (!subjectInput.value.trim()) {
            alert('Please enter a subject');
            e.preventDefault();
            return;
        }

        if (!messageInput.value.trim()) {
            alert('Please enter a message');
            e.preventDefault();
            return;
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// Add Active State to Nav Links
// ============================================

window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Scroll to Top Button
// ============================================

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

console.log('Portfolio script loaded successfully!');