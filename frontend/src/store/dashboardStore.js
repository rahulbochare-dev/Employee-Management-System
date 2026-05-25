import { create } from "zustand";
import { getTotalEmployees, getOnLeaveToday, getNewJoines, getPendingLeave, getLastWeeksLeaves, getMostEmployeeCountry, getTotalPayrollThisMonth, getEmployeeGenderRatioPercent, getAverageEmployeeAge, getNewJoinesByMonth } from "../services/dashboard.js";

const useDashboardStore = create((set) => ({
    totalEmployees: null,
    onLeaveToday: null,
    newJoines: null,
    pendingLeave: null,
    lastWeeksLeaves: null,
    mostEmployeeCountry: null,
    totalPayrollThisMonth: null,
    employeeGenderRatioPercent: null,
    averageEmployeeAge: null,
    newJoinesByMonth: null,
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
            
            const lastWeeksLeavesResponse = await getLastWeeksLeaves()
            set({ lastWeeksLeaves: lastWeeksLeavesResponse.data, loading: false })
            
            const mostEmployeeCountryResponse = await getMostEmployeeCountry()
            set({ mostEmployeeCountry: mostEmployeeCountryResponse.data.data, loading: false })
            
            const totalPayrollThisMonthResponse = await getTotalPayrollThisMonth()
            set({ totalPayrollThisMonth: totalPayrollThisMonthResponse.data.data, loading: false })
            
            const employeeGenderRatioPercentResponse = await getEmployeeGenderRatioPercent()
            set({ employeeGenderRatioPercent: employeeGenderRatioPercentResponse.data.data, loading: false })
            
            const averageEmployeeAgeResponse = await getAverageEmployeeAge()
            set({ averageEmployeeAge: averageEmployeeAgeResponse.data.data[0], loading: false })
            
            const newJoinesByMonthResponse = await getNewJoinesByMonth()
            set({ newJoinesByMonth: newJoinesByMonthResponse.data.data, loading: false })

        } catch (err) {
            set({ error: err.messege, loading: false })
        }
    }
}))

export { useDashboardStore }