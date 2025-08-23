# ISG CPA Website

A professional, responsive website for ISG CPA accounting services built with HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Clean, professional layout using your brand colors (#0D544A and #1EA778)
- **Responsive**: Mobile-friendly design that works on all devices
- **Smooth Animations**: Scroll animations and hover effects for enhanced user experience
- **Contact Form**: Functional contact form with validation
- **Easy Customization**: Simple configuration file for updating business information

## Pages & Sections

1. **Home/Hero Section** - Welcome message and call-to-action buttons
2. **Services** - All 7 accounting services with descriptions and icons
3. **About Us** - Company information and key features
4. **Contact Us** - Contact information and inquiry form

## Services Included

- Personal Tax
- Corporate Tax
- Bookkeeping
- Payroll
- CRA Audit Support
- Small Business Financing
- Real Estate Taxation

## File Structure

```
ISG CPA/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
├── config.js           # Business information configuration
└── README.md           # This file
```

## Customization

### 1. Update Business Information

Edit `config.js` to update your business details:

```javascript
const ISG_CPA_CONFIG = {
    businessName: "ISG CPA",
    contact: {
        phone: "(555) 123-4567",        // Your actual phone number
        email: "info@isgcpa.com",       // Your actual email
        address: "Your actual address", // Your actual address
        businessHours: "Your hours"     // Your actual business hours
    }
    // ... other settings
};
```

### 2. Customize Colors

The website uses your brand colors:
- Primary: `#0D544A` (Dark Green)
- Secondary: `#1EA778` (Light Green)

To change colors, update the CSS variables in `styles.css` or modify the color values directly.

### 3. Add Your Logo

Replace the text logo in the navigation with your actual logo:
1. Add your logo image to the project folder
2. Update the navigation in `index.html`:
   ```html
   <div class="nav-logo">
       <img src="your-logo.png" alt="ISG CPA" height="50">
   </div>
   ```

### 4. Customize Services

Edit service descriptions in `config.js` under the `services` section.

## Getting Started

### Option 1: Local Development

1. Download all files to your computer
2. Open `index.html` in a web browser
3. Edit `config.js` with your business information
4. Refresh the browser to see changes

### Option 2: Web Hosting

1. Upload all files to your web hosting provider
2. Ensure `index.html` is set as the default page
3. Update `config.js` with your business information
4. Test the contact form functionality

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS animations
- Lazy loading support for images
- Smooth scrolling
- Mobile-first responsive design
- Minimal JavaScript footprint

## Contact Form

The contact form includes:
- Form validation
- Success/error notifications
- Service selection dropdown
- Responsive design

**Note**: The current form shows a success message but doesn't actually send emails. To make it functional, you'll need to:
1. Set up a server-side script (PHP, Node.js, etc.)
2. Configure email sending functionality
3. Update the form action in `index.html`

## SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for search engines
- Proper heading hierarchy
- Alt text support for images
- Fast loading times

## Support & Customization

For additional customization or support:
1. Check the browser console for any error messages
2. Ensure all files are in the same directory
3. Verify that your web server supports the file types

## License

This website template is created for ISG CPA. Feel free to modify and use for your business needs.

## Updates & Maintenance

To keep your website current:
- Regularly update business information in `config.js`
- Check for broken links or outdated content
- Monitor contact form submissions
- Update service descriptions as needed

---

**ISG CPA Website** - Professional accounting services website template
