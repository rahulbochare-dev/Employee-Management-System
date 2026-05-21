import { create } from "zustand";
import { getLeaves } from "../services/adminLeave.js";

const useAdminLeaveStore = create((set) => ({
    leaves: null,
    loading: true,
    error: null,

    getLeaves: async () => {
        try {
            const response = await getLeaves()
            set({leaves: response.data.data, loading: false })
            return response.data
        } catch (err) {
            set({error: err, loading: false})
            return err
        }
    }
}))

export { useAdminLeaveStore }