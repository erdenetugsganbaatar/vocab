"use client"
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { createSession, deleteCookie } from '@/app/lib/session';

const LoginPage = () => {
    const [token, setToken] = useState<string | null>(null);

    const handleGoogleLogin = () => {
        const popup = window.open('http://localhost:8080/auth/google_signin', 'googleLogin', 'width=600,height=600');
        if (popup) {
            console.log(popup);
            
            const popupTick = setInterval(() => {
                if (popup.closed) {
                    clearInterval(popupTick);
                    console.log('Popup closed');
                }
            }, 500);
        }
    };

const handleLogout = () => {
        setToken(null); // Clear the token state
        deleteCookie('voctoken'); // Delete the 'session' cookie
    };
    useEffect(() => {
        window.addEventListener('message', (event) => {
            if (event.origin !== 'http://localhost:8080') return;
            if (event.data.token) {
                setToken(event.data.token);
                createSession(event.data.token)
                // document.cookie = `session=${event.data.token}; Secure; SameSite=Lax`; // Set cookie with token
            }
        });
    }, []);

 

    return (
        <div>
            <h4>LoginPage</h4>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleGoogleLogin}>Google</button>
            <p>{token}</p>

            <button className="bg-red-700  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleLogout}>LOGOUT</button>
        </div>
    );
};

export default LoginPage;