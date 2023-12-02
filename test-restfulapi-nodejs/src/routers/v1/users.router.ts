import express,{NextFunction, Request,Response} from 'express';
import articles from '../../constants/articles.json';
import {sendJsonSuccess} from '../../helpers/responseHandler'
import fs from 'fs'
const router = express.Router();

const fileName = "./src/constants/articles.json"

router.get('/articles',(req: Request, res: Response)=>{
    
    sendJsonSuccess(res)(articles);
});

router.get('/articles/:id([0-9]+)',(req: Request, res: Response,next: NextFunction)=>{
    try { const {id} = req.params; 
    const article = articles.find(article => article.id === parseInt(id));
    sendJsonSuccess(res)(article)
}catch (error){
    next(error)
}
})


router.post('/articles',(req: Request, res: Response)=>{
    const newArticles = [...articles, req.body]
    fs.writeFileSync(fileName, JSON.stringify(newArticles), { flag: 'w' });
    sendJsonSuccess(res)(newArticles);
});

export default router