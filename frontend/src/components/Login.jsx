import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"

function Login() {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/profile");
    }
        
        return (
            <div>
                <h1>Login</h1>
                <p>Stuff and things</p>
                <Button type="submit" onClick={handleSubmit}>Sign in</Button>
                <p>Submit button redirects to profile</p>
            </div>
        )
    }

export default Login