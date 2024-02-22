import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Connexion</h1>
        <div className="input-box">
          <input type="text" placeholder="Utilisateur" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Mot de passe" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Se souvenir de moi
          </label>
          <a href="#">Mot de passe oublié ?</a>
        </div>

        <button type="submit">Connexion</button>

        <div className="register-link">
          <p>
            Toujours pas de compte ? <a href="#">S'inscrire</a>
          </p>
        </div>
      </form>
    </div>
  );
}
