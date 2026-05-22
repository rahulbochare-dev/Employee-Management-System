import { create } from "zustand";
import { getLeaves, getLeavesDetails } from "../services/adminLeave.js";

const useAdminLeaveStore = create((set) => ({
    leaves: null,
    leavesDetails: null,
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
            set({ leavesDetails: response.data.data, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useAdminLeaveStore }