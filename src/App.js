import './App.css';
import React, {useReducer} from 'react';
import { ComponentC } from './components/useContext/ComponentC';
import { ComponentA } from './components/useReducer/useContext/ComponentA';
import { ComponentB } from './components/useReducer/useContext/ComponentB';
import { DataFetchingTwo } from './components/useReducer/DataFetchingTwo';
import { Counter } from './components/useMemo/Counter';
import { FocusInput } from './components/useRef/FocusInput';
import ClassTimer from './components/useRef/ClassTimer';
import { HookTimer } from './components/useRef/HookTimer';
import { DocTitleOne } from './components/customHooks/DocTitleOne';
import { DocTitleTwo } from './components/customHooks/DocTitleTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state 
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    //   <div className="App">
    //     <div>
    //       Count - {count}
    //     </div>
    //     <UserContext.Provider value={'Anthonie'}>
    //       <ChannelContext.Provider value={'hello brother'}>
    //         <ComponentC/>
    //       </ChannelContext.Provider>
    //     </UserContext.Provider>
    //     <ComponentA/>
    //     <ComponentB/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <DataFetchingTwo/>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <Counter/>
    //   </div>
    // </CountContext.Provider>
    <div className='App'>
      <DocTitleOne/>
      <DocTitleTwo/>
    </div>
  );
}

export default App;
