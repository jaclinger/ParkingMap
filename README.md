GIS Parking Map Project

The GIS Parking Map is a web-based interactive mapping project built using HTML, JavaScript, and the Leaflet library. It displays parking lots on a campus map using GeoJSON data. Each parking lot is shown as a polygon with clickable popups that provide information such as the lot name, type (Student, Faculty, or Visitor), and available hours.

The map is designed to visually organize parking locations and improve accessibility by allowing users to quickly understand parking restrictions and locations.

Instructions for Build and Use

Video demonstration: https://youtu.be/FfcifFp29JI

Steps to build and/or run the software:
Ensure you have a modern web browser (Chrome, Edge, Firefox, etc.).
Download or clone the project folder containing:
index.html
main.js
parking.geojson
Open the project folder in a code editor (VS Code recommended).
Run the project using a local server (recommended):
In VS Code, install the Live Server extension
Right-click index.html → “Open with Live Server”
The map will load automatically in your browser.

(Alternatively, if hosted on GitHub Pages, open the published link directly in a browser.)

Instructions for Using the Map
Open the map in your browser.
Zoom and pan around the campus area.
Click on any parking lot shape to view details.
Each lot displays:
Lot name (e.g., Lot A, Lot B)
Type (Student, Faculty, Visitor)
Hours of availability

The map visually distinguishes parking types using different colors:

Student lots = blue
Faculty lots = red
Visitor lots = green
Development Environment

To recreate the development environment, you need:

A modern web browser (Google Chrome recommended)
A code editor (Visual Studio Code recommended)
Leaflet.js (loaded via CDN in HTML)
Basic local server tool (Live Server extension or Python HTTP server)
GeoJSON file support (no database required)

Optional tools:

Git & GitHub (for hosting the project online)
GitHub Pages (for deployment)
Useful Websites to Learn More

I found these resources helpful while developing this software:

Leaflet Official Documentation
GeoJSON Format Guide (geojson.org)
MDN Web Docs (JavaScript & Fetch API)
OpenStreetMap Documentation
GitHub Pages Documentation
Future Work

Planned improvements for the GIS Parking Map:

Add filter controls to toggle Student / Faculty / Visitor parking
Integrate real-time parking availability (if data source becomes available)
Replace polygon fills with custom icons or shaded overlays
Add a search bar to locate specific parking lots
Improve mobile responsiveness for phone users
Add routing/navigation directions to selected parking lots
Include multiple map layers (satellite view, campus overlay)
