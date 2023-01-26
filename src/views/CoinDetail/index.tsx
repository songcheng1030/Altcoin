import React from 'react'
import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import CoinImage from '../../assets/images/icon/token_avatar.png' 
import CopyIcon from '../../assets/images/icon/copy.svg' 
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@mui/material/Divider';
import Token from '../../components/Common/Token'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: "170px 200px 60px 196px",        
        width: '100%',        
    }, 
    topContainer: {
        width: '100%',
        flexGrow: 1, 
        display: 'flex',
        flexDirection: 'row'
    }, 
    rightContainer: {        
        flexGrow: 1,                        
        padding: '0px 100px 0px 45px'
    }, 
    bottomContainer: {
        width: '100%',
        height: '300px',        
        marginTop: '172px'
    },
    tokenName: {
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '48px',
        lineHeight: '116%',
        letterSpacing: '0.4px', 
        color: 'white',
        fontFamily: 'Roboto',
        float: 'left'
    },
    tokenSymbol: {
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '48px',
        lineHeight: '116%',
        letterSpacing: '0.4px', 
        color: 'rgba(255, 255, 255, 0.18)',
        fontFamily: 'Roboto',
        float: 'left',
        marginLeft: '24px'
    },
    button: {
        flexDirection: 'column',
        color: 'white',
        border: 'solid 1px rgba(0, 0, 0, 0.12)',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.09) 100%)',
        width: '71px',
        height: '60px',
        borderRadius: '13px',
        float: 'right'
    },
    title: {
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '0.15px', 
        color: 'white',
        fontFamily: 'Roboto',        
        marginTop: '10px',
        float: 'left' 
    },
    description: {
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '0.15px', 
        color: 'white',
        fontFamily: 'Roboto',                
    },
    descriptionContent: {
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '14px',
        lineHeight: '150%',
        letterSpacing: '0.15px', 
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Roboto',                   
    },
    content: {
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '0.15px', 
        color: 'white',
        fontFamily: 'Roboto',                   
    },
    discover: {
        fontWeight: 400,       
        fontStyle: 'normal',        
        fontSize: '24px',
        lineHeight: '133.4%',
        letterSpacing: '0.15px', 
        color: 'white',
        fontFamily: 'Roboto',     
    }
}));


const CoinDetail = () => {  

  const classes = useStyles (); 

  return (
    <Box className={classes.container}>               
        <Box className={classes.topContainer}>
            <Box>
                <img src={CoinImage} alt="" /> 
            </Box>            
            <Box className={classes.rightContainer}>
                <Box>
                    <div className={classes.tokenName}>HyperEarn</div>
                    <div className={classes.tokenSymbol}>HYPERN</div>
                    <Button variant="outlined" className={classes.button}>
                        <ArrowUpward />
                        454
                    </Button>  
                </Box>                
                <Box sx={{marginTop: '70px', alignItems: 'center' }}>
                    <div className={classes.title}>Binance Smart Chain: 0dfhgbskjfdiuwehrtouahfhisdh</div>
                    <IconButton>
                        <img src={CopyIcon} alt="" />
                    </IconButton>
                </Box>
                <Box sx={{mt: '40px', display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{float: 'left', clear: 'both'}}>
                        <div className={classes.description}>Market Cap</div>
                        <div className={classes.descriptionContent}>$0.00</div>
                    </Box>
                    <Box sx={{ml: '160px'}}>
                        <div className={classes.description}>Market Cap</div>
                        <div className={classes.descriptionContent}>$0.00</div>
                    </Box>
                </Box>
                <Box sx={{mt: '46px'}} >
                    <div className={classes.content}>With the HyperEarn token, you’ll be able to get the most out of the recently trending Move2Earn movement. HyperEarn connects different kinds of activities like walking, running, jumping, sleeping and even watching to generate income for its users.</div>                    
                </Box>
                <Box sx={{mt: '32px'}}>
                    <div className={classes.content}>This will be a reward token, rewards will be in the range of 15% to 20% per Buy/Sell in BUSD directly transferred to HOLDERS account, and we will be orchestrating the rewards to a new model as the holder count increases beyond 5000 or more so that we are able to make rewards more effective for the holders as we realize that as the holder count increases significantly the reward refelections become ineffective for new holders and holders with small bags. We are taking a u</div>
                </Box>
            </Box>
        </Box>
        <Box className={classes.bottomContainer}>
            <div className={classes.discover}>Discover</div>
            <Divider variant="fullWidth" sx={{backgroundColor: 'rgba(255, 255, 255, 0.12)', mb: '30px', mt: '20px'}}/>
            <Box sx={{height: '5px'}} />
            <Grid container item xs={12} spacing={10}>
                <React.Fragment>
                    <Grid item xs={3}>
                    <Token />
                    </Grid>
                    <Grid item xs={3}>
                        <Token />
                    </Grid>
                    <Grid item xs={3}>
                        <Token />
                    </Grid>
                    <Grid item xs={3}>
                        <Token />
                    </Grid>
                </React.Fragment>
            </Grid>
            <Grid container item xs={12} spacing={10}>
                <React.Fragment>
                    <Grid item xs={3}>
                        <Token />
                    </Grid>
                    <Grid item xs={3}>
                        <Token />
                    </Grid>                    
                </React.Fragment>
            </Grid>
        </Box>
    </Box>
  );
};

export default CoinDetail;
