import { create } from "zustand";
import { getMyLeaves } from "../services/employeeLeave.js";

const useEmployeeLeaveStore = create((set) => ({
    myLeaves: null,
    myLeavesDetails: null,
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
    }
}))

export { useEmployeeLeaveStore }