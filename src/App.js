import './App.css';
import React from 'react';
import { ComponentC } from './components/useContext/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Anthonie'}>
        <ChannelContext.Provider value={'hello brother'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
