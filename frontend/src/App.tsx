import ToolBar from "./components/ToolBar/ToolBar.tsx";
import CommentForm from "./components/CommentForm/CommentForm.tsx";
import {useAppDispatch, useAppSelector} from "./app/hook.ts";
import {selectComments} from "./app/commentSlice.ts";
import {useEffect} from "react";
import {fetchComments} from "./app/commentThunk.ts";
import {Grid} from "@mui/material";
import Comment from "./components/Comment/Comment.tsx";


const App = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(selectComments);

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <>
            <header>
                <ToolBar />
            </header>
            <main className='container' style={{padding: '40px'}}>
                <CommentForm />
                <Grid sx={{padding: '0 70px'}} container direction="column" spacing={2}>
                    {comments?.length ? (
                        comments.map((comment) => (
                         <Comment
                             key={comment.id}
                             id={comment.id}
                             author={comment.author}
                             comment={comment.comment}
                             image={comment.image}
                         />
                        ))
                    ) : (
                        <h1 style={{margin: '100px auto'}}>No comments available</h1>
                    )}
                </Grid>
            </main>
        </>
    );
};

export default App;
