
import * as React from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
    text: {
        fontSize: '17px', 
        color: '#6E7191',         
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

const UserDiscussItem = () => {

  const classes = useStyles ();
  return (   
    <Box sx={{marginBottom: '36px'}}>
        <Divider variant="fullWidth" sx={{border: '1px solid #EFF0F7'}} />        
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Carmela Nieves"
                    secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="#1565C0"
                        >
                            Carmela Nieves
                        </Typography>                
                    </React.Fragment>
                    }
                />
            </ListItem>        
        </List>
        <Box>
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
    </Box>
  );
};

export default UserDiscussItem;
