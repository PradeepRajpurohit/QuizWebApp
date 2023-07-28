import Home from './componenets/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Quiz from './componenets/Quiz';
import Result from './componenets/Result';
import { Provider} from 'react-redux';
import store from './store/store';


const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/quiz/:topic' element={<Quiz />}></Route>
          <Route exact path='/result' element={<Result/>}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
