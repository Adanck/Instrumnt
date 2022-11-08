
import {Router} from 'express';

import {evaluationController} from '../controller/evaluationController';

class EvaluationRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',evaluationController.index);
        this.router.post('/',evaluationController.createEvaluation);
    }
}
const evaluationRoutes = new EvaluationRoutes();
export default evaluationRoutes.router;