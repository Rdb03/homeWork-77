import {Button, CircularProgress, Grid, TextField} from "@mui/material";
import FileInput from "../FileInput/FileInput.tsx";
import React, {useState} from "react";
import {CommentMutation} from "../../type";
import {useAppDispatch, useAppSelector} from "../../app/hook.ts";
import {createComments, fetchComments} from "../../app/commentThunk.ts";
import {selectCreateCommentLoading} from "../../app/commentSlice.ts";

const CommentForm = () => {

    const [comment, setComment] = useState<CommentMutation>({
        author: 'Anonymous',
        comment: '',
        image: null,
    });
    const dispatch = useAppDispatch();
    const sendLoading = useAppSelector(selectCreateCommentLoading);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      setComment(prevState => {
         return {...prevState, [name]: value};
      });
    };

    const filesInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;

        if(files) {
            setComment((prevState) => ({
                ...prevState,
                [name]: files[0],
            }));
        }
    };

    const onSubmitHandler = (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(createComments(comment));
      dispatch(fetchComments());
      setComment({
          author: 'Anonymous',
          comment: '',
          image: null,
      });
    };

    return (
        <form style={{display: "flex", flexDirection: "column"}} onSubmit={onSubmitHandler}>
            <Grid container direction="column" spacing={2}>
                <Grid item xs>
                    <TextField
                    id="author"
                    label="Author"
                    name="author"
                    type="text"
                    value={comment.author}
                    onChange={inputChangeHandler}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        id="comment"
                        label="Text..."
                        name="comment"
                        type="text"
                        value={comment.comment}
                        onChange={inputChangeHandler}
                        required
                    />
                </Grid>
                <Grid item xs>
                    <FileInput
                        onChange={filesInputChangeHandler}
                        name="image"
                        label="Image"
                    />
                </Grid>
            </Grid>
            <Button
                sx={{
                    margin: "50px auto 0",
                    width: "200px"
                }}
                variant="contained"
                type="submit"
            >
                {!sendLoading ? 'Send' : <CircularProgress/>}
            </Button>
        </form>
    );
};

export default CommentForm;