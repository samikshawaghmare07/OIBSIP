// ===== DOM Elements =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const header = document.getElementById('header');
const fadeElements = document.querySelectorAll('.fade-in');

// ===== Mobile Menu Toggle =====
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    
    // Add animation to menu items when opening
    if (navLinks.classList.contains('active')) {
        const links = navLinks.querySelectorAll('a');
        links.forEach((link, index) => {
            link.style.animation = `fadeInRight 0.3s ease forwards ${index * 0.1}s`;
        });
    } else {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.style.animation = '';
        });
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        
        // Remove animations
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.style.animation = '';
        });
    });
});

// ===== Header Scroll Effect =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// ===== Scroll Animation for Fade-in Elements =====
const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        } else {
            // Optional: Remove the class when scrolled out of view
            // element.classList.remove('visible');
        }
    });
};

// Check on load and scroll
window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);

// ===== Background Animation for Hero Section =====
const hero = document.querySelector('.hero');
const heroOverlay = document.querySelector('.hero-overlay');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    hero.style.backgroundPosition = `center ${rate}px`;
    
    // Parallax effect for overlay
    if (heroOverlay) {
        const moveX = scrolled * 0.1;
        const moveY = scrolled * 0.1;
        heroOverlay.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// ===== Card Hover Effect Enhancement =====
const cards = document.querySelectorAll('.education-card, .book-card, .contribution-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 40px rgba(10, 31, 68, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '';
    });
});

// ===== Role Chips Animation =====
const roleChips = document.querySelectorAll('.role-chip');
roleChips.forEach(chip => {
    // Add random slight animation delay for visual interest
    const delay = Math.random() * 0.5;
    chip.style.transitionDelay = `${delay}s`;
    
    // Add click effect
    chip.addEventListener('click', () => {
        chip.style.transform = 'scale(0.95)';
        setTimeout(() => {
            chip.style.transform = '';
        }, 150);
    });
});

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial fade-in check
    fadeInOnScroll();
    
    // Add CSS for fadeInRight animation (for mobile menu)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        /* Additional animation for hero content */
        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add floating animation to hero roles
    roleChips.forEach(chip => {
        chip.addEventListener('mouseenter', () => {
            chip.style.animation = 'float 2s ease-in-out infinite';
        });
        
        chip.addEventListener('mouseleave', () => {
            chip.style.animation = '';
        });
    });
    
    // Set current year in footer if needed
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ===== Scroll Progress Indicator