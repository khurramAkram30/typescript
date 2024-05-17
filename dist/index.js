"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
var read_1 = require("./read");
var exp = require("express");
var data = {
    Name: "Muhammad Fahad",
    age: 40
};
// create(data);
// updateUser(data,"6644acdd3207ed03e8c93cbf");
// deleteUser('6644ad803207ed03e8c93cc1');
// fetch();
var app = exp();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
app.post('./create', function (req, res) {
    var _a = req.body, Name = _a.Name, age = _a.age;
    var data = {
        Name: Name,
        age: age
    };
    console.log(data);
    (0, create_1.create)(data);
    res.send('Data Inserted');
});
app.get('./getUsers', function (req, res) {
    console.log("khurram");
    (0, read_1.fetch)();
    res.send('Data fetched');
});
//# sourceMappingURL=index.js.map