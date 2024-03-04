import { Paper } from '@mui/material';

function Item({item})
{
    return (
        <Paper className="paper " Style="height:100%;border-radius:3rem; padding-bottom;">

            <img src={item.image} alt="slider" style={{width:"100%", height:"70vh" }} />
        
     
        </Paper>
    )
};

export default Item;

