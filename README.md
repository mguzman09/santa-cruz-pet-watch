# Santa Cruz Pet Watch

A responsive lost-and-found pet portal for Santa Cruz de la Sierra, created for the Santa Cruz International School community-service project.

## Tech Stack
- HTML5
- CSS3 (Flexbox + CSS Grid)
- Vanilla JavaScript
- GitHub Pages for deployment

## Required Features
- Dynamic pet feed generated from a JavaScript JSON array
- Lost vs. Found filtering
- Area filtering
- Report-a-Pet form with HTML5 required-field validation
- Responsive mobile and desktop layouts
- Clear visual distinction between Lost and Found reports
- Accessible labels and status messages

## SDLC Plan

### Class 1 — Analysis
Target audience: residents of Santa Cruz de la Sierra who have lost a pet, found a pet, or want to help reunite pets with their owners.

Core requirements: public GitHub repository, public deployment, HTML/CSS/Vanilla JS, dynamic JSON feed, status and area filters, labeled report form, responsive layout, accessibility, and Lost/Found visual distinction.

### Class 2 — Design
Plan a simple community-focused interface with a strong header, clear filters, pet cards, and a report form. Use red accents for Lost and green accents for Found. The layout should become a single-column experience on small screens.

### Class 3 — Coding
`index.html`, `style.css`, and `script.js` contain the core application. The feed is rendered dynamically from the required dataset, and the filters use JavaScript `filter()` logic.

### Class 4 — Testing & Deployment
QA log should be updated after testing the live site.

## AI Prompt Strategy

1. **HTML structure prompt:**
   "Create a semantic HTML5 structure for a responsive lost-and-found pet portal called Santa Cruz Pet Watch. Include a header, hero section, filter controls for status and area, an empty container where JavaScript can render pet cards, and a report form with labeled required fields for Status, Image URL, Area, Contact Info, and Description. Do not add a backend."

2. **CSS design prompt:**
   "Create responsive CSS for the Santa Cruz Pet Watch HTML structure. Use CSS Grid or Flexbox, make the pet cards responsive from three columns to one column, use red visual accents for Lost reports and green accents for Found reports, and make the form and filters easy to use on mobile."

3. **JavaScript prompt:**
   "Write vanilla JavaScript for Santa Cruz Pet Watch using the exact provided petReports JSON array. Render every report dynamically into the #pet-feed element. Add filters for status and area using Array.filter(), update the visible report count, show an empty state when no reports match, add a clear-filters button, and use HTML5 form validation without connecting a database."

4. **Testing prompt:**
   "Review the Santa Cruz Pet Watch HTML, CSS, and JavaScript for bugs. Check that all required JSON records render dynamically, both filters can work together, Clear Filters resets both dropdowns, the form requires all five fields, the layout works on mobile, and Lost and Found have different visual styles. Identify any specific bugs and explain the exact fix without changing the required dataset."

## QA Log

> Complete this section during Class 4 after testing the deployed site. Do not claim a bug was found or fixed unless it was actually observed during testing.

| Test | Expected Result | Actual Result | Status |
|---|---|---|---|
| Page loads | All 3 required reports appear | Pending live test | ⏳ |
| Status = Lost | Rumba and Max appear | Pending live test | ⏳ |
| Status = Found | Unknown appears | Pending live test | ⏳ |
| Area = Urubo | Rumba appears | Pending live test | ⏳ |
| Status + Area filters | Only matching reports appear | Pending live test | ⏳ |
| Clear Filters | All 3 reports return | Pending live test | ⏳ |
| Form validation | Empty required fields are rejected | Pending live test | ⏳ |
| Mobile layout | Cards stack and form remains usable | Pending live test | ⏳ |
