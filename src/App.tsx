import React from 'react';
import './App.css';
import { Main } from './components/main/Main';
import { TransactionAppProvider } from './core/providers/TransactionAppProvider';


function App() {
  

  return (
    <div className="App ">
      <div className='flex items-center justify-center h-screen backdrop-blur py-0 md:py-14'>
      {/* <div className="h-full"> */}
      <TransactionAppProvider>
        <Main></Main>
      </TransactionAppProvider>
      {/* </div> */}
      </div>
    </div>
  );
}

export default App;
