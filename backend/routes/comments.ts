import {Router} from "express";
import fileDb from "../fileDb";
import {CommentsWithOutId} from "../type";
import {imagesUpload} from "../muilter";

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

commentsRouter.post('/', imagesUpload.single('image'), async (req, res) => {

    const { comment } = req.body;

    if (!comment) {
        return res.status(400).json({ error: 'Comment cannot be empty' });
    }

    const newMessage: CommentsWithOutId = {
        author: req.body.author,
        comment: req.body.comment,
        image: req.file ? req.file.filename : null,
    };

    try {
        const savedMessage = await fileDb.addItem(newMessage);
        res.send(savedMessage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export default commentsRouter;