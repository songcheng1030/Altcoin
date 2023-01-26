import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../views';
import { PublicLayout } from './Layout';
import LoginEmailView from '../views/Auth/Login/Email';
import Home from '../views/Home'
import CoinDetail from '../../src/views/CoinDetail'

/**
 * List of routes available only for anonymous users
 * Also renders the "Public Layout" composition
 */
const PublicRoutes = () => {
  
  return (
    <PublicLayout>
      <Switch>        
        <Route path="/" exact component={Home} />        
        <Route path="/detail" exact component={CoinDetail} />,
        <Route component={NotFound} />        
      </Switch>
    </PublicLayout>
  );
};

export default PublicRoutes;
