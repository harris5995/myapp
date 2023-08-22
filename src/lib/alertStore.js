import { writable } from "svelte/store";
export const ALERT_TYPE = {
    DANGER: 'DANGER',
    INFO: 'INFO',
    SUCCESS: 'SUCCESS'
}

Object.freeze();

export const alertMessage = writeable('Something happened');
export const alertType = writeable('');

export const displayAlert = (message,type = ALERT_TYPE.INFO) =>
{
    alertMessage.set(message);
    alertType.set(type);
}