import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import TokenIcon from '../../assets/images/icon/token.png'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex', 
        flexDirection: 'row',             
        justifyContent: 'space-between', 
        padding: '0px 0 0px 0', 
        alignItems: 'center',                  
    },  
    itemContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        width: '75%', 
        justifyContent: 'space-between', 
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
    coin: {
        borderRadius: '10px'
    },
    
}));

const Token = () => {
  const classes = useStyles ();

  return (         
    <Box className={classes.container}>                    
        <img src = {TokenIcon} width={50} height={50} alt="" className={classes.coin} />                  
        <Box sx={{flexGrow: 1, pl: '10px'}}>
            <div className={classes.tokenName}>Player Comp</div>
            <div className={classes.symbolName}>COMP</div>
        </Box>                                                  
    </Box> 
  );
};
export default Token;
