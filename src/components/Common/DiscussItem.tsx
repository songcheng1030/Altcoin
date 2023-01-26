import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
    text: {
        fontSize: '17px', 
        color: '#6E7191', 
        marginTop: '28px', 
        marginBottom: '25px', 
        letterSpacing: '0.648353px',  
        fontStyle: 'normal',
        fontWeight: 500, 
        lineHeight: '28px'
    },    
    btn_text: {
        marginLeft: '6px', 
        fontSize: '16px', 
        color: '#6E7191', 
        fontWeight: 600
    },
    content: {
        padding: '21px', 
        color: '#6E7191', 
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 400
    },
    community: {
        width: '100%', 
        flexDirection: 'column', 
        display: 'flex', 
        marginTop: '16px', 
        borderRadius: '16px', 
        alignItems: 'center', 
        padding: '45px 0px 33.5px 0px'
    }
}));

const DiscussItem = () => {

  const classes = useStyles ();
  return (    
      <Box sx={{marginBottom: '39px'}}>
        <div className={classes.text}>Example text here would be a good example</div>    
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems:'center' }}>
                <FavoriteBorder sx={{width: 20, color: '#A0A3BD' }} />                
                <div className={classes.btn_text}>145</div>
            </Box>
            <Box sx={{ display: 'flex', alignItems:'center', marginLeft: '20px' }}>
                <ChatBubbleOutline sx={{width: 22, color: '#A0A3BD'}} />                
                <div className={classes.btn_text}>Reply</div>
            </Box>                     
        </Box>   
      </Box>    
  );
};

export default DiscussItem;
