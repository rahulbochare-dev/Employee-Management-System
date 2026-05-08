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
            return err
        }
    }
}))

export { useUserStore }