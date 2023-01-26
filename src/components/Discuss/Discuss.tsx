import { Box, Card} from '@mui/material';
import { Theme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import DiscussItem from '../Common/DiscussItem';
import Community from './Community';
import makeStyles from '@mui/styles/makeStyles';
import CompanyLogo from '../../assets/images/logo/company_logo.svg'
import Facebook from '../../assets/images/icon/facebook.svg'
import Twitter from '../../assets/images/icon/twitter.svg'
import Discord from '../../assets/images/icon/discord.svg'
import Instagram from '../../assets/images/icon/instagram.svg'
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme: Theme) => ({
    text: {
        fontSize: '15px', 
        color: '#A0A3BD', 
        marginBottom: '15px', 
        fontStyle: 'normal',        
        fontWeight: 400,
        lineHeight: '24px'
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

const Discuss = () => { 

  const classes = useStyles();
  return (
    <Box>
      <Card sx={{width: '100%', borderRadius: '16px', padding: '29px 58px 56px 27px'}}>
        <div className={classes.text}>Discussions </div>
        <Divider variant="fullWidth" sx={{border: '1px solid #EFF0F7'}} />
        <DiscussItem />
        <DiscussItem />
        <div className={classes.text} >Communities</div>
        <Divider variant="fullWidth" sx={{border: '1px solid #EFF0F7'}} />
        <Community />
      </Card>  
      <Card className={classes.community} >
        <img src={CompanyLogo} alt="" width={240} />
        <label className={classes.content}>
            Welcome to Altbase. Home of the Altcoin. Our mission is to treat everyone as an equal in the crypto space. Our goals are to educate, promote, and create one hub to unite all traders alike. 
        </label>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }} >
            <IconButton>
                <img src={Twitter} alt=""  />
            </IconButton>
            <IconButton>
                <img src={Facebook} alt=""  />
            </IconButton>
            <IconButton>
                <img src={Instagram} alt=""  />
            </IconButton>
            <IconButton>
                <img src={Discord} alt=""  />
            </IconButton>                           
        </Box>
      </Card> 
    </Box>
  );
};

export default Discuss;
