"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AbstractController {
    //Atributos
    _router;
    _prefix;
    //Getters
    get router() {
        return this._router;
    }
    get prefix() {
        return this._prefix;
    }
    //Metodos constructores
    constructor(_prefix) {
        this._router = (0, express_1.Router)();
        this._prefix = _prefix;
    }
}
exports.default = AbstractController;
//# sourceMappingURL=AbstractController.js.map