"use strict"

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return reply.view('layout/default')
        }
    },
    {   // Clinic Main
        method: 'GET',
        path: '/clinic',
        handler: (request, reply) => {
            return reply.view('layout/clinic/main/main', { custom: {
              style: true,
              styleNames: ['signin']
            } })
        }
    },
    {   // Clinic Login Email
        method: 'GET',
        path: '/clinic/login/email',
        handler: (request, reply) => {
            return reply.view('layout/clinic/main/login-email', { custom: {
              style: true,
              styleNames: ['signin']
            } })
        }
    },
    {   // Clinic Register
        method: 'GET',
        path: '/clinic/register',
        handler: (request, reply) => {
            return reply.view('layout/clinic/register', { custom: {
              style: true,
              styleNames: ['signin']
            } })
        }
    },
    {   // Clinic Setup
        method: 'GET',
        path: '/clinic/setup',
        handler: (request, reply) => {
            return reply.view('layout/clinic/setup', { custom: {
              style: true,
              styleNames: ['signin']
            } })
        }
    },
    {   // Clinic Dashboard
        method: 'GET',
        path: '/clinic/dashboard',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/dashboard', { custom: {
              style: true,
              styleNames: [
                'sbadmin',
                'fullcalendar',
                'dashboard'
              ],
              script: true,
              scriptNames: [
                'moment.min',
                'fullcalendar.min',
                'dashboard'
              ]
            }, topbar: {
                title: 'Dashboard Overview',
                icon: 'trip_origin'
            } })
        }
    },
    {   // Clinic Dashboard Inactive
        method: 'GET',
        path: '/clinic/dashboard/inactive',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/inactive', { custom: {
              style: true,
              styleNames: [
                'sbadmin',
                'dashboard',
                'inactive'
              ],
            }, topbar: {
                title: 'Dashboard Overview',
                icon: 'trip_origin'
            } })
        }
    },
    {   // Clinic Manage Patients / Basic Info
        method: 'GET',
        path: '/clinic/manage/patient/basic-info',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/manage-patients/patient/basic-info')
        }
    },
    {   // Clinic Appointments
        method: 'GET',
        path: '/clinic/appointments',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/appointments', { custom: {
              style: true,
              styleNames: [
                'sbadmin',
                'dashboard',
                'appointments'
              ]
            }, topbar: {
                title: 'Manage Appointments',
                icon: 'insert_invitation'
            } })
        }
    },
    {   // Clinic Appointments Add (Select Patient)
        method: 'GET',
        path: '/clinic/appointments/add/1',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/appointments/add-1', { custom: {
              style: true,
              styleNames: ['full-page-form']
            } })
        }
    },
    {   // Clinic Appointments Add (New Patient)
        method: 'GET',
        path: '/clinic/appointments/add/2',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/appointments/add-2', { custom: {
              style: true,
              styleNames: ['full-page-form']
            } })
        }
    },
    {   // Clinic Appointments Add (New Appointment)
        method: 'GET',
        path: '/clinic/appointments/add/3',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/appointments/add-3', { custom: {
              style: true,
              styleNames: ['full-page-form']
            } })
        }
    },
    {   // Clinic Patients (Manage Patients)
        method: 'GET',
        path: '/clinic/patients',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/patients/patients', { custom: {
              style: true,
              styleNames: [
                'sbadmin',
                'dashboard'
              ]
            }, topbar: {
                title: 'Manage Patients',
                icon: 'people'
            } })
        }
    },
    {   // Clinic Patient Basic Info
        method: 'GET',
        path: '/clinic/patients/basic-info',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/patients/basic-info')
        }
    },
    {   // Clinic Patient Appointment History
        method: 'GET',
        path: '/clinic/patients/appointment-history',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/patients/appointment-history')
        }
    },
    {   // Clinic Patient Prescription No Data 1
        method: 'GET',
        path: '/clinic/patients/prescriptions/1',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/patients/prescriptions/no-data-1')
        }
    },
    {   // Clinic Add Prescription
        method: 'GET',
        path: '/clinic/prescriptions/add',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/prescriptions/add')
        }
    },
    {   // Clinic Patient Prescription No Data 2
        method: 'GET',
        path: '/clinic/patients/prescriptions/2',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/patients/prescriptions/no-data-2')
        }
    },
    {   // Clinic Treatments
        method: 'GET',
        path: '/clinic/treatments',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/treatments/treatments', { custom: {
              style: true,
              styleNames: [
                'sbadmin',
                'dashboard'
              ]
            }, topbar: {
                title: 'Manage Services',
                icon: ''
            } })
        }
    },
    {   // Clinic New Treatments
        method: 'GET',
        path: '/clinic/treatments/new-treatments',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/treatments/new-treatments')
        }
    },
    {   // Clinic New Treatments Category
        method: 'GET',
        path: '/clinic/treatments/new-treatments/category',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/treatments/new-category')
        }
    },
    {   // Clinic Treatments New Category
        method: 'GET',
        path: '/clinic/treatments/new-category',
        handler: (request, reply) => {
            return reply.view('layout/clinic/admin/treatments/new-treatment/category')
        }
    },
    {
        method: 'GET',
        path: '/{path*}',
        handler: (request, reply) => {
            return reply.view('404').code(404)
        }
    }
]
