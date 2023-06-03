import { test } from 'tap'
import Fastify from 'fastify'
import JWT from '../../src/plugins/jwt'

test('jwt works standalone', async (t) => {
  const fastify = Fastify()
  void fastify.register(JWT)
  await fastify.ready()

  t.type(fastify.jwt, 'object')
})
