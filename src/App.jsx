// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// import './App.css'

import { Alert } from './Alert';

export default function App() {
  return (
    <div className="App">
      <Alert type="information" heading="Success">
        Everythin is really good!
      </Alert>
    </div>
  );
}
