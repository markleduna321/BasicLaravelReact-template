import React, { useState, useMemo } from 'react';

export default function ContentSection({ requests, handleToggleStatus }) {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [topicFilter, setTopicFilter] = useState('All');

    const filteredRequests = useMemo(() => {
        return requests.filter(r => {
            const matchSearch = r.student_name.toLowerCase().includes(search.toLowerCase()) || 
                                r.issue_summary.toLowerCase().includes(search.toLowerCase()) ||
                                r.station_number.toLowerCase().includes(search.toLowerCase());
            const matchStatus = statusFilter === 'All' || r.status === statusFilter;
            const matchTopic = topicFilter === 'All' || r.topic === topicFilter;
            return matchSearch && matchStatus && matchTopic;
        });
    }, [requests, search, statusFilter, topicFilter]);

    return (
        <div className="w-full flex flex-col h-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">All Queue Tickets</h2>
                
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    <div className="relative flex-grow lg:flex-grow-0">
                        <input 
                            type="text" 
                            placeholder="Search tickets..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full lg:w-64 pl-10 pr-4 py-2.5 bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl text-sm transition-all"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    
                    <select 
                        value={statusFilter} 
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="py-2.5 px-4 bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl text-sm font-semibold text-gray-700 transition-all cursor-pointer"
                    >
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                    </select>

                    <select 
                        value={topicFilter} 
                        onChange={(e) => setTopicFilter(e.target.value)}
                        className="py-2.5 px-4 bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl text-sm font-semibold text-gray-700 transition-all cursor-pointer"
                    >
                        <option value="All">All Topics</option>
                        <option value="HTML/CSS">HTML/CSS</option>
                        <option value="JavaScript/React">JavaScript/React</option>
                        <option value="PHP/Laravel">PHP/Laravel</option>
                        <option value="Git/CLI">Git/CLI</option>
                    </select>
                </div>
            </div>
            
            <div className="overflow-hidden border border-gray-100 rounded-2xl flex-grow flex flex-col">
                <div className="overflow-x-auto overflow-y-auto max-h-[55vh] custom-scrollbar flex-grow bg-white">
                    <table className="min-w-full divide-y divide-gray-100">
                        <thead className="bg-gray-50 sticky top-0 z-10">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50/90 backdrop-blur">Student Name</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50/90 backdrop-blur">Station</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50/90 backdrop-blur">Topic</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50/90 backdrop-blur">Issue Summary</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50/90 backdrop-blur">Status</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50/90 backdrop-blur">Time</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {filteredRequests.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-16 text-center text-gray-400 font-medium">
                                        No tickets found matching your filters.
                                    </td>
                                </tr>
                            ) : (
                                filteredRequests.map(request => (
                                    <tr key={request.id} className="hover:bg-blue-50/50 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{request.student_name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                                            {request.station_number}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg shadow-sm border border-gray-200/50">
                                                {request.topic}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate font-medium" title={request.issue_summary}>
                                            {request.issue_summary}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button 
                                                onClick={() => handleToggleStatus(request.id, request.status)}
                                                className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider cursor-pointer transition-all transform hover:scale-105 active:scale-95 shadow-sm border ${
                                                    request.status === 'Pending' 
                                                    ? 'bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200' 
                                                    : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200'
                                                }`}
                                            >
                                                {request.status}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-medium">
                                            {new Date(request.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
