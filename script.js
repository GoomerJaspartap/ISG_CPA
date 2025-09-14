// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(13, 84, 74, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(13, 84, 74, 0.1)';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !service || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Submit to Formspree
        fetch('https://formspree.io/f/xzzvnkdb', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                this.reset();
            } else {
                showNotification('Error submitting form. Please try again.', 'error');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            showNotification('Error submitting form. Please try again.', 'error');
        })
        .finally(() => {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#1EA778' : type === 'error' ? '#dc3545' : '#0D544A'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Add to page
    document.body.appendChild(notification);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(notificationStyles);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Service cards hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Counter animation for statistics (if you want to add them later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Lazy loading for images (if you add them later)
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('.services, .about, .contact');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    revealObserver.observe(section);
});



// Enhanced scroll-to-top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #0D544A, #1EA778);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(13, 84, 74, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll-to-top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll-to-top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0 6px 20px rgba(13, 84, 74, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 4px 15px rgba(13, 84, 74, 0.3)';
});

console.log('ISG CPA Website loaded successfully!');

// Resources System
class ResourcesManager {
    constructor() {
        this.resources = [];
        this.categories = {};
        this.fileTypes = {};
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.init();
    }

    async init() {
        await this.loadResources();
        this.renderResources();
        this.setupEventListeners();
        this.setupSearch();
        this.setupCategories();
    }

    async loadResources() {
        try {
            const response = await fetch('resources/resources.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            this.resources = data.resources || [];
            this.categories = data.categories || {};
            this.fileTypes = data.fileTypes || {};
            
            // Process resources to add downloadUrl, fileSize, and dateAdded automatically
            this.resources = await Promise.all(this.resources.map(async (resource) => {
                const processedResource = {
                    ...resource,
                    downloadUrl: resource.fileName ? `resources/${resource.fileName}` : resource.downloadUrl || '#'
                };

                // Auto-calculate file size if fileName is provided and it's not a website
                if (resource.fileName && resource.fileType !== 'WEBSITE') {
                    try {
                        const sizeResponse = await fetch(processedResource.downloadUrl, { method: 'HEAD' });
                        if (sizeResponse.ok) {
                            const contentLength = sizeResponse.headers.get('content-length');
                            if (contentLength) {
                                processedResource.fileSize = this.formatFileSize(parseInt(contentLength));
                            }
                        }
                    } catch (error) {
                        // If we can't get the file size, use the provided one or default
                        processedResource.fileSize = resource.fileSize || 'Unknown size';
                    }
                } else if (resource.fileType === 'WEBSITE') {
                    processedResource.fileSize = 'N/A';
                }

                // Auto-add date if not provided
                if (!resource.dateAdded) {
                    processedResource.dateAdded = new Date().toISOString().split('T')[0];
                }

                return processedResource;
            }));
            
            console.log('Resources loaded successfully:', this.resources.length, 'resources');
        } catch (error) {
            console.error('Error loading resources:', error);
            this.resources = [];
            this.categories = {};
            this.fileTypes = {};
        }
    }

    setupEventListeners() {
        // Modal close functionality
        const modal = document.getElementById('shareModal');
        const closeBtn = modal.querySelector('.close');
        const modalContent = modal.querySelector('.modal-content');

        closeBtn.addEventListener('click', () => this.closeModal());
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                this.closeModal();
            }
        });

        // Copy link functionality
        document.getElementById('copyLink').addEventListener('click', () => {
            this.copyToClipboard(document.getElementById('shareLink').value);
        });

        // Share buttons functionality
        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.currentTarget.dataset.type;
                this.handleShare(type);
            });
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('resourceSearch');
        const clearBtn = document.getElementById('clearSearch');

        searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.renderResources();
            
            // Show/hide clear button
            if (this.searchQuery) {
                clearBtn.style.display = 'block';
            } else {
                clearBtn.style.display = 'none';
            }
        });

        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            this.searchQuery = '';
            this.renderResources();
            clearBtn.style.display = 'none';
        });
    }

    setupCategories() {
        const categoryContainer = document.querySelector('.resource-categories');
        
        // Clear existing buttons
        categoryContainer.innerHTML = '';
        
        // Add "All" button
        const allBtn = document.createElement('button');
        allBtn.className = 'category-btn active';
        allBtn.dataset.category = 'all';
        allBtn.textContent = 'All Resources';
        categoryContainer.appendChild(allBtn);
        
        // Add category buttons dynamically
        Object.entries(this.categories).forEach(([key, category]) => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.dataset.category = key;
            btn.innerHTML = `<i class="${category.icon}"></i> ${category.name}`;
            categoryContainer.appendChild(btn);
        });
        
        // Add event listeners to all category buttons
        const categoryBtns = categoryContainer.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                this.currentCategory = e.target.dataset.category;
                this.renderResources();
            });
        });
    }

    renderResources() {
        const grid = document.getElementById('resourcesGrid');
        const filteredResources = this.getFilteredResources();
        
        if (filteredResources.length === 0) {
            if (this.searchQuery || this.currentCategory !== 'all') {
                // No results for current search/filter
                grid.innerHTML = `
                    <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                        <i class="fas fa-search" style="font-size: 3rem; color: #6c757d; margin-bottom: 1rem;"></i>
                        <h3>No resources found</h3>
                        <p>Try adjusting your search or category filter.</p>
                    </div>
                `;
            } else {
                // No resources configured
                grid.innerHTML = `
                    <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                        <i class="fas fa-folder-open" style="font-size: 3rem; color: #6c757d; margin-bottom: 1rem;"></i>
                        <h3>No resources available</h3>
                        <p>Resources will appear here once you add files to the resources folder and configure them in resources.json</p>
                        <div style="margin-top: 1rem;">
                            <a href="resources/README.md" target="_blank" class="btn btn-secondary">
                                <i class="fas fa-info-circle"></i> View Setup Instructions
                            </a>
                        </div>
                    </div>
                `;
            }
            return;
        }

        grid.innerHTML = filteredResources.map(resource => this.createResourceCard(resource)).join('');
        
        // Add event listeners to new cards
        this.addCardEventListeners();
    }

    getFilteredResources() {
        return this.resources.filter(resource => {
            // Handle multiple categories (array) or single category (string)
            const resourceCategories = Array.isArray(resource.category) ? resource.category : [resource.category];
            
            const matchesCategory = this.currentCategory === 'all' || 
                resourceCategories.includes(this.currentCategory);
            
            const matchesSearch = this.searchQuery === '' || 
                resource.name.toLowerCase().includes(this.searchQuery) ||
                resource.description.toLowerCase().includes(this.searchQuery) ||
                resourceCategories.some(cat => cat.toLowerCase().includes(this.searchQuery));
            
            return matchesCategory && matchesSearch;
        });
    }

    createResourceCard(resource) {
        const fileTypeInfo = this.fileTypes[resource.fileType] || {};
        const iconClass = fileTypeInfo.icon || resource.icon || 'fas fa-file';
        const iconColor = fileTypeInfo.color || '#6c757d';
        
        // Handle multiple categories
        const resourceCategories = Array.isArray(resource.category) ? resource.category : [resource.category];
        const categoryLabels = resourceCategories.map(cat => {
            const categoryInfo = this.categories[cat] || {};
            return categoryInfo.name || cat;
        }).join(', ');
        
        // Determine if it's a website or downloadable file
        const isWebsite = resource.fileType === 'WEBSITE';
        const actionButton = isWebsite ? 
            `<button class="download-btn" onclick="resourcesManager.openWebsite('${resource.downloadUrl}')">
                <i class="fas fa-external-link-alt"></i> Visit Website
            </button>` :
            `<button class="download-btn" onclick="resourcesManager.downloadResource(${resource.id})">
                <i class="fas fa-download"></i> Download
            </button>`;
        
        return `
            <div class="resource-card" data-resource-id="${resource.id}">
                <div class="resource-header">
                    <div class="resource-icon" style="background: linear-gradient(135deg, ${iconColor}, ${this.adjustColor(iconColor, -20)})">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="resource-info">
                        <h3>${resource.name}</h3>
                        <p>${resource.description}</p>
                    </div>
                </div>
                <div class="resource-meta">
                    <span class="categories-display">
                        <i class="fas fa-tags"></i> 
                        ${resourceCategories.map(cat => {
                            const categoryInfo = this.categories[cat] || {};
                            return `<span class="category-tag" style="background: ${this.getCategoryColor(cat)}">${categoryInfo.name || cat}</span>`;
                        }).join('')}
                    </span>
                    <span><i class="fas fa-calendar"></i> ${this.formatDate(resource.dateAdded)}</span>
                </div>
                <div class="resource-actions">
                    ${actionButton}
                    <button class="share-btn" onclick="resourcesManager.openShareModal(${resource.id})">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>
        `;
    }

    adjustColor(color, amount) {
        // Simple color adjustment for gradients
        const hex = color.replace('#', '');
        const num = parseInt(hex, 16);
        const r = (num >> 16) + amount;
        const g = (num >> 8 & 0x00FF) + amount;
        const b = (num & 0x0000FF) + amount;
        return '#' + (0x1000000 + (r < 255 ? r < 1 ? 0 : r : 255) * 0x10000 +
            (g < 255 ? g < 1 ? 0 : g : 255) * 0x100 +
            (b < 255 ? b < 1 ? 0 : b : 255)).toString(16).slice(1);
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    getCategoryColor(category) {
        const colorMap = {
            'tax': '#dc3545',
            'business': '#007bff',
            'financial': '#28a745',
            'compliance': '#fd7e14',
            'website': '#17a2b8'
        };
        return colorMap[category] || '#6c757d';
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    addCardEventListeners() {
        // Event listeners are added via onclick attributes in the card HTML
    }

    downloadResource(resourceId) {
        const resource = this.resources.find(r => r.id === resourceId);
        if (!resource) return;

        // Create a temporary download link
        const link = document.createElement('a');
        link.href = resource.downloadUrl;
        link.download = resource.fileName || `${resource.name}.${resource.fileType.toLowerCase()}`;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show download notification
        this.showNotification(`Downloading ${resource.name}...`, 'success');
    }

    openWebsite(url) {
        if (url && url !== '#') {
            window.open(url, '_blank');
            this.showNotification('Opening website...', 'info');
        }
    }

    openShareModal(resourceId) {
        const resource = this.resources.find(r => r.id === resourceId);
        if (!resource) return;

        const modal = document.getElementById('shareModal');
        const resourceName = document.getElementById('shareResourceName');
        const resourceDesc = document.getElementById('shareResourceDesc');
        const shareLink = document.getElementById('shareLink');

        // Set resource info
        resourceName.textContent = resource.name;
        resourceDesc.textContent = resource.description;

        // Create shareable link
        const shareUrl = `${window.location.origin}${window.location.pathname}#resources&resource=${resourceId}`;
        shareLink.value = shareUrl;

        // Show modal
        modal.style.display = 'block';
    }

    closeModal() {
        document.getElementById('shareModal').style.display = 'none';
    }

    handleShare(type) {
        const shareLink = document.getElementById('shareLink').value;
        const resourceName = document.getElementById('shareResourceName').textContent;

        switch (type) {
            case 'email':
                const emailSubject = encodeURIComponent(`Check out this resource: ${resourceName}`);
                const emailBody = encodeURIComponent(`I found this helpful resource from ISG CPA:\n\n${resourceName}\n\nDownload it here: ${shareLink}`);
                window.open(`mailto:?subject=${emailSubject}&body=${emailBody}`);
                break;
                
            case 'whatsapp':
                const whatsappText = encodeURIComponent(`Check out this resource from ISG CPA: ${resourceName}\n\nDownload it here: ${shareLink}`);
                window.open(`https://wa.me/?text=${whatsappText}`);
                break;
                
            case 'copy':
                this.copyToClipboard(shareLink);
                break;
        }
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification('Link copied to clipboard!', 'success');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('Link copied to clipboard!', 'success');
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#28a745' : '#007bff'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize resources manager when DOM is loaded
let resourcesManager;
document.addEventListener('DOMContentLoaded', () => {
    resourcesManager = new ResourcesManager();
});

// Handle direct links to resources
window.addEventListener('hashchange', () => {
    if (resourcesManager) {
        const hash = window.location.hash;
        if (hash.includes('resources') && hash.includes('resource=')) {
            const resourceId = hash.split('resource=')[1];
            // Scroll to resources section
            document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
            // Optionally highlight the specific resource
            setTimeout(() => {
                const resourceCard = document.querySelector(`[data-resource-id="${resourceId}"]`);
                if (resourceCard) {
                    resourceCard.style.border = '2px solid #007bff';
                    resourceCard.style.boxShadow = '0 0 20px rgba(0, 123, 255, 0.3)';
                    setTimeout(() => {
                        resourceCard.style.border = '';
                        resourceCard.style.boxShadow = '';
                    }, 3000);
                }
            }, 500);
        }
    }
});