import { create } from "zustand";
import { getLeaves, getLeavesDetails, updateLeaveStatus } from "../services/adminLeave.js";

const useAdminLeaveStore = create((set, get) => ({
    leaves: null,
    singleleavesDetails: null,
    loading: true,
    error: null,

    getLeaves: async (status) => {
        try {
            const response = await getLeaves(status)
            set({ leaves: response.data.data, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getLeavesDetails: async (id) => {
        try {
            const response = await getLeavesDetails(id)
            console.log(response)
            set({ leavesDetails: response.data.data, loading: false })
            return response.data
        } catch (err) {
            console.log(response)
            set({error: err, loading: false})
            return err
        }
    },
    
    updateLeaveStatus: async (leaveId, status) => {
        try {
            const response = await updateLeaveStatus(leaveId, status)
            set({ loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useAdminLeaveStore }