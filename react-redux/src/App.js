
import './App.css';
//import HolyGrail from './Components/HolyGrail'
import LoginUseState from './Components/LoginUseState'
import {store} from './redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
<Provider store = {store}>
<div className="App">
      {/* <LoginUseState/> */}
      
      
    </div>

</Provider>
    
  );
}

export default App;
