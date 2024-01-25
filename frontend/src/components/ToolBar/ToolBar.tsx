import {Grid} from "@mui/material";

const ToolBar = () => {
    return (
        <Grid sx={{
            textAlign: 'center',
            backgroundColor: '#0066CC',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: '10px'
        }}>
            <h1 style={{color: 'white'}} className="toolBar-title">Guest Book</h1>
        </Grid>
    );
};

export default ToolBar;