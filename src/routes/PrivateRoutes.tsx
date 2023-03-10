import { Route, Switch } from 'react-router-dom';
import { Welcome, About, NotFound } from '../views';
import { PrivateLayout } from './Layout';
import Home from '../views/Home';

/**
 * List of routes available only for authenticated users
 * Also renders the "Private Layout" composition
 */
const PrivateRoutes = () => {
  
  return (
    <PrivateLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/welcome" component={Welcome} />        
        <Route path="/about" component={About} />,
        <Route component={NotFound} />
      </Switch>
    </PrivateLayout>
  );
};

export default PrivateRoutes;
