import { create } from "zustand";
import { onboardEmployee, getEmployees, searchEmployee, getEmployeeBySalary, getEmployeeByFilter } from "../services/adminEmployee.js";

const useAdminEmployeeStore = create((set) => ({
    employees: null,
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
            set({
                employees: response.data.data.employees,
                employeesCount: response.data.data.totalEmployeesCount,
                totalPages: response.data.data.totalPages,
                currentPage: response.data.data.currentPage,
                loading: false
            })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    searchEmployee: async (firstName, lastName) => {
        try {
            const response = await searchEmployee(firstName, lastName)
            set({ searchFoundEmployee: response.data, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getEmployeeBySalary: async (minSalary, maxSalary) => {
        try {
            const response = await getEmployeeBySalary(minSalary, maxSalary)
            set({ employees: response.data.data.employees, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getEmployeeByFilter: async (gender) => {
        try {
            const response = await getEmployeeByFilter(gender)
            set({ employees: response.data.data.employees, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useAdminEmployeeStore }