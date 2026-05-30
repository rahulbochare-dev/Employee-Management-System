import { create } from "zustand";
import { getLeaves, getLeavesDetails, updateLeaveStatus } from "../services/adminLeave.js";

const useAdminLeaveStore = create((set, get) => ({
    leaves: null,
    leavesDetails: null,
    loading: true,
    error: null,
    dataFetched: false,

    getLeaves: async (status) => {
        if(get().dataFetched) return
        try {
            const response = await getLeaves(status)
            set({ leaves: response.data.data, loading: false, dataFetched: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },

    getLeavesDetails: async (id) => {
        if(get().dataFetched) return
        try {
            const response = await getLeavesDetails(id)
            set({ leavesDetails: response.data.data, loading: false, dataFetched: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    },
    
    updateLeaveStatus: async (leaveId, status) => {
        if(get().dataFetched) return
        try {
            const response = await updateLeaveStatus(leaveId, status)
            set({ loading: false, dataFetched: true })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useAdminLeaveStore }