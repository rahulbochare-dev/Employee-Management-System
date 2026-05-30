import { create } from "zustand";
import { onboardEmployee, getEmployees, searchEmployee, getEmployeeBySalary, getEmployeeByFilter, getEmployeeDetails, terminateEmployee } from "../services/adminEmployee.js";

const useAdminEmployeeStore = create((set, get) => ({
    employees: null,
    employeesCount: null,
    singleEmployeeDetails: null,
    totalPages: null,
    currentPage: null,
    limit: null,
    loading: true,
    error: null,
    dataFetched: false,

    onboardEmployee: async (data) => {
        if(get().dataFetched) return
        try {
            const response = await onboardEmployee(data)
            set({ loading: false, dataFetched: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getEmployees: async (currentPage, limit) => {
        if(get().dataFetched) return
        try {
            const response = await getEmployees(currentPage, limit)
            set({
                employees: response.data.data.employees,
                employeesCount: response.data.data.totalEmployeesCount,
                totalPages: response.data.data.totalPages,
                currentPage: response.data.data.currentPage,
                loading: false,
                dataFetched: true
            })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    searchEmployee: async (searchName) => {
        if(get().dataFetched) return
        try {
            const response = await searchEmployee(searchName)
            set({ employees: response.data.data.employee, loading: false, dataFetched: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getEmployeeBySalary: async (minSalary, maxSalary) => {
        if(get().dataFetched) return
        try {
            const response = await getEmployeeBySalary(minSalary, maxSalary)
            set({ employees: response.data.data.employees, loading: false, dataFetched: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getEmployeeByFilter: async (params) => {
        if(get().dataFetched) return
        try {
            const response = await getEmployeeByFilter(params)
            set({ employees: response.data.data, loading: false, dataFetched: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },
    
    getEmployeeDetails: async (empID) => {
        if(get().dataFetched) return
        try {
            const response = await getEmployeeDetails(empID)
            set({ singleEmployeeDetails: response.data.data, loading: false, dataFetched: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    terminateEmployee: async (id) => {
        if(get().dataFetched) return
        try {
            const response = await terminateEmployee(id)
            set({ loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false, dataFetched: true })
            return err
        }
    }
}))

export { useAdminEmployeeStore }