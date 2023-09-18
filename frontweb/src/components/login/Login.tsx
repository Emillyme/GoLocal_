import { ReactComponent as LoginImage } from "assets/images/login-image.svg";
import "./styles.css";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-content-container">
          <div className="login-card">
            <div className="login-content-in">
              <h3>LOGIN</h3>

              <div className="login-form">
                <form>
                  <div className="email">
                    <input
                      id="email"
                      placeholder="Email"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div className="senha">
                    <input
                      id="password"
                      placeholder="Senha"
                      name="senha"
                      type="password"
                    />
                  </div>
                </form>
                <a href="link" className="esqueceu-senha">
                  Esqueceu a senha?
                </a>

                <div className="btn-cad-login-qs">
                  <div className="btn-login-form">
                    <button>ENTRAR</button>
                  </div>
                  <h6>
                    Não tem cadastro? <Link to="/Cadastro">CADASTRAR</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="login-text-info"></div>
          <div className="login-img">
     
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;