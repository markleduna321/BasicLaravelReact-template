import React from 'react';

export default function NavSection({ pendingCount }) {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm border-b border-gray-200/60 transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">Code Assist</span>
                </div>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex gap-6">
                        <a href="#hero" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wider">Home</a>
                        <a href="#table-queue" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wider">All Tickets</a>
                        <a href="#submit" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wider">Submit & Queue</a>
                    </nav>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 px-4 py-1.5 rounded-full font-bold text-sm shadow-sm border border-amber-200/50">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                        </span>
                        {pendingCount} Pending
                    </div>
                </div>
            </div>
        </header>
    );
}
