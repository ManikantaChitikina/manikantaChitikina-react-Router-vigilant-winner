import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from './auth';

const Profile = () => {
    const auth=useAuth();
    const navigate=useNavigate();
    const handleLogout=()=>{
        auth.logout();
        navigate('/')
    }
  return (
    <div>
      {/* <h1>Profile Page</h1> */}
      Welcome {auth.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
