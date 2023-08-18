//JS of +layout.svelte

import { isLoggedIn } from "../lib/auth.js";
export const ssr = false; 
export async function load(){
    await isLoggedIn()
}
// this essentially turns our entire project into true SPA mode. No JS code will execute server side.