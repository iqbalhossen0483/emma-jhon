import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';
import OrderReview from './Component/OrderReview/OrderReview';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className='body'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/order-review">
            <OrderReview></OrderReview>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
