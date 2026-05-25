import { create } from "zustand";
import { getMyLeaves, applyLeave, getLeaveDetails } from "../services/employeeLeave.js";

const useEmployeeLeaveStore = create((set) => ({
    myLeaves: null,
    myLeaveDetails: null,
    loading: true,
    error: null,

    getMyLeaves: async () => {
        try {
            const response = await getMyLeaves()
            set({ myLeaves: response.data.data.leaves, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getLeaveDetails: async (id) => {
        try {
            const response = await getLeaveDetails(id)
            set({ myLeaveDetails: response.data.data.leave[0], loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    applyLeave: async (data) => {
        try {
            const response = await applyLeave(data)
            set({ loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useEmployeeLeaveStore }