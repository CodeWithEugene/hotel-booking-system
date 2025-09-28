
import React from 'react';
import { HousekeepingTask, HousekeepingTaskStatus } from '../types';

const getStatusColor = (status: HousekeepingTaskStatus) => {
    switch (status) {
        case HousekeepingTaskStatus.Pending: return 'text-status-yellow';
        case HousekeepingTaskStatus.InProgress: return 'text-status-blue';
        case HousekeepingTaskStatus.Completed: return 'text-status-green';
        default: return 'text-gray-400';
    }
};

const getPriorityClasses = (priority: 'High' | 'Medium' | 'Low') => {
    switch (priority) {
        case 'High': return 'bg-red-500/20 text-red-300';
        case 'Medium': return 'bg-yellow-500/20 text-yellow-300';
        case 'Low': return 'bg-green-500/20 text-green-300';
        default: return 'bg-gray-500/20 text-gray-300';
    }
};

interface HousekeepingViewProps {
    tasks: HousekeepingTask[];
    onUpdateTaskStatus: (taskId: string, newStatus: HousekeepingTaskStatus) => void;
}

const HousekeepingView: React.FC<HousekeepingViewProps> = ({ tasks, onUpdateTaskStatus }) => {
    return (
        <div className="p-6">
            <div className="bg-brand-secondary shadow-lg rounded-xl overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-brand-text">
                    <thead className="border-b border-brand-primary font-semibold text-brand-light">
                        <tr>
                            <th scope="col" className="px-6 py-4">Room No.</th>
                            <th scope="col" className="px-6 py-4">Task</th>
                            <th scope="col" className="px-6 py-4">Assigned To</th>
                            <th scope="col" className="px-6 py-4">Status</th>
                            <th scope="col" className="px-6 py-4 text-center">Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task: HousekeepingTask) => (
                            <tr key={task.id} className="border-b border-brand-primary transition duration-300 ease-in-out hover:bg-brand-primary">
                                <td className="whitespace-nowrap px-6 py-4 font-bold text-white text-base">{task.roomNumber}</td>
                                <td className="whitespace-nowrap px-6 py-4">{task.task}</td>
                                <td className="whitespace-nowrap px-6 py-4">{task.assignedTo}</td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <select
                                        value={task.status}
                                        onChange={(e) => onUpdateTaskStatus(task.id, e.target.value as HousekeepingTaskStatus)}
                                        className={`bg-transparent border-0 font-semibold focus:ring-0 cursor-pointer p-0 ${getStatusColor(task.status)}`}
                                    >
                                        {Object.values(HousekeepingTaskStatus).map(status => (
                                            <option key={status} value={status} className="bg-brand-primary font-sans">{status}</option>
                                        ))}
                                    </select>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-center">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPriorityClasses(task.priority)}`}>
                                        {task.priority}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HousekeepingView;