import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import React from "react";

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/profile");
};

    return (
        <div>
            <h1>Register</h1>
            <p>Stuff and things</p>
            <p>Forms and stuff</p>
            <Button type="submit" onClick={handleSubmit}>Register</Button>
            <p>Submit button redirects to profile</p>
        </div>
    )
}

export default Register