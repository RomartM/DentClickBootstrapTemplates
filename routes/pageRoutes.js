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
              styleName: 'signin'
            } })
        }
    },
    {   // Clinic Login Email
        method: 'GET',
        path: '/clinic/login/email',
        handler: (request, reply) => {
            return reply.view('layout/clinic/main/login-email', { custom: {
              style: true,
              styleName: 'signin'
            } })
        }
    },
    {   // Clinic Register
        method: 'GET',
        path: '/clinic/register',
        handler: (request, reply) => {
            return reply.view('layout/clinic/register', { custom: {
              style: true,
              styleName: 'signin'
            } })
        }
    },
    {   // Clinic Setup
        method: 'GET',
        path: '/clinic/setup',
        handler: (request, reply) => {
            return reply.view('layout/clinic/setup', { custom: {
              style: true,
              styleName: 'signin'
            } })
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
