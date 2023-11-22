const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Example data for railway sidings and nearby coal stations
const sidingsAndStations = [
    {
        siding: "Gotlam Railway Siding",
        location: { lat: 15.7553, lng: 80.4744 },
        stations: [
            { name: "Kothagudem Coal Station", location: { lat: 17.5566, lng: 80.6177 } },
            // Add other nearby stations
        ],
    },
    // Add more sidings and stations as needed
];

app.use(express.static("public")); // Serve static files from a "public" directory

app.get("/get-sidings", (req, res) => {
    res.json(sidingsAndStations);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
