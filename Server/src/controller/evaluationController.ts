import {query, Request, Response} from 'express';
let  pool = require('../database').pool;

class EvaluationController{
    public index (req:Request, res:Response){
        pool.query('describe colaborador', function (error, results, fields) {
            if (error) throw error;
            console.table(results);
            console.log(results[0].solution);
          });
        res.json('evaluation');
    }

    public createEvaluation(req:Request, res:Response){
        console.log()
        res.json({text:'creating colaborator'})
    }

    public deleteEvaluation(req:Request, res:Response){
        res.json({text:'deleteing colaborador'});
    }
}

export const evaluationController = new EvaluationController();