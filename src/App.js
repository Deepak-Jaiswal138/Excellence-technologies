import Todo from './todo/Todo'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Users from './users/Users';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>

       <Switch>
         <Route exact path="/" component={Main} />
         <Route path="/todo" component={Todo} />
         <Route path="/users" component={Users} />
         </Switch>
    </BrowserRouter>
  );
}

export default App;
