export const navItems = [
    {
        name: "Home",
        path: ""
    },
    {
        name: "Stations",
        path: "charging-stations"
    },
    {
        name: "Revenue",
        path: "revenue"
    },
    {
        name: "Notifications",
        path: "notifications"
    },
    {
        name: "Reports",
        path: "reports"
    }
]

export const stationsInfo = [
    {
        title: "Stations",
        amount: 5,
    },
    {
        title: "Outlets",
        amount: 10,
    },
]

export const usageInfo = [
    {
        title: "In use",
        amount: 4,
    },
    {
        title: "Not in use",
        amount: 1,
    },
]

export const consumptionInfo = {
    consumedKwh: 3049,
    percentageUsageChange: 3
}
export const incomeInfo = {
    earned: 7256,
    percentageUsageChange: 12
}

export const chargingStations = [
    {
        name: "Gunsel EV Charger Mark I - Type 1",
        id: "ADJKWQ8NKWSD8921MS",
        outlets: [
            {
                name: 'Charger No. 1',
                status: { name: 'In Use', code: 'IN_USE' },
                totalSessions: 397,
                totalUniqueUsers: 109,
                totalChargeTime: '102h 36min',
            },
            {
                name: 'Charger No. 2',
                status: { name: 'Available', code: 'AVAILABLE' },
                totalSessions: 286,
                totalUniqueUsers: 180,
                totalChargeTime: '251h 22min',
            },
        ]
    },
    {
        name: "Gunsel EV Charger Mark I - Type 2",
        id: "3A2LB7TZ5Q8CWXDK6N",
        outlets: [
            {
                name: 'Charger No. 1',
                status: { name: 'Out of service', code: 'OUT_OF_SERVICE' },
                totalSessions: 361,
                totalUniqueUsers: 348,
                totalChargeTime: '204h 57min',
            },
            {
                name: 'Charger No. 2',
                status: { name: 'In Use', code: 'IN_USE' },
                totalSessions: 361,
                totalUniqueUsers: 335,
                totalChargeTime: '178h 53min',
            },
        ]
    },
    {
        name: "Gunsel EV Charger Mark I - Type 1",
        id: "J9V1BR6P4H2YZMFT8W",
        outlets: [
            {
                name: 'Charger No. 1',
                status: { name: 'In Use', code: 'IN_USE' },
                totalSessions: 222,
                totalUniqueUsers: 126,
                totalChargeTime: '172h 57min',
            },
            {
                name: 'Charger No. 2',
                status: { name: 'Available', code: 'AVAILABLE' },
                totalSessions: 275,
                totalUniqueUsers: 231,
                totalChargeTime: '166h 9min',
            },
        ]
    },
    {
        name: "Gunsel EV Charger Mark I - Type 1",
        id: "5M3NCD8W9E7PQXTL1J",
        outlets: [
            {
                name: 'Charger No. 1',
                status: { name: 'In Use', code: 'IN_USE' },
                totalSessions: 454,
                totalUniqueUsers: 160,
                totalChargeTime: '113h 46min',
            },
            {
                name: 'Charger No. 2',
                status: { name: 'In Use', code: 'IN_USE' },
                totalSessions: 403,
                totalUniqueUsers: 223,
                totalChargeTime: '242h 57min',
            },
        ]
    },
]
