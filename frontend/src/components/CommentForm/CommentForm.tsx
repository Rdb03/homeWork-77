import {Button, Grid, TextField} from "@mui/material";
import FileInput from "../FileInput/FileInput.tsx";
import React, {useState} from "react";
import {CommentMutation} from "../../type";
import {useAppDispatch} from "../../app/hook.ts";
import {createComments, fetchComments} from "../../app/commentThunk.ts";

const CommentForm = () => {

    const [comment, setComment] = useState<CommentMutation>({
        author: '',
        comment: '',
        image: null,
    });
    const dispatch = useAppDispatch();
    // const createLoading = useAppSelector(selectCreateCommentLoading);

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
      console.log(comment);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <Grid container direction="column" spacing={2}>
                <Grid item xs>
                    <TextField
                    id="author"
                    label="Author"
                    name="author"
                    type="text"
                    onChange={inputChangeHandler}
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        id="comment"
                        label="Text..."
                        name="comment"
                        type="text"
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
            <Button variant="contained" type="submit">Send</Button>
        </form>
    );
};

export default CommentForm;