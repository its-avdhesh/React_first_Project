import React from 'react';
import axios from 'axios';
import {useState} from 'react'

function Profile() {
    const [userData, setUserData] = useState()
    const getProfileData = () => {
        const token = JSON.parse(localStorage.getItem('token'));

        const headers = {
            Authorization: `Bearer ${token}`
        };

   

        axios.get('https://api.escuelajs.co/api/v1/auth/profile', { headers })
            .then(response => {
                setUserData(response.data)
                console.log("Profile data", response);
            })
            .catch(error => {
                console.log("Error", error);
            });
    };
    const handleLogout = () =>{
        setUserData();
        localStorage.removeItem("token");
        alert("Log Out success")

    }

    return (
        <div>
            <h1>This is a Profile Page</h1>
            <button onClick={getProfileData} className ='bg-blue-500 text-white m-2 p-2 ' >Get Profile Data</button>
            <button onClick={handleLogout} className ='bg-red-600 text-white m-2 p-2'>Log out</button>
            { userData &&
            <div >
                <p>Name: {userData?.name || "N/A"} </p>
                <p>Email: {userData?.email || "N/A"}</p>
                <p>Role: {userData?.role || "N/A"}</p>
                <img src={userData?.avatar||"N/A"} alt ="Image"/>
            </div>
            }
        </div>

        
    );
}

export default Profile;