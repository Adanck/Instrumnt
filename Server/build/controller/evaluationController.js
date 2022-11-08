"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluationController = void 0;
let pool = require('../database').pool;
class EvaluationController {
    index(req, res) {
        pool.query('describe colaborador', function (error, results, fields) {
            if (error)
                throw error;
            console.table(results);
            console.log(results[0].solution);
        });
        res.json('evaluation');
    }
    createEvaluation(req, res) {
        console.log();
        res.json({ text: 'creating colaborator' });
    }
    deleteEvaluation(req, res) {
        res.json({ text: 'deleteing colaborador' });
    }
}
exports.evaluationController = new EvaluationController();
