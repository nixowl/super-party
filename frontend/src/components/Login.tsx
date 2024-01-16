import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import React, {useState} from "react";


interface LoginProps {
    handleLogin: (username: string, password: string) => void;
  }
  
  const Login: React.FC<LoginProps> = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      handleLogin(username, password);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Log In" />
      </form>
    );
  };
  
  export default Login;
