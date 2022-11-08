"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluationController_1 = require("../controller/evaluationController");
class EvaluationRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', evaluationController_1.evaluationController.index);
        this.router.post('/', evaluationController_1.evaluationController.createEvaluation);
    }
}
const evaluationRoutes = new EvaluationRoutes();
exports.default = evaluationRoutes.router;
