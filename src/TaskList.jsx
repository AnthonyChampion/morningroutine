import React, { useState } from 'react';

export default function TaskList() {
    const tasks = [
        { name: 'Wake up', duration: 10 },
        { name: 'Shower', duration: 15 },
        { name: 'End of shower', duration: 5 },
        { name: 'Making curls', duration: 15 },
        { name: 'Make-up', duration: 20 },
        { name: 'Breakfast', duration: 30 },
        { name: 'Do whatever', duration: 20 },
        { name: 'Dry', duration: 30 },
        { name: 'Go', duration: 0 }
    ];

    const [selectedHour, setSelectedHour] = useState('08');
    const [selectedMinute, setSelectedMinute] = useState('00');

    const hours = ['08', '09', '10', '11'];
    const quarters = ['00', '15', '30', '45'];

    const handleHourChange = (hour) => {
        setSelectedHour(hour);
    };

    const handleMinuteChange = (minute) => {
        setSelectedMinute(minute);
    };

    const calculateWakeUpTime = () => {
        const hour = parseInt(selectedHour, 10);
        const minute = parseInt(selectedMinute, 10);

        let wakeUpHour = hour - 2;
        let wakeUpMinute = minute - 55;

        if (wakeUpMinute < 0) {
            wakeUpMinute += 60;
            wakeUpHour -= 1;
        }

        if (wakeUpHour < 0) {
            wakeUpHour += 24;
        }

        return {
            hour: String(wakeUpHour).padStart(2, '0'),
            minute: String(wakeUpMinute).padStart(2, '0')
        };
    };

    const calculateTaskTimes = () => {
        const times = [];
        const wakeUpTime = calculateWakeUpTime();
        let currentHour = parseInt(wakeUpTime.hour, 10);
        let currentMinute = parseInt(wakeUpTime.minute, 10);

        for (const task of tasks) {
            const startTime = { hour: currentHour, minute: currentMinute };
            const endTime = { ...startTime };

            // Add the duration of the current task
            endTime.minute += task.duration;
            if (endTime.minute >= 60) {
                endTime.hour += Math.floor(endTime.minute / 60);
                endTime.minute = endTime.minute % 60;
            }

            // Ensure hour wraps around after 24
            endTime.hour = endTime.hour % 24;

            times.push({
                task: task.name,
                start: `${String(startTime.hour).padStart(2, '0')}:${String(startTime.minute).padStart(2, '0')}`,
                end: `${String(endTime.hour).padStart(2, '0')}:${String(endTime.minute).padStart(2, '0')}`
            });

            // Update the current time to the end time of the current task
            currentHour = endTime.hour;
            currentMinute = endTime.minute;
        }

        return times;
    };

    const taskTimes = calculateTaskTimes();

    return (
        <div className="w-[80%] p-6 mt-4 bg-white shadow-lg rounded-md">
            <h1 className="text-black font-bold text-xl mb-4">Start of Classes</h1>

            <div className="mb-6">
                <h2 className="text-gray-700 mb-2">Select Hour:</h2>
                <div className="grid grid-cols-4 gap-2">
                    {hours.map((hour) => (
                        <button
                            key={hour}
                            onClick={() => handleHourChange(hour)}
                            className={`border border-gray-300 rounded-md p-2 text-lg font-semibold ${selectedHour === hour ? 'bg-yellow-600 text-white' : 'bg-white text-black hover:bg-blue-100'}`}
                        >
                            {hour}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-gray-700 mb-2">Select Minute:</h2>
                <div className="grid grid-cols-4 gap-2">
                    {quarters.map((minute) => (
                        <button
                            key={minute}
                            onClick={() => handleMinuteChange(minute)}
                            className={`border border-gray-300 rounded-md p-2 text-lg font-semibold ${selectedMinute === minute ? 'bg-yellow-600 text-white' : 'bg-white text-black hover:bg-blue-100'}`}
                        >
                            {minute}
                        </button>
                    ))}
                </div>
            </div>

            <ul className="space-y-1 font-semibold">
                {taskTimes.map(({ task, start, end }, index) => (
                    <li key={index} className="text-gray-700 flex justify-between items-center w-[95%]">
                        <span>{task}</span>
                        <span className="ml-4 text-gray-600 font-semibold">
                            {start} - {end}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
