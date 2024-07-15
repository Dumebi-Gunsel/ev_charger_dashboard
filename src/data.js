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


export const chargingSessions = [
    {
        id: '10001',
        time: '8:27am',
        duration: '00:35:30',
        chargerType: {
            name: "Gunsel EV Charger Mark I - Type 1",
            id: "5M3NCD8W9E7PQXTL1J",
        },
        stationType: 'Commercial',
        powerConsumed: '7.9kW',
        averagePowerConsumption: {
            value: '7.7kw/h',
            percentage: 65,
        },
        costPerKwh: {
            value: '$0.20',
            rate: 'Day rate',
        },
        profit: '$1.6'
    },
    {
        id: '10002',
        time: '9:30am',
        duration: '00:40:15',
        chargerType: {
            name: "Gunsel EV Charger Mark I - Type 2",
            id: "3A2LB7TZ5Q8CWXDK6N",
        },
        stationType: 'Private',
        powerConsumed: '8.2kW',
        averagePowerConsumption: {
            value: '8.0kw/h',
            percentage: 70,
        },
        costPerKwh: {
            value: '$0.22',
            rate: 'Night rate',
        },
        profit: '$1.8'
    },
    {
        id: '10003',
        time: '11:45am',
        duration: '00:50:20',
        chargerType: {
            name: "Gunsel EV Charger Mark II - Type 1",
            id: "J9V1BR6P4H2YZMFT8W",
        },
        stationType: 'Commercial',
        powerConsumed: '6.5kW',
        averagePowerConsumption: {
            value: '6.4kw/h',
            percentage: 55,
        },
        costPerKwh: {
            value: '$0.18',
            rate: 'Day rate',
        },
        profit: '$1.4'
    },
    {
        id: '10004',
        time: '1:20pm',
        duration: '00:25:10',
        chargerType: {
            name: "Gunsel EV Charger Mark I - Type 1",
            id: "5M3NCD8W9E7PQXTL1J",
        },
        stationType: 'Private',
        powerConsumed: '7.0kW',
        averagePowerConsumption: {
            value: '6.9kw/h',
            percentage: 60,
        },
        costPerKwh: {
            value: '$0.19',
            rate: 'Night rate',
        },
        profit: '$1.5'
    },
    {
        id: '10005',
        time: '3:50pm',
        duration: '00:35:45',
        chargerType: {
            name: "Gunsel EV Charger Mark I - Type 2",
            id: "3A2LB7TZ5Q8CWXDK6N",
        },
        stationType: 'Commercial',
        powerConsumed: '8.8kW',
        averagePowerConsumption: {
            value: '8.5kw/h',
            percentage: 75,
        },
        costPerKwh: {
            value: '$0.21',
            rate: 'Day rate',
        },
        profit: '$1.7'
    },
    {
        id: '10006',
        time: '5:05pm',
        duration: '00:55:00',
        chargerType: {
            name: "Gunsel EV Charger Mark II - Type 1",
            id: "J9V1BR6P4H2YZMFT8W",
        },
        stationType: 'Private',
        powerConsumed: '6.9kW',
        averagePowerConsumption: {
            value: '6.8kw/h',
            percentage: 68,
        },
        costPerKwh: {
            value: '$0.20',
            rate: 'Night rate',
        },
        profit: '$1.9'
    },
    {
        id: '10007',
        time: '6:30pm',
        duration: '00:45:30',
        chargerType: {
            name: "Gunsel EV Charger Mark I - Type 1",
            id: "5M3NCD8W9E7PQXTL1J",
        },
        stationType: 'Commercial',
        powerConsumed: '7.5kW',
        averagePowerConsumption: {
            value: '7.3kw/h',
            percentage: 72,
        },
        costPerKwh: {
            value: '$0.23',
            rate: 'Day rate',
        },
        profit: '$1.6'
    }
];


const locations = ['Lefkosa', 'Girne', 'Magusa', 'Iskele', 'Guzelyurt', 'Lefke']
const chargerTypes = ["Gunsel EV Charger Mark II - Type 2", "Gunsel EV Charger Mark II - Type 1", "Gunsel EV Charger Mark I - Type 2", "Gunsel EV Charger Mark I - Type 1"]


// const handleChargerTypesChange = (event) => {
//     const { value } = event.target;
//     const { numberOfOutlets, chargerTypes } = formData;

//     let updatedChargerTypes = [...chargerTypes];

//     if (updatedChargerTypes.includes(value)) {
//       updatedChargerTypes = updatedChargerTypes.filter(type => type !== value);
//     } else {
//       if (updatedChargerTypes.length < numberOfOutlets) {
//         updatedChargerTypes.push(value);
//       } else {
//         updatedChargerTypes.shift();
//         updatedChargerTypes.push(value);
//       }
//     }

//     setFormData({ ...formData, chargerTypes: updatedChargerTypes });
//   };
