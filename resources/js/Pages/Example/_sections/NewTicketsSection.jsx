import React from 'react';

export default function NewTicketsSection({ requests, handleToggleStatus }) {
    // Filter for pending tickets and slice to show a compact list
    const newTickets = requests.filter(r => r.status === 'Pending').slice(0, 4);

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6 shrink-0">
                <h2 className="text-2xl font-bold text-gray-900">New Tickets</h2>
                <span className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Live Updates
                </span>
            </div>
            
            {newTickets.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center text-gray-500 shrink-0">
                    No new tickets right now. Everyone is coding happily!
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {newTickets.map(request => (
                        <div key={request.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className={`absolute top-0 left-0 w-1 h-full ${request.status === 'Pending' ? 'bg-amber-400' : 'bg-emerald-500'}`}></div>
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">{request.student_name}</h3>
                                    <span className="text-sm text-gray-500">{request.station_number}</span>
                                </div>
                                <button 
                                    onClick={() => handleToggleStatus(request.id, request.status)}
                                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide cursor-pointer transition-colors ${
                                        request.status === 'Pending' 
                                        ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' 
                                        : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                    }`}
                                >
                                    {request.status}
                                </button>
                            </div>
                            <div className="mb-3">
                                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded mb-2">
                                    {request.topic}
                                </span>
                                <p className="text-sm text-gray-700 line-clamp-2">
                                    {request.issue_summary}
                                </p>
                            </div>
                            <div className="text-xs text-gray-400 mt-4">
                                Ticket #{request.id} • {new Date(request.created_at).toLocaleTimeString()}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
