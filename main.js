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

        function styleFeature(feature) {
            const type = feature.properties.type;

            let color = "#3388ff"; // default blue (Student)

            if (type === "Faculty") {
                color = "#ff4d4d"; // red
            } 
            else if (type === "Visitor") {
                color = "#4dff88"; // green
            }

            return {
                color: color,
                weight: 2,
                fillOpacity: 0.4
            };
        }

        L.geoJSON(data, {
            style: styleFeature,

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