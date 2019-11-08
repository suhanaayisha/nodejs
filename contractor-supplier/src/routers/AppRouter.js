import React from 'react';
import App1 from '../components/App1';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Contractor from '../components/Contractor';
import Supplier from '../components/Supplier';


   const AppRouter = () => (
    <BrowserRouter>
           <div>
               <App1/>
               <Switch>
                    <Route path='/' component={Login} exact={true}/>
                    <Route path='/signup' component={SignUp} />
                    <Route path='/contractor' component={Contractor} />
                    <Route path='/supplier' component={Supplier} />
               </Switch>
           </div>
       </BrowserRouter>
   );
   
   export default AppRouter;
  