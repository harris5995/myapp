import { writable } from 'svelte/store';

export const alertMessage = writable('');
export const warningAlert = writable(false);
export const successAlert = writable(false);

let timeout;

function resetTimeout() {
    clearTimeout(timeoutId);
    timeout = setTimeout(() => 
    {
        const variable = [warningAlert, successAlert]
        variable.forEach((index) => index.set(false));

    }, 5000);
}

export function signUpAlert(){
    successAlert.set(true);
    alertMessage.set('Sign up successful!')
    resetTimeout()
}

export function logInAlert() {
    warningAlert.set(true);
    alertMessage.set('Login Failed');
    resetTimeout()
}

export function showJobAlert() {
    warningAlert.set(true);
    alertMessage.set('Failed to create job!');
    resetTimeout()
}

export function loginSuccessAlert() {
    successAlert.set(true);
    alertMessage.set('Successfully Logged In!');
    resetTimeout()
}

export function createJobAlert() {
    successAlert.set(true);
    alertMessage.set('Successfully Created Job!');
    resetTimeout()
}

export function notJobCreatedAlert() {
    successAlert.set(true);
    alertMessage.set('You did not create this job posting!');
    resetTimeout()
}