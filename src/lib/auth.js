//File copied from LMS, contains the user stuff

import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
//Store added for Logged in below
import { writable } from 'svelte/store';
import { goto } from '$app/navigation'
export const LoggedIn = writable(false)
//End of store

const emptyAuth = 
{
    "token": "",
    "userId": ""
}

//Logs out the user by replacing JWT token with emptyAuth
export function logOut() 
{
    localStorage.setItem("auth", JSON.stringify(emptyAuth));
    LoggedIn.set(false)
    goto('/')
    return true
}

//
export function getUserId() 
{
    const auth = localStorage.getItem("auth")
    if (auth) {
        return JSON.parse(auth)["userId"]
    }
    return null
}

//Gets JWT Token
export function getTokenFromLocalStorage() 
{
    const auth = localStorage.getItem("auth")
    if (auth) {
        return JSON.parse(auth)["token"]
    }
    return null
}

//Checks whether user is logged in, if yes, then enters 'log in mode' (displays the relevant items on nav bar)
export async function isLoggedIn() {
    if (!getTokenFromLocalStorage()) {
        return false
    }

    try {
        const resp = await fetch(
            PUBLIC_BACKEND_BASE_URL + '/api/collections/users/auth-refresh',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getTokenFromLocalStorage()
                },
            }
        );

        const res = await resp.json()
        if (resp.status == 200) {

            localStorage.setItem("auth", JSON.stringify({
                "token": res.token,
                "userId": res.record.id
            }));

            LoggedIn.set(true)
                
            return true
        }
        return false
    } catch {
        return false
    }
}

//Checks whether user credentials are correct, if yes, then logs in user
export async function authenticateUser(username, password) {
    const resp = await fetch(
        PUBLIC_BACKEND_BASE_URL + '/api/collections/users/auth-with-password',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identity: username,
                password
            })
        }
    );

const res = await resp.json();

if (resp.status == 200) {
    localStorage.setItem("auth", JSON.stringify({
        "token": res.token,
        "userId": res.record.id
    }))

    LoggedIn.set(true)

    return {
        success: true, 
        res: res
    }
}

return {
    success: false,
    res: res
}

}
