import { Box } from '@mui/material';
import Discuss from '../../components/Discuss/Discuss'
import Story from '../../components/Story/Story'
import Coin from '../../components/Coin'

const Home = () => {  
  return (
    <Box>            
      <Box sx={{ flexDirection: 'row', justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
        {/* <Box sx={{minWidth: '379px'}}>
          <Discuss />
        </Box> */}
        <Box sx={{ flexGrow: 1, maxWidth: '970px'}}>          
            <Coin />
        </Box>
        {/* <Box sx={{minWidth: '379px'}}>
          <Story />
        </Box> */}
      </Box>       
    </Box>
  );
};

export default Home;
