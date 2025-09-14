# Logos Animation System

This folder contains the configuration and logo files for the ISG CPA revolving logo animation in the hero section.

## 🚀 **How to Add New Logos**

### **Step 1: Add Logo File**
1. **Place your logo image** in this `logos/` folder
2. **Use PNG format** for best quality and transparency support
3. **Recommended size**: 50-80px for orbiting logos, 120px for central logo
4. **Use descriptive names**: `quickbooks-logo.png`, `sage-logo.png`, etc.

### **Step 2: Update Configuration**
Edit `logos.json` and add a new entry to the `orbitingLogos` array:

```json
{
  "id": 7,
  "fileName": "your-app-logo.png",
  "altText": "Your App Name",
  "size": 55,
  "orbitRadius": 185,
  "orbitSpeed": 0.85,
  "startAngle": 270,
  "color": "#FF6B35"
}
```

## 🎯 **Configuration Options**

### **Logo Properties**
- **`id`**: Unique identifier (use next available number)
- **`fileName`**: Exact filename in the logos folder
- **`altText`**: Text description for accessibility
- **`size`**: Logo size in pixels (recommended: 45-65px)
- **`orbitRadius`**: Distance from center (150-250px range)
- **`orbitSpeed`**: Rotation speed (0.5 = slow, 1.5 = fast)
- **`startAngle`**: Starting position in degrees (0-360)
- **`color`**: Brand color for glow effects

### **Animation Settings**
- **`autoRotate`**: Whether logos automatically orbit
- **`rotationSpeed`**: Overall rotation speed
- **`hoverPause`**: Pause animation on hover
- **`smoothEasing`**: Smooth acceleration/deceleration
- **`glowEffect`**: Add subtle glow around logos
- **`glowColor`**: Color of the glow effect
- **`glowIntensity`**: Strength of glow (0.1-0.5)

## 📁 **Current Logos**

### **Central Logo**
- `isg-cpa-logo.png` - ISG CPA main logo (planet)

### **Orbiting Logos**
- `quickbooks-logo.png` - QuickBooks accounting software
- `sage-logo.png` - Sage business software
- `xero-logo.png` - Xero cloud accounting
- `wave-logo.png` - Wave financial software
- `freshbooks-logo.png` - FreshBooks invoicing
- `zoho-logo.png` - Zoho business suite

## 🎨 **Design Tips**

### **Logo Sizing**
- **Central logo**: 120px (larger, more prominent)
- **Orbiting logos**: 45-65px (smaller, balanced)
- **Keep consistent**: Similar sizes look more professional

### **Orbit Distribution**
- **Spread evenly**: Use different start angles (0°, 45°, 90°, etc.)
- **Vary distances**: Different orbit radii create depth
- **Balance speeds**: Mix fast and slow for visual interest

### **Color Coordination**
- **Use brand colors**: Match each logo's official colors
- **Contrast**: Ensure logos are visible against backgrounds
- **Glow effects**: Subtle glow enhances visual appeal

## 🔧 **Technical Details**

### **File Formats**
- **PNG**: Best for logos with transparency
- **SVG**: Scalable, but may not work in all browsers
- **JPG**: Use only if transparency isn't needed

### **Performance**
- **Optimize images**: Compress logos for faster loading
- **Reasonable sizes**: Don't exceed 80px for orbiting logos
- **Smooth animation**: 60fps performance on modern devices

## 📱 **Responsive Behavior**

The animation automatically adjusts for different screen sizes:
- **Desktop**: Full animation with all logos visible
- **Tablet**: Reduced orbit radii, maintained quality
- **Mobile**: Simplified animation, fewer logos visible

## ❓ **Troubleshooting**

- **Logo not showing?** Check filename matches exactly in JSON
- **Animation choppy?** Reduce logo sizes or orbit speeds
- **Logos overlapping?** Adjust orbit radii or start angles
- **Performance issues?** Reduce number of logos or disable glow effects

## 💡 **Pro Tips**

1. **Start with 4-6 logos** for optimal performance
2. **Use different speeds** to create dynamic movement
3. **Vary orbit distances** for 3D-like depth
4. **Test on mobile** to ensure smooth performance
5. **Keep logos simple** - complex designs may not scale well
