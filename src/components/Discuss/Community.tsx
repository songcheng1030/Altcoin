import * as React from 'react';
import List from '@mui/material/List';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import CoinIcon from '../../assets/images/icon/coin.svg'
import TradeIcon from '../../assets/images/icon/trade.svg'
import Badge from '@mui/material/Badge';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex', 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: '40px', 
        padding: '0px 22px 0px 10px'
    },       
    text: {
        marginLeft: '19.5px', 
        fontSize: '15px', 
        fontWeight: 600, 
        color: '#4E4B66', 
        fontStyle: 'normal'
    }
}));

const Community = () => {

  const classes = useStyles();
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box className={classes.container}>
          <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>            
            <img src={CoinIcon} alt="" />
            <div className={classes.text} >Altcoins</div>
          </Box>    
          <ArrowForwardIos sx={{width: 16}} />        
      </Box>
      <Box className={classes.container}>
          <Box sx={{display: 'flex', alignItems: 'center',flexDirection: 'row'}}>            
            <img src={TradeIcon} alt="" />
            <div className={classes.text} >Customer Support</div>
          </Box>    
          <ArrowForwardIos sx={{width: 16}} />          
      </Box>
      <Box className={classes.container}>
          <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>            
            <img src={TradeIcon} alt="" />
            <div className={classes.text} >Trading</div>
          </Box>    
          <Badge badgeContent={1000} max={999} color="primary" sx={{marginRight: '25px'}}></Badge>   
      </Box>      
    </List>
  );
}

export default Community
