"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
var read_1 = require("./read");
var update_1 = require("./update");
var delete_1 = require("./delete");
var exp = require("express");
var app = exp();
var port = 3000;
app.use(exp.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
app.post('/create', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Name, age, data, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, Name = _a.Name, age = _a.age;
                data = {
                    Name: Name,
                    age: age
                };
                return [4 /*yield*/, (0, create_1.create)(data)];
            case 1:
                result = _b.sent();
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
app.put('/update', function (req, res) {
    var _a = req.query, id = _a.id, Name = _a.Name, age = _a.age;
    if (typeof Name !== 'string') {
        res.send("Name Should be in string");
        return;
    }
    var parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge)) {
        res.send("Age Should be in Number");
        return;
    }
    if (typeof id !== 'string') {
        res.send("id Should be in string");
        return;
    }
    var data = {
        Name: Name,
        age: parsedAge
    };
    (0, update_1.updateUser)(data, id);
    res.send('Data Updated');
});
app.get('/getUsers', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, read_1.fetch)()];
            case 1:
                result = _a.sent();
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
app.delete('/deleteUser', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        id = req.query.id;
        if (typeof id !== 'string') {
            res.send("id Should be in string");
            return [2 /*return*/];
        }
        (0, delete_1.deleteUser)(id);
        res.send("Data Deleted");
        return [2 /*return*/];
    });
}); });
