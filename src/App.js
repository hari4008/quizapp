import './App.css';
import "./assets/css/globals.css"
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header/>
      <main>
        <AppRoutes/>
      </main>
      <footer/>
    <ToastContainer />
    </div>
  );
}

export default App;
