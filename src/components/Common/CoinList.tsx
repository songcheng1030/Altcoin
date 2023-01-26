import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import CoinItem from '../Common/CoinItem'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

const data = [1,2,3,4,5,6]

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        fontSize: '24px', 
        color: '#FFFFFF',                 
        letterSpacing: '0.648353px',  
        fontStyle: 'normal',
        fontWeight: 400, 
        lineHeight: '133.4%',
        fontFamily: 'Roboto',
        marginBottom: '20px'       
    }    
}));

const CoinList = () => { 
    
  const classes = useStyles ();
  return (    
    <>         
      <Box sx={{w: '100%', marginBottom: '50px'}}>   
        <div className={classes.title}>Promoted Coins</div>
        <Divider variant="fullWidth" sx={{backgroundColor: 'rgba(255, 255, 255, 0.12)', marginBottom: '24px'}}/>
        <List
          sx={{ width: '100% !important'}}
          component="nav"      
        >
          {data.map ((item, index)=> <CoinItem /> )}     
        </List>           
      </Box>            
    </>    
  );
};

export default CoinList;
