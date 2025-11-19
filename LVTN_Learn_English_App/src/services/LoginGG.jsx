import React, {useState} from 'react';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import axios from "axios"

const CLIENT_ID = '1007504375647-nqm4skiiu0o1l6h7bqp2daqjesnebeg5.apps.googleusercontent.com';
function LoginGG({onLoginSuccess}) {
    const [user,setUser] = useState(null);
    const handleLoginSuccess = async (credentialResponse) => {
    try {
        const credential = credentialResponse.credential;

        const res = await axios.post("http://localhost:8080/auth/google", {
            credential: credential,
        });

        setUser(res.data.user);
        if (onLoginSuccess) onLoginSuccess(res.data.user);
    } catch (error) {
        console.error("Login failed:", error);
    }
};

    const handleLogout = () => setUser(null);
    return(
         <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {!user ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.log("Login Failed")}
          />
        ) : (
          <div>
            <h2>Xin chào, {user.name}</h2>
            <img src={user.picture} alt="avatar" />
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
    );
};
export default LoginGG;