import { create } from "zustand";
import { onboardEmployee, getEmployees, searchEmployee, getEmployeeBySalary, getEmployeeByFilter, getEmployeeDetails } from "../services/adminEmployee.js";

const useAdminEmployeeStore = create((set) => ({
    employees: null,
    employeesCount: null,
    singleEmployeeDetails: null,
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

    searchEmployee: async (searchName) => {
        try {
            const response = await searchEmployee(searchName)
            set({ employees: response.data.data.employee, loading: false })
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

    getEmployeeByFilter: async (params) => {
        try {
            const response = await getEmployeeByFilter(params)
            set({ employees: response.data.data, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },
    
    getEmployeeDetails: async (empID) => {
        try {
            const response = await getEmployeeDetails(empID)
            set({ singleEmployeeDetails: response.data.data, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useAdminEmployeeStore }