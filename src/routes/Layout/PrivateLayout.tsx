import { Grid } from '@mui/material/';
import { ErrorBoundary, AppIcon } from '../../components';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Header from '../../components/Header/Header'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh', // Full screen height    
    // paddingTop: 56, // on Small screen
    [theme.breakpoints.up('sm')]: {
      // paddingTop: 64, // on Large screen
    },
  },
  header: {},
  toolbar: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    backgroundColor: 'white',
  },
  title: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexGrow: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },  
  content: {    
    flexGrow: 1, // Takes all possible space
    padding: '56px 10px',
    background: "#121212",
    [theme.breakpoints.up('md')]: {
      // paddingTop: 64, // on Large screen
      padding: '52px 10px',
    },
  },
  footer: {},
}));

/**
 * Renders "Public Layout" composition
 */
const PrivateLayout: React.FC = ({ children }) => {
  const classes = useStyles();  

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item className={classes.header} component="header">        
        <Header page = "Explore" />
      </Grid>      
      <Grid item className={classes.content} component="main">
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Grid>          
    </Grid>
  );
};

export default PrivateLayout;
