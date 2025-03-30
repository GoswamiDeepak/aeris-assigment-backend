// import vehicleEvents from '../mock-data/vehicleEvent.json' assert { type: 'json' };

const vehicleEvents = [
    {
        vehicleId: 'VH1001',
        eventType: 'Ignition On',
        speed: 0,
        location: {
            latitude: 37.7749,
            longitude: -122.4194,
        },
        engineTemp: 0,
        odometer: 12345,
        fuelLevel: 85,
        batteryStatus: 'Normal',
        tirePressure: {
            frontLeft: 32,
            frontRight: 31,
            rearLeft: 30,
            rearRight: 32,
        },
        isActive: false,
        timestamp: '2023-05-15T08:30:00Z',
    },
    {
        vehicleId: 'VH1002',
        eventType: 'Time Interval',
        speed: 45,
        location: {
            latitude: 37.7765,
            longitude: -122.4178,
        },
        engineTemp: 85,
        odometer: 12345,
        fuelLevel: 60,
        batteryStatus: 'Normal',
        tirePressure: {
            frontLeft: 32,
            frontRight: 31,
            rearLeft: 30,
            rearRight: 32,
        },
        isActive: true,
        timestamp: '2023-05-15T08:35:00Z',
    },
    {
        vehicleId: 'VH1003',
        eventType: 'Ignition Off',
        speed: 0,
        location: {
            latitude: 37.7812,
            longitude: -122.4111,
        },
        engineTemp: 20,
        odometer: 12368,
        fuelLevel: 78,
        batteryStatus: 'Normal',
        tirePressure: {
            frontLeft: 32,
            frontRight: 31,
            rearLeft: 30,
            rearRight: 32,
        },
        isActive: true,
        timestamp: '2023-05-15T09:15:00Z',
    },
    {
        vehicleId: 'VH1004',
        eventType: 'Ignition On',
        speed: 0,
        location: {
            latitude: 34.0522,
            longitude: -118.2437,
        },
        engineTemp: 0,
        odometer: 45678,
        fuelLevel: 100,
        batteryStatus: 'Excellent',
        tirePressure: {
            frontLeft: 32,
            frontRight: 31,
            rearLeft: 30,
            rearRight: 32,
        },
        isActive: false,
        timestamp: '2023-05-15T10:30:00Z',
    },
];
export class VehicleController {
    getAllEvents = (req, res, next) => {
        let data = vehicleEvents;
        try {
            const { eventType, startTime, endTime, vehicleId, isActive } = req.query;

            if (eventType) {
                data = vehicleEvents.filter((event) => event.eventType === eventType);
            }

            if (isActive) {
                data = vehicleEvents.filter((event) => (isActive === 'false' ? !event.isActive : event.isActive));
            }

            if (vehicleId) {
                data = vehicleEvents.filter((event) => event.vehicleId === vehicleId);
            }

            if (startTime && endTime) {
                data = vehicleEvents.filter((event) => {
                    const eventTime = new Date(event.timestamp).getTime();
                    return eventTime >= new Date(start).getTime() && eventTime <= new Date(end).getTime();
                });
            }

            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Something went wrong!' });
        }
    };
}
