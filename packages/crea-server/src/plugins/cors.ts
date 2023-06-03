import fp from 'fastify-plugin'
import cors from '@fastify/cors'

export default fp(async (fastify) => {
  fastify.register(cors, {
    hook: 'preHandler',
    delegator: (req: any, callback) => {
      const corsOptions = {
        // This is NOT recommended for production as it enables reflection exploits
        origin: true
      };

      // do not include CORS headers for requests from localhost
      if (/^localhost$/m.test(req.headers.origin)) {
        corsOptions.origin = false
      }

      // callback expects two parameters: error and options
      callback(null, corsOptions)
    },
  })
})
