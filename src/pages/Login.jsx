import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = () => {
    login({
      id: "sso-001",
      name: "Taylor Morgan",
      email: "taylor.morgan@company.com",
      role: "HR Admin",
    });
    navigate("/", { replace: true });
  };

  return (
    <section className="login">
      <div className="login__card">
        <h1>HRM Tools</h1>
        <p>Single Sign-On for HR operations, compliance, and access reviews.</p>
        <button type="button" onClick={handleLogin} className="login__button">
          Continue with SSO
        </button>
      </div>
    </section>
  );
};

export default Login;
