import './app-login.css'
import imagen from '../../img/login-cold.jpg'
function AppLogin() {
    return (
        <div className="card">
            <div className="card-content">
                <h1>Abrígate con estilo: tu asistente de moda con inteligencia artificial para pronósticos precisos del clima</h1>  
                <p className="card-content-description">Sube imagenes en distintas temperaturas y nuestra inteligencia artificial te indicará que ropa necesitarás para cualquier ocasión.</p>
            </div>
            <div className="card-logo">
                <img src={imagen} width='1000' />
            </div>
        </div>
    );
  }
  
  export default AppLogin;