import { create } from "zustand";
import { getTotalEmployees, getOnLeaveToday, getNewJoines, getPendingLeave } from "../services/dashboard.js";

const useDashboardStore = create((set) => ({
    totalEmployees: null,
    onLeaveToday: null,
    newJoines: null,
    pendingLeave: null,
    loading: true,
    error: null,

    getKPIData: async () => {
        try {
            const totalEmployeesResponse = await getTotalEmployees()
            set({ totalEmployees: totalEmployeesResponse.data, loading: false })
            
            const onLeaveTodayResponse = await getOnLeaveToday()
            set({ onLeaveToday: onLeaveTodayResponse.data, loading: false })
            
            const newJoinesResponse = await getNewJoines()
            set({ newJoines: newJoinesResponse.data, loading: false })
            
            const pendingLeaveResponse = await getPendingLeave()
            set({ pendingLeave: pendingLeaveResponse.data, loading: false })
        } catch (err) {
            set({ error: err.messege, loading: false })
        }
    }
}))

export { useDashboardStore }