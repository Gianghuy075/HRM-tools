import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { mockSSOUser } from "../data/sampleData";

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = () => {
    login(mockSSOUser);
    navigate("/", { replace: true });
  };

  return (
    <section className="login">
      <div className="login__card">
        <h1>HRM Tools</h1>
        <p>Đăng nhập một lần (SSO) cho vận hành nhân sự, tuân thủ và kiểm soát truy cập.</p>
        <button type="button" onClick={handleLogin} className="login__button">
          Tiếp tục với SSO
        </button>
      </div>
    </section>
  );
};

export default Login;
