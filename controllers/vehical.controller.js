import vehicleEvents from '../mock-data/vehicleEvent.json' assert { type: 'json' };

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
