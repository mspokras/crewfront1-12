import React from 'react';
import { Link } from 'react-router-dom';
import './LoginBottomLink.scss';

interface PropTypes {
  page: "login" | "signup";
}
const LoginBottomLink = (props: PropTypes) => {
  const { page } = props;
  const isLogin = page === "login";
  return (
    <div className="login-bottom-link">
      {isLogin ? "Don't have an account?" : "Already have an account?"}
      <Link to={isLogin ? "/signup" : "/"} className="login-link">
        {isLogin ? "Sign up" : "Log in"}
      </Link>
    </div>
  );
};

export default LoginBottomLink;