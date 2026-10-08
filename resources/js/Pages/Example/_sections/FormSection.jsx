import React from 'react';

export default function FormSection({ formData, handleInputChange, handleSubmit, submitting, submissionError }) {
    return (
        <div className="lg:col-span-4" id="submit">
            <div className="bg-purple-300 rounded-2xl shadow-xl overflow-hidden border border-gray-100 sticky top-24">
                <div className="bg-violet-900 p-3 ">
                    <h2 className="text-xl font-bold bg-purple-800-fit shadow-lg bg-violet-900 text-white">
                        Submit Ticket
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input required type="text" name="student_name" value={formData.student_name} onChange={handleInputChange} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900" placeholder="e.g. Jane Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Workstation</label>
                        <input required type="text" name="station_number" value={formData.station_number} onChange={handleInputChange} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900" placeholder="e.g. PC-18 (Lab B)" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Topic</label>
                        <select name="topic" value={formData.topic} onChange={handleInputChange} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white text-gray-900">
                            <option value="HTML/CSS">HTML/CSS</option>
                            <option value="JavaScript/React">JavaScript/React</option>
                            <option value="PHP/Laravel">PHP/Laravel</option>
                            <option value="Git/CLI">Git/CLI</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Issue Summary</label>
                        <textarea required name="issue_summary" value={formData.issue_summary} onChange={handleInputChange} rows="3" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-900" placeholder="Briefly describe your problem..."></textarea>
                    </div>

                    <button disabled={submitting} type="submit" className="w-full py-3 tracking-wider px-4 bg-violet-600 hover:bg-violet-800 disabled:bg-violet-400 text-white font-bold rounded-lg shadow-md transition-colors">

                    {submissionError && (
                        <p role="alert" className="text-sm text-red-600">{submissionError}</p>
                    )}
                    <button disabled={submitting} type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-lg shadow-md transition-colors">
>>>>>>> d800ff7cae53535b6dc2910865ef7df19c08599a
                        {submitting ? 'Submitting...' : 'Submit to Queue'}
                    </button>
                </form>
            </div>
        </div>
    );
}
