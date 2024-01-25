import {CardMedia, Grid, styled} from "@mui/material";
import imageNotAvailable from '../../assets/images/no-image-available.png';
import {apiURL} from "../../constants.ts";
import React from "react";

const ImageCardMedia = styled(CardMedia)({
    height: '130px',
    width: '130px',
});

interface Props {
    id: string;
    author: string;
    comment: string;
    image: string | null;
}

const Comment: React.FC<Props> = ({id, comment, image, author}) => {
    let cardImage = imageNotAvailable;

    if(image) {
        cardImage = apiURL + '/' + image;
    }

    return (
        <Grid sx={{
            display: 'flex',
            border: '1px solid grey',
            marginTop: '100px',
            justifyContent: 'space-between',
            padding: '20px',
            borderRadius: '7px',
            alignItems: 'center',
            boxSizing: 'border-box',
        }} item xs key={id}>
            <p style={{fontWeight: 'bold', fontSize: '30px', margin: 0}}>{author}</p>
            <p style={{fontSize: '20px', margin: 0}}>{comment}</p>
            <ImageCardMedia image={cardImage} title={author}/>
        </Grid>
    );
};

export default Comment;