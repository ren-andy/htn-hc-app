let express = require('express');
let cors = require('cors');
let path = require('path');

//let getEducationStats = require("./api/education-statistics.js");

let port = process.env.PORT || 5000;

let app = express();
app.use(cors());

// Log that server is up
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// GET route for getting stats
app.get('/stats', (req, res) => {

    //let career = req.query.career;
    //let city = req.query.city;
    //let province = req.query.province;
    //let country = req.query.country;
    //let experience = req.query.experience;
    //let position = req.query.position;

   // getEducationStats(career, city, province, country, experience, position)
       // .then(stats => {
      //      res.send(stats);
      //  });
});