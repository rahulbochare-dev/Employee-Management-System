import { create } from "zustand";
import { signup, login, logout, getCurrentUser } from "../services/auth.js"

const useUserStore = create((set) => ({
    user: null,
    loading: true,
    error: null,
    isLoggedIn: false,

    signup: async (data) => {
        try {
            const response = await signup(data)
            set({ user: response.data, loading: false, isLoggedIn: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    login: async (data) => {
        try {
            const response = await login(data)
            set({ user: response.data, loading: false, isLoggedIn: true })
            return response
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    logout: async (data) => {
        try {
            const response = await logout(data)
            set({ user: response.data, loading: false, isLoggedIn: false })
            return response
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getCurrentUser: async () => {
        try {
            const response = await getCurrentUser()
            set({ user: response.data.data, loading: false, isLoggedIn: true })
            return response
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useUserStore }