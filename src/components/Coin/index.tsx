import { Box} from '@mui/material';
import CoinList from '../../components/Common/CoinList'
import BannerImage from '../../assets/images/icon/top_banner.png'

const Coin = () => {   
  return (    
    <>     
      <Box sx={{w: '100%'}}>   
        <Box sx={{height: '35px'}} />        
        <img src={BannerImage} alt="" />        
        <Box sx={{height: '52px'}} />
        <CoinList />
        <CoinList />
        <CoinList />
        <CoinList />        
      </Box>            
    </>    
  );
};

export default Coin;
