import './App.css';

import Comments from './components/Comments';
import Subscribers from './components/Subscriber';
import Views from './components/Views';
import Display from './components/Display';


import {Provider} from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Comments />
       <Subscribers/>
       <Views/>
       <Display />
    </div>
    </Provider>
  );
}

export default App;
