import React from 'react';

export default function HeroSection() {
    return (
        <section 
            className="relative flex items-center justify-center text-white px-4"
            style={{ 
                minHeight: 'calc(100vh - 4rem)',
                backgroundImage: 'url("/images/newhero.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-l from-violet-900/90 via-purple-800/80 to-fushcia-700/70"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                <img 
                    src="https://unpkg.com/heroicons@2.0.18/24/outline/bug-ant.svg" 
                    alt="Bug Icon" 
                    className="w-24 h-24 mb-6 invert drop-shadow-lg opacity-90" 
                />
<<<<<<< HEAD

                <p className='uppercase tracking-wider mb-6 text-transparent bg-gradient-to-r from-cyan-700 via-white to-purple-500 bg-clip-text font-bold'>
                    campus it help desk & peer tutoring
                </p>
                <h1 className="text-6xl md:text-7xl font-bold mb-2 tracking-tight drop-shadow-md leading-tight">
                    Stuck on a 
                    <span className='text-cyan-200'> Bug?</span>
                </h1>

                <h2 className="text-5xl md:text-6xl font-bold mb-4 ">
                    Get Assistance in Real Time.
                </h2>

                <p className="text-lg md:text-lg mt-4 text-slate-300 mb-10 max-w-2xl mx-auto drop-shadow font-medium">
                    Submit your tech problems and get help from fellow students.
                </p>
                <a href="#submit" className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-purple-700 hover:bg-purple-400/80 transition-all shadow-2xl hover:shadow-purple-400/50 transform hover:-translate-y-1 animate-bounce">
                    Get Assistance <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
=======
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-md leading-tight">Stuck on a Bug?<br/>Get Peer Assistance.</h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto drop-shadow font-medium">Don't let a syntax error ruin your lab session. Submit a ticket and our peer tutors will be right with you.</p>
                <a href="#submit" className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-white text-blue-700 hover:bg-blue-50 transition-all shadow-2xl hover:shadow-blue-400/50 transform hover:-translate-y-1 animate-bounce">
                    Request Help Nowhhjfjhfj
                    <img src="https://unpkg.com/heroicons@2.0.18/24/outline/arrow-down.svg" className="w-6 h-6 ml-2" alt="Scroll down" style={{ filter: 'brightness(0) saturate(100%) invert(26%) sepia(90%) saturate(2250%) hue-rotate(205deg) brightness(96%) contrast(93%)' }} />
>>>>>>> d800ff7cae53535b6dc2910865ef7df19c08599a
                </a>
            </div>
        </section>
    );
}
