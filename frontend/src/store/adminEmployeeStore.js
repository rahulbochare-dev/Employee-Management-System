import { create } from "zustand";
import { onboardEmployee } from "../services/adminEmployee.js";

const useAdminEmployeeStore = create((set) => ({
    employees: null,
    loading: true,
    error: null,

    onboardEmployee: async (data) => {
        try {
            const response = await onboardEmployee(data)
            set({ loading: false, isLoggedIn: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useAdminEmployeeStore }