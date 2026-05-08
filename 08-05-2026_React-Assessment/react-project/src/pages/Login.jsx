import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="login-page">
      {/* left gradient panel */}
      <div className="login-left">
        <span className="home-deco d1" />
        <span className="home-deco d2" />
        <span className="home-pill p1" />
        <span className="home-pill p2" />
        <span className="sparkle s1">✦</span>
        <span className="sparkle s2">✦</span>

        <div className="login-left-content">
          <h3>WELCOME TO</h3>
          <h1>
            MEGA<span className="yellow"> SALE</span>
          </h1>
          <p>
            Sign in to unlock exclusive deals and track your orders in real
            time.
          </p>
        </div>

        <div className="login-circle-img">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
            alt="login visual"
          />
        </div>
      </div>

      {/* right form panel */}
      <div className="login-right">
        <div className="login-card">
          <h1 className="login-title">
            {isRegister ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="login-sub">
            {isRegister
              ? "Join us today and start shopping!"
              : "Sign in to continue shopping"}
          </p>

          {isRegister && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
          )}

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="pass-wrap">
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
              />
              <span
                className="pass-toggle"
                onClick={() => setShowPass((p) => !p)}
              >
                {showPass ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {!isRegister && <p className="forgot-link">Forgot password?</p>}

          <button className="login-btn">
            {isRegister ? "Register" : "Login"}
          </button>

          <div className="login-divider">
            <span>or continue with</span>
          </div>

          <div className="social-login-row">
            <button className="social-login-btn">
              <svg viewBox="0 0 24 24" width="18" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <button className="social-login-btn">
              <svg viewBox="0 0 24 24" width="18" fill="#1877F2">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          <p className="switch-auth">
            {isRegister
              ? "Already have an account? "
              : "Don't have an account? "}
            <span onClick={() => setIsRegister((p) => !p)}>
              {isRegister ? "Login" : "Register"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
