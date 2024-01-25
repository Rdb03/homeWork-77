import ToolBar from "./components/ToolBar/ToolBar.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentForm from "./components/CommentForm/CommentForm.tsx";
import {useAppDispatch, useAppSelector} from "./app/hook.ts";
import { selectComments } from "./app/commentSlice.ts";
import {useEffect} from "react";
import {fetchComments} from "./app/commentThunk.ts";
import {Grid} from "@mui/material";

const App = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(selectComments);

    console.log(comments);

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <>
            <header>
                <ToolBar />
            </header>
            <main className='container'>
                <CommentForm />
                <Grid container direction="column" spacing={2}>
                    {comments ? (
                        comments.map((comment) => (
                            <Grid sx={{
                                display: 'flex',
                                border: '3px solid black',
                                marginTop: '30px',
                                justifyContent: 'space-between',
                                padding: '0 20px'
                            }} item xs key={comment.id}>
                                <p>{comment.author}</p>
                                <p>{comment.comment}</p>
                            </Grid>
                        ))
                    ) : (
                        <p>No comments available</p>
                    )}
                </Grid>
            </main>
        </>
    );
};

export default App;
