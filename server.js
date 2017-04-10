var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var generateUuid = require('uuid/v1');

var app = express();

var events = [
  [
    {
        "id": "0d6dcd21-c430-4ed1-9953-32852bd1cf34",
        "time": 1490604456000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "6a18be6b-581e-4153-8419-e68400199918",
        "time": 1490455751000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "10a5f863-58b9-4daa-b28c-97cae129df07",
        "time": 1490431206000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "632042f0-0612-4bd7-b022-86e1b8a30b75",
        "time": 1490427592084,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "cd31f9fa-78fd-4861-81c9-5f4ded651dca",
        "time": 1490427567334,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "43eea76d-d5b2-4407-864e-9b84c112af5f",
        "time": 1490262078000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "c8d4a768-54aa-417d-8ed8-4b94bb6e7c21",
        "time": 1490209399000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "5a0443e2-5b53-4fe9-9882-03f7cb11a8ef",
        "time": 1490172592000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "e2802894-baf2-4c1c-ac11-e433fec8ac66",
        "time": 1488616926000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "2b56acf8-46c7-48ee-bd13-db82f7d24a58",
        "time": 1488530354000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "759c8190-7e84-4c05-99b9-929b2637d21d",
        "time": 1488530352000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    },
    {
        "id": "22d879d1-fd47-4aab-b65e-787bf122d620",
        "time": 1488444266000,
        "instant": null,
        "userId": "ralphgallin@gmail.com",
        "locationId": "Skoda Zentrum Tegel"
    }
]
];

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use(express.static('./'));

app.get('/time-events', function (req, res) {
    var userId = req.params.userId;
    res.header('Access-Control-Allow-Origin', '*');
    res.send(events);
});

app.get('/:userId/locations', function (req, res) {
    var result = [];

    events.forEach(function (element) {
        if (element.userId === req.params.userId) {
            result.push(element.locationId);
        }
    });

    result = result.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });

    res.header('Access-Control-Allow-Origin', '*');
    res.send(result);
});

app.post('/time-events', function (req, res) {
    var data = req.body;
    console.log(data);
    console.log();
    data.id = generateUuid();

    events.push(data);
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
});

app.put('/time-events/:id', function (req, res) {
    var id = req.params.id;
    var data = req.body;
    console.log(data);
    console.log();
    
    events.forEach(function (element, index) {
        if (element.id === id) {
            events[index] = data;
        }
    });
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});