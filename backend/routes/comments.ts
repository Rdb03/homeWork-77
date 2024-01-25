import {Router} from "express";
import fileDb from "../fileDb";
import {CommentsWithOutId} from "../type";

const commentsRouter = Router();

commentsRouter.get('/', async (req, res) => {
    const comments = await fileDb.getItems();
    res.send(comments);
});

commentsRouter.get('/:id', async (req, res) => {
    const comments = await fileDb.getItems();
    const comment = comments.find(m => m.id === req.params.id);
    res.send(comment);
});

commentsRouter.post('/', async (req, res) => {

    const newMessage: CommentsWithOutId = {
        author: req.body.author,
        comment: req.body.comment,
        image: req.body.image,
    };

    const savedMessage = await fileDb.addItem(newMessage);
    res.send(savedMessage);
});


export default commentsRouter;