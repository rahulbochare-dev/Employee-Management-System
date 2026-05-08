import { create } from "zustand";
import { signup, login } from "../services/auth.js"

const useUserStore = create((set) => ({
    user: null,
    loading: true,
    error: null,
    isLoggedIn: false,

    signup: async (data) => {
        try {
            const response = await signup(data)
            set({ user: response.data, loading: false, isLoggedIn: true })
            return response
        } catch (err) {
            const errorMessage = err.message || "Signup failed"
            set({ error: err.errorMessage, loading: false, isLoggedIn: false })
            return { success: false, errorMessage }
        }
    }
}))

export { useUserStore }