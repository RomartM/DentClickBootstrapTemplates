"use strict"

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return reply.view('layout/default')
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
