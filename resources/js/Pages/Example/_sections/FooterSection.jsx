import React from 'react';

export default function FooterSection() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-white font-bold mb-4">Lab Tutoring Schedule</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Mon-Wed: 9:00 AM - 5:00 PM</li>
                        <li>Thu-Fri: 10:00 AM - 6:00 PM</li>
                        <li>Weekends: Closed</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Code of Conduct</h4>
                    <p className="text-sm leading-relaxed">
                        Be respectful to peer tutors and fellow students. Provide clear descriptions of your issues and attempt to solve them before submitting a ticket.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4">Code Assist Team</h4>
                    <p className="text-sm">
                        Built with ❤️ by the Campus IT Department.<br/>
                        <a href="#" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">Report an issue</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
