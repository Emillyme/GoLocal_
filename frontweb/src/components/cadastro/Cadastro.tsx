import { ReactComponent as LoginImage } from "assets/images/login-image.svg";
import "./styles.css";
import { Link } from 'react-router-dom';

const Cadastro = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-content-container">
          <div className="login-card">
            <div className="login-content-in">
              <h3>CADASTRO</h3>

              <div className="btns-usuario-empresa">
                <div className="btn-user">
                  <button>USUÁRIO</button>
                </div>

                <div className="btn-empresa">
                  <button>EMPRESA</button>
                </div>
              </div>

              <div className="login-form">
                <form>
                <div className="nome">
                    <input
                      id="name"
                      placeholder="Nome"
                      name="nome"
                      type="name"
                    />
                  </div>
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
                      placeholder="Crie uma Senha"
                      name="senha"
                      type="password"
                    />
                  </div>
                  <div className="senha">
                    <input
                      id="password-confirm"
                      placeholder="Confirme sua Senha"
                      name="senha-confirmar"
                      type="password"
                    />
                  </div>
                </form>
               
                <a href="link" className="esqueceu-senha">
                  Esqueceu a senha?
                </a>

                <div className="btn-cad-login-qss">
                  <div className="btn-login-form">
                    <button>ENTRAR</button>
                  </div>
                  <h6>
                    Já tem uma conta?<span> </span>
                    <Link to="/Login">ENTRAR</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="login-text-info"></div>
          <div className="login-img"></div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;