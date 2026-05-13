import { create } from "zustand";
import { onboardEmployee, getEmployees, searchEmployee } from "../services/adminEmployee.js";

const useAdminEmployeeStore = create((set) => ({
    employees: null,
    searchFoundEmployee: null,
    employeesCount: null,
    totalPages: null,
    currentPage: null,
    limit: null,
    loading: true,
    error: null,

    onboardEmployee: async (data) => {
        try {
            const response = await onboardEmployee(data)
            set({ loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getEmployees: async (data) => {
        try {
            const response = await getEmployees(data)
            set({ employees: response.data.employees, employeesCount: response.totalEmployeesCount, totalPages: response.totalPages, currentPage: response.currentPage, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    searchEmployee: async (firstName, lastName) => {
        try {
            const response = await searchEmployee(data)
            set({ searchFoundEmployee: response.data, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useAdminEmployeeStore }