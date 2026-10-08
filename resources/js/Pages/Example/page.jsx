import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import NavSection from './_sections/NavSection';
import HeroSection from './_sections/HeroSection';
import FormSection from './_sections/FormSection';
import ContentSection from './_sections/ContentSection';
import NewTicketsSection from './_sections/NewTicketsSection';
import FooterSection from './_sections/FooterSection';

export default function CampusHelpdeskSPA() {
    const [requests, setRequests] = useState([]);
    const [formData, setFormData] = useState({
        student_name: '',
        station_number: '',
        topic: 'HTML/CSS',
        issue_summary: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState('');

    const pendingCount = requests.filter(r => r.status === 'Pending').length;

    const fetchRequests = async () => {
        try {
            const res = await fetch('/api/tutoring-requests');
            const data = await res.json();
            setRequests(data);
        } catch (error) {
            console.error('Error fetching requests', error);
        }
    };

    useEffect(() => {
        fetchRequests();
        const interval = setInterval(fetchRequests, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmissionError('');
        try {
            const res = await fetch('/api/tutoring-requests', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await res.json();
            if (!res.ok) {
                setSubmissionError(result.message || 'Unable to submit your ticket. Please try again.');
                return;
            }

            setFormData({
                student_name: '',
                station_number: '',
                topic: 'HTML/CSS',
                issue_summary: ''
            });
            fetchRequests();
        } catch (error) {
            console.error('Submission failed', error);
            setSubmissionError('Unable to submit your ticket. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleToggleStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'Pending' ? 'Resolved' : 'Pending';
        try {
            const res = await fetch(`/api/tutoring-requests/${id}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) {
                fetchRequests();
            }
        } catch (error) {
            console.error('Update failed', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans scroll-smooth">
            <Head title="Campus IT Helpdesk & Peer Tutoring" />
            
            <NavSection pendingCount={pendingCount} />
            <div id="hero">
                <HeroSection />
            </div>

            <section id="table-queue" className="w-full bg-white border-b border-gray-200 py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
                {/* Decorative subtle background element */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
                    <ContentSection 
                        requests={requests} 
                        handleToggleStatus={handleToggleStatus} 
                    />
                </div>
            </section>

            <section id="submit" className="w-full bg-gray-50 py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center relative">
                {/* Decorative subtle background element */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
                        <FormSection 
                            formData={formData} 
                            handleInputChange={handleInputChange} 
                            handleSubmit={handleSubmit} 
                            submitting={submitting} 
                            submissionError={submissionError}
                        />
                        
                        <div className="lg:col-span-8">
                            <NewTicketsSection 
                                requests={requests} 
                                handleToggleStatus={handleToggleStatus} 
                            />
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
}
