import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import TokenIcon from '../../assets/images/icon/token.png'
import Button from '@mui/material/Button';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex', 
        flexDirection: 'row',             
        justifyContent: 'space-between !important', 
        padding: '0px 0 0px 0', 
        alignItems: 'center',                  
    },  
    itemContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        width: '75% !important', 
        justifyContent: 'space-between !important', 
        alignItems: 'center'
    },
    tokenName: {        
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '0.15px', 
        color: '#FFFFFF',
        fontFamily: 'Roboto'
    },
    symbolName: {
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '14px',
        lineHeight: '143%',
        letterSpacing: '0.15px', 
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Roboto'
    },
    button: {
        flexDirection: 'column',
        color: 'white',
        border: 'solid 1px rgba(0, 0, 0, 0.12)',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.09) 100%)',
        width: '71px',
        height: '60px',
        borderRadius: '13px',
        padding: '5px 15px !important'
    },
    coin: {
        borderRadius: '10px'
    },
    text: {
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '12px',
        lineHeight: '20px',
        letterSpacing: '0.4px', 
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Roboto'
    }  
}));

const CoinItem = () => {
  const classes = useStyles ();
  const history = useHistory();


  const handleListItemClick = (e: any) => {
    history.push('/detail');
  }
  return (        
    <ListItem            
        secondaryAction={
            <Button variant="outlined" className={classes.button}>
                <ArrowUpward />
                454
            </Button>     
        }
        disablePadding        
    >            
        <ListItemButton     
            dense sx={{pt: '15px !important', pb: '15px !important'}}
            onClick={(event) => handleListItemClick(event) }
        >
            <Box className={classes.itemContainer}>
                <Box className={classes.container}>                    
                    <img src = {TokenIcon} width={50} height={50} alt="" className={classes.coin} />                  
                    <Box sx={{flexGrow: 1, pl: '10px'}}>
                        <div className={classes.tokenName}>Player Comp</div>
                        <div className={classes.symbolName}>COMP</div>
                    </Box>                                                  
                </Box>    
                <Box>
                    <div className={classes.symbolName}>$10,9876</div>
                </Box> 
                <Box>
                    <div className={classes.symbolName}>7 days</div>
                </Box>       
            </Box>   
        </ListItemButton>            
    </ListItem>
  );
};
export default CoinItem;
