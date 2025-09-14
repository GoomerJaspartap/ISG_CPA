// ISG CPA Website Configuration
// Update the information below with your actual business details

const ISG_CPA_CONFIG = {
    // Business Information
    businessName: "ISG CPA",
    tagline: "Professional Accounting Services for Your Business Success",
    
    // Contact Information
    contact: {
        name: "Inder S. Gill, CPA", // Your name
        phone: "(647)-990-6507", // Update with your actual phone number
        email: "info@isgcpa.ca", // Update with your actual email
        businessHours: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed" // Update with your actual hours
    },
    
    // Social Media Links (optional - remove if not using)
    socialMedia: {
        linkedin: "https://linkedin.com/company/isg-cpa", // Update or remove
        facebook: "https://facebook.com/isgcpa", // Update or remove
        twitter: "https://twitter.com/isgcpa" // Update or remove
    },
    
    // Services (you can customize descriptions if needed)
    services: {
        personalTax: {
            title: "Personal Tax",
            description: "Expert personal tax preparation and planning to maximize your returns and minimize your tax burden.",
            icon: "fas fa-user-tie"
        },
        corporateTax: {
            title: "Corporate Tax",
            description: "Comprehensive corporate tax services including planning, compliance, and strategic tax optimization.",
            icon: "fas fa-building"
        },
        bookkeeping: {
            title: "Bookkeeping",
            description: "Accurate and timely bookkeeping services to keep your financial records organized and up-to-date.",
            icon: "fas fa-book"
        },
        payroll: {
            title: "Payroll",
            description: "Efficient payroll processing and management to ensure your employees are paid accurately and on time.",
            icon: "fas fa-money-bill-wave"
        },
        craAudit: {
            title: "CRA Audit Support",
            description: "Professional representation and support during CRA audits to protect your interests and ensure compliance.",
            icon: "fas fa-search"
        },
        smallBusinessFinancing: {
            title: "Small Business Financing",
            description: "Strategic financial guidance and support to help your small business secure the funding it needs to grow.",
            icon: "fas fa-chart-line"
        },
        realEstateTaxation: {
            title: "Real Estate Taxation",
            description: "Specialized tax services for real estate investors and property owners to optimize your tax position.",
            icon: "fas fa-home"
        }
    },
    
    // About Section Content
    about: {
        title: "About ISG CPA",
        description: "With years of experience,in accounting and tax services, ISG CPA has been helping businesses and individuals achieve their financial goals. Our team of certified professionals is committed to providing personalized, reliable, and efficient accounting solutions.",
        additionalInfo: "We understand that every client is unique, which is why we take the time to understand your specific needs and develop tailored strategies that work for you. Whether you're a small business owner, a growing corporation, or an individual taxpayer, we have the expertise to help you succeed.",
        features: [
            "Certified Professional Accountants",
            "Personalized Service Approach",
            "Proven Track Record",
            "Ongoing Support & Guidance"
        ]
    },
    
    // Website Settings
    website: {
        primaryColor: "#0D544A",
        secondaryColor: "#1EA778",
        accentColor: "#f8f9fa",
        textColor: "#333",
        lightTextColor: "#666"
    }
};

// Function to update contact information on the page
function updateContactInfo() {
    // Update contact name
    const nameElement = document.getElementById('contact-name');
    if (nameElement) {
        nameElement.textContent = ISG_CPA_CONFIG.contact.name;
    }
    
    // Update phone number with clickable link
    const phoneElements = document.querySelectorAll('#phone-number, #footer-phone');
    phoneElements.forEach(el => {
        if (el) {
            el.innerHTML = `<a href="tel:${ISG_CPA_CONFIG.contact.phone}" class="contact-link phone-link" aria-label="Call ${ISG_CPA_CONFIG.contact.phone}" title="Click to call">${ISG_CPA_CONFIG.contact.phone}</a>`;
        }
    });
    
    // Update email with clickable link
    const emailElements = document.querySelectorAll('#email-address, #footer-email');
    emailElements.forEach(el => {
        if (el) {
            el.innerHTML = `<a href="mailto:${ISG_CPA_CONFIG.contact.email}" class="contact-link email-link" aria-label="Send email to ${ISG_CPA_CONFIG.contact.email}" title="Click to send email">${ISG_CPA_CONFIG.contact.email}</a>`;
        }
    });
    
    // Update business hours
    const hoursElement = document.getElementById('business-hours');
    if (hoursElement) {
        hoursElement.innerHTML = ISG_CPA_CONFIG.contact.businessHours.replace(/\n/g, '<br>');
    }
}

// Function to update business name and tagline
function updateBusinessInfo() {
    const businessNameElements = document.querySelectorAll('.nav-logo h2, .footer-section h3');
    businessNameElements.forEach(el => {
        if (el) el.textContent = ISG_CPA_CONFIG.businessName;
    });
    
    const taglineElement = document.querySelector('.hero-subtitle');
    if (taglineElement) {
        taglineElement.textContent = ISG_CPA_CONFIG.tagline;
    }
}

// Function to update about section
function updateAboutSection() {
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) {
        aboutTitle.textContent = ISG_CPA_CONFIG.about.title;
    }
    
    const aboutParagraphs = document.querySelectorAll('#about p');
    if (aboutParagraphs.length >= 2) {
        aboutParagraphs[0].textContent = ISG_CPA_CONFIG.about.description;
        aboutParagraphs[1].textContent = ISG_CPA_CONFIG.about.additionalInfo;
    }
    
    const features = document.querySelectorAll('.feature span');
    ISG_CPA_CONFIG.about.features.forEach((feature, index) => {
        if (features[index]) {
            features[index].textContent = feature;
        }
    });
}

// Initialize all updates when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateContactInfo();
    updateBusinessInfo();
    updateAboutSection();
    
    console.log('ISG CPA Configuration loaded successfully!');
    console.log('Business Name:', ISG_CPA_CONFIG.businessName);
    console.log('Phone:', ISG_CPA_CONFIG.contact.phone);
    console.log('Email:', ISG_CPA_CONFIG.contact.email);
});

// Export configuration for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ISG_CPA_CONFIG;
}