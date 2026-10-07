import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React from 'react'

export default function StudentPage() {
  return (
    <AuthenticatedLayout>
        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        Student Page
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}
