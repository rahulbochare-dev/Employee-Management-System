import { create } from "zustand";
import { getLeaves, getLeavesDetails, updateLeaveStatus } from "../services/adminLeave.js";

const useEmployeeLeaveStore = create((set) => ({
    myLeaves: null,
    myLeavesDetails: null,
    loading: true,
    error: null,

    getMyLeaves: async () => {
        try {
            const response = await getMyLeaves()
            set({ MyLeaves: response.data.data, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useEmployeeLeaveStore }