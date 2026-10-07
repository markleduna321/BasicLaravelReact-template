import React from 'react';

export default function HeroSection() {
    return (
        <section 
            className="relative flex items-center justify-center text-white px-4"
            style={{ 
                minHeight: 'calc(100vh - 4rem)',
                backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                <img 
                    src="https://unpkg.com/heroicons@2.0.18/24/outline/bug-ant.svg" 
                    alt="Bug Icon" 
                    className="w-24 h-24 mb-6 invert drop-shadow-lg opacity-90" 
                />
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-md leading-tight">Stuck on a Bug?<br/>Get Peer Assistance.</h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto drop-shadow font-medium">Don't let a syntax error ruin your lab session. Submit a ticket and our peer tutors will be right with you.</p>
                <a href="#submit" className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-blue-700 hover:bg-blue-50 transition-all shadow-2xl hover:shadow-blue-400/50 transform hover:-translate-y-1 animate-bounce">
                    Request Help Now
                    <img src="https://unpkg.com/heroicons@2.0.18/24/outline/arrow-down.svg" className="w-6 h-6 ml-2" alt="Scroll down" style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(90%) saturate(2250%) hue-rotate(205deg) brightness(96%) contrast(93%)' }} />
                </a>
            </div>
        </section>
    );
}
