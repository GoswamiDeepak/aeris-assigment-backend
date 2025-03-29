import vehicleEvents from '../mock-data/vehicleEvent.json' assert { type: 'json' };

export class VehicleController {
    getAllEvents = (req, res, next) => {
        res.json(vehicleEvents);
    };

    getEventByType = (req, res, next) => {
        /**
         * filteration by eventType, startTime, endTime
         */
        const { eventType, startTime, endTime } = req.query;
        let data = vehicleEvents;
        if (eventType) {
            data = vehicleEvents.filter((event) => event.eventType === eventType);
            console.log(data);
        }
        
        // if (startTime && endTime) {
        //     data = vehicleEvents.filter(
        //         (event) => new Date(event.timestamp) >= new Date(startTime) && new Date(event.timestamp) <= new Date(endTime)
        //     );
        // }

        res.json(data);
    };
}
