import React, {useState, useEffect} from 'react'
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, Card} from '@mui/material';
import { Theme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import makeStyles from '@mui/styles/makeStyles';
import UserDiscussItem from '../Common/UserDiscussItem';
import Grid from '@mui/material/Grid';

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
    },
    divide: {
        height: '50px'
    },
    calendar: {
      width: '283px',     
      marginLeft: '-10px'       
    }
}));

const Story = () => { 

  const [date, setDate] = React.useState<Date | null>(new Date());
  const classes = useStyles();  

  return (
    <Box sx={{}}>
      <Card sx={{width: '100%', borderRadius: '16px', padding: '29px 43.5px 0px 43.5px'}}>
        <div className={classes.text}>Latest Stories </div>        
        <UserDiscussItem />
        <UserDiscussItem />
        <div className={classes.divide} ></div>
        <div className={classes.text}>Upcoming Events </div>  
        <Divider variant="fullWidth" sx={{border: '1px solid #EFF0F7'}} />          
        <LocalizationProvider dateAdapter={AdapterDateFns}>          
          <Grid sx={{marginTop: '30px'}}>
            <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} className={classes.calendar} />
          </Grid>                      
        </LocalizationProvider>
      </Card>        
    </Box>
  );
};

export default Story;
