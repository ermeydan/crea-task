import fp from 'fastify-plugin'
import jwt, { FastifyJWTOptions } from '@fastify/jwt'

export default fp<FastifyJWTOptions>(async (fastify, opts) => {
  fastify.register(jwt, {
    secret: 'supersecret'
  })

  fastify.decorate("authenticate", async function(request: any, reply: any) {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: any;
  }
}
