# Resources Folder

This folder contains downloadable resources for the ISG CPA website.

## ⚠️ **IMPORTANT: Only files in this folder will be displayed**

The resources page will only show files that are:
1. **Physically present** in this `resources/` folder
2. **Configured** in the `resources.json` file

## 🚀 **Quick Start - Add Your First Resource**

### **Option 1: Simple File Addition (Recommended)**
1. **Place your file** in this folder (e.g., `resources/tax-form-2024.pdf`)
2. **Edit `resources.json`** and add a new entry to the `resources` array:

```json
{
  "id": 2,
  "name": "Tax Form 2024",
  "description": "Complete tax return form for 2024",
  "category": "tax",
  "fileType": "PDF",
  "fileName": "tax-form-2024.pdf"
}
```

**Note:** File size and date are automatically calculated - you don't need to specify them!

### **Multiple Categories (Optional)**
You can assign multiple categories to a single resource:

```json
{
  "id": 3,
  "name": "Business Tax Guide",
  "description": "Comprehensive guide for business tax compliance",
  "category": ["tax", "business", "compliance"],
  "fileType": "PDF",
  "fileName": "business-tax-guide.pdf"
}
```

### **Option 2: Website/External Link**
```json
{
  "id": 3,
  "name": "CRA Website",
  "description": "Official CRA tax forms and information",
  "category": "tax",
  "fileType": "WEBSITE",
  "fileName": "",
  "downloadUrl": "https://www.canada.ca/en/revenue-agency.html"
}
```

**Note:** Date is automatically added when you save the file!

### **Multiple Categories for Websites**
```json
{
  "id": 4,
  "name": "Business Registration Portal",
  "description": "Official business registration and tax portal",
  "category": ["business", "tax", "compliance"],
  "fileType": "WEBSITE",
  "fileName": "",
  "downloadUrl": "https://example.ca/business-portal"
}
```

## 📁 **Current Files in This Folder**

- `sample-tax-form.txt` - Sample text file for demonstration
- `resources.json` - Configuration file for all resources (auto-generates file sizes and dates)
- `README.md` - This instruction file

## 🎯 **File Types Supported**

| Extension | File Type | Icon | Color | Example |
|-----------|-----------|------|-------|---------|
| `.pdf` | PDF Document | `fas fa-file-pdf` | Red | Tax forms, guides |
| `.docx` | Word Document | `fas fa-file-word` | Blue | Checklists, templates |
| `.xlsx` | Excel Spreadsheet | `fas fa-file-excel` | Green | Financial calculations |
| `.pptx` | PowerPoint | `fas fa-file-powerpoint` | Orange | Presentations |
| `.txt` | Text File | `fas fa-file-alt` | Gray | Simple documents |
| `.zip` | Archive | `fas fa-file-archive` | Purple | Multiple files |
| `WEBSITE` | Website Link | `fas fa-globe` | Teal | External websites |

## 🏷️ **Category Options**

- **`tax`** - Tax-related forms and guides
- **`business`** - Business registration and planning
- **`financial`** - Financial statements and calculations  
- **`compliance`** - Regulatory and compliance documents
- **`website`** - Useful websites and online resources

## 📝 **Complete Example: Adding a PDF Tax Form**

1. **Save your PDF** as `resources/personal-tax-2024.pdf`
2. **Add to `resources.json`** in the `resources` array:

```json
{
  "id": 2,
  "name": "Personal Tax Return 2024",
  "description": "Complete personal tax return form for 2024 tax year",
  "category": "tax",
  "fileType": "PDF",
  "fileName": "personal-tax-2024.pdf"
}
```

**That's it!** File size and date are automatically calculated.

### **With Multiple Categories**
```json
{
  "id": 3,
  "name": "Business Tax Compliance Guide",
  "description": "Complete guide for business tax compliance and regulations",
  "category": ["tax", "business", "compliance"],
  "fileType": "PDF",
  "fileName": "business-tax-compliance.pdf"
}
```

## 🌐 **Adding Website Resources**

For external websites, use this format:

```json
{
  "id": 4,
  "name": "Business Registration Portal",
  "description": "Official business registration website for your province",
  "category": "business",
  "fileType": "WEBSITE",
  "fileName": "",
  "downloadUrl": "https://example-province.ca/business-registration"
}
```

**That's it!** Date is automatically added.

## 🔍 **Testing Your Resources**

1. **Save your changes** to `resources.json`
2. **Refresh the website** or navigate to the Resources section
3. **Your new resource should appear** in the grid
4. **Test the download** (for files) or **visit website** (for websites)
5. **Test the share functionality**

## ❓ **Troubleshooting**

- **Resource not showing?** Check that the `fileName` matches exactly with a file in the resources folder
- **Download not working?** Verify the file exists in the resources folder
- **Website not opening?** Check that the `downloadUrl` is a valid URL
- **Icon not displaying?** Make sure the `fileType` matches one of the supported types

## 📱 **File Naming Best Practices**

- Use **descriptive names** with hyphens for spaces
- Include **year** if applicable: `tax-form-2024.pdf`
- Use **lowercase** letters and hyphens
- Examples:
  - `personal-tax-form-2024.pdf`
  - `business-registration-checklist.docx`
  - `financial-statement-template.xlsx`

## 🔧 **Advanced Configuration**

The `resources.json` file also contains:
- **Categories configuration** with icons and descriptions
- **File type definitions** with colors and icons
- **Automatic icon and color assignment** based on file type

## 💡 **Pro Tips**

1. **Use the `fileName` field** to specify the exact filename (the system will automatically create the download path)
2. **Leave `downloadUrl` empty** for local files - it will be auto-generated
3. **Use `WEBSITE` file type** for external links
4. **Categories are dynamic** - they'll automatically appear as buttons
5. **File types get automatic colors** and icons based on the configuration
6. **File sizes are auto-calculated** - no need to specify them
7. **Dates are auto-added** - no need to specify them
