import { useState } from 'react';
import './App.css';

import Dashboard from './views/Dashboard';
import Details from './views/Details';
import PostAd from './views/PostAd';

function App() {

  const [changeScreen, setScreenChange] = useState('dashboard')


  function updateScreen(screen) {

    setScreenChange(screen)
  }


  return (
    <div className="App">
      <header className="App-header">


        <div >
          <button style={{marginLeft:'5px'}} onClick={() => updateScreen('dashboard')}>Dashboard</button>
          <button style={{marginLeft:'5px'}} onClick={() => updateScreen('details')}>Details</button>
          <button  style={{marginLeft:'5px'}}onClick={() => updateScreen('postAd')}>PostAd</button>
        </div>


        {changeScreen === 'dashboard' && <Dashboard />}

        {changeScreen === 'details' && <Details />}

        {changeScreen === 'postAd' && <PostAd />}



      </header>
    </div>
  );
}

export default App;
