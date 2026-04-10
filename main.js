// Create map
const map = L.map('map').setView([43.8260, -111.7897], 15);

// Add tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON
fetch("parking.geojson")
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            onEachFeature: function (feature, layer) {

                const props = feature.properties;

                layer.bindPopup(`
                    <b>${props.name}</b><br>
                    Type: ${props.type}<br>
                    Hours: ${props.hours}
                `);
            }
        }).addTo(map);
    });