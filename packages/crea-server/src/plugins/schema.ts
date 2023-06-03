import fp from 'fastify-plugin'
import anySchema from '@fastify/any-schema'

export default fp(async (fastify) => {
  fastify.register(anySchema, {
    schemas: [{
      $id: 'index',
      type: 'array',
      items: {
        oneOf: [
          {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              description: { type: 'string' },
              price: { type: 'string' },
              score: { type: 'number' },
              currency: { type: 'string' },
              images: { type: 'array' },
            }
          }
        ]
      }
    }, {
      $id: 'detail',
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        price: { type: 'string' },
        score: { type: 'number' },
        currency: { type: 'string' },
        images: { type: 'array' },
        information: { type: 'string' },
        arrivalDate: { type: 'string' },
        commentsCount: { type: 'number' }
      }
    }]
  })
})
