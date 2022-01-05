import './App.css';
import Menu from './components/menu/Menu';
import db from './components/DB';

function App() {
     return (
          <div className='App'>
               <div className='topBar'></div>
               <div className='main'>
                    <div className='cart'></div>
                    <Menu database={db}></Menu>
               </div>
          </div>
     );
}

export default App;
