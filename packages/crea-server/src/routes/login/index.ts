import { FastifyPluginAsync } from "fastify"
// import { faker } from '@faker-js/faker';

const user = {
  username: 'user',
  password: 'user123',
  firstName: 'John',
  lastName: 'Doe',
}

const login: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/', async function (request: any, reply) {
    try {
      const { username, password } = request.body
      if (username === user.username && password === user.password) {
        const token = fastify.jwt.sign({ username: user.username, firstName: user.firstName, lastName: user.lastName })
        reply.send({ token })
      } else {
        reply.unauthorized();
      }
    } catch {
      reply.badRequest();
    }
  })
}

export default login;
