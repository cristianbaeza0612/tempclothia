import logo from './img/TempClothIA-logo.png';
import './App.css';
import AppLogin from './components/app-login/app-login';
function App() {
  return (
    <div className="App">
      <section className='App-component'>
        <div className="App-header">
          <img src={logo} width='50' /><p>TempClothIA</p>
        </div>
        <AppLogin/>
      </section>
    </div>
  );
}

export default App;
