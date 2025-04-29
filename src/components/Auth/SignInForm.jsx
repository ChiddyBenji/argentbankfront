import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, getUserProfile } from "../../services/api";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  updateProfileSuccess,

} from "./AuthSlice";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error: authError } = useSelector((state) => state.auth);
  const isLoading = status === "loading";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const response = await login(email, password);

      if (response.status === 200) {
        const token = response.body.token;
        dispatch(loginSuccess(token));

        const profileResponse = await getUserProfile(token);
        if (profileResponse.status === 200) {
          const { firstName, lastName } = profileResponse.body;
          dispatch(updateProfileSuccess({ firstName, lastName }));
        }

        navigate("/user", { replace: true });
      } else {
        dispatch(loginFailed(response.message || "Identifiants incorrects"));
      }
    } catch (err) {
      dispatch(loginFailed("Une erreur est survenue lors de la connexion"));
      console.error("Erreur lors de la connexion :", err);
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>

      {authError && (
        <div className="error-message">
          <i className="fa fa-exclamation-circle"></i> {authError}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="submit" className="sign-in-button" disabled={isLoading}>
          {isLoading ? "Connexion en cours..." : "Se connecter"}
        </button>
      </form>
    </section>
  );
}

export default SignInForm;
