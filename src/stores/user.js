import { defineStore } from 'pinia';
import axios from "axios";
axios.defaults.withCredentials=true

// import { fetchWrapper, router } from '@/helpers';

const baseUrl = `http://127.0.0.1:8000`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(token) {
            await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
            const respuesta = await axios.post(`${baseUrl}/login`, { token:token });

            // update pinia state
            if(respuesta.data.estado){
                this.user=respuesta.data.user
            }else{
                this.user={}
            }

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(this.user));
            location.reload()
            // redirect to previous url or default to home page
            // router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            // router.push('/login');
        }
    }
});