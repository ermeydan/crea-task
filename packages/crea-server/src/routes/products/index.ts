import { FastifyPluginAsync } from "fastify"
import { faker } from '@faker-js/faker';

interface ProductParams {
  id: string
}

const products: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', { onRequest: [fastify.authenticate] }, async function (request, reply) {
    const { products, comments } = fastify.db
    const res = products.map(p => {
      const scores = comments.filter(c => c.productId === p.id).map(c => c.score)
      let score = scores.reduce((a, b) => (a + b), 0)
      score = score ? Math.round((score / scores.length) * 2) / 2 : 0
      return { ...p, score }
    })
    reply.schema('index').send(res)
  })

  fastify.get<{ Params: ProductParams }>('/:id', { onRequest: [fastify.authenticate] }, async function (request, reply) {
    const { id } = request.params
    const { products, comments } = fastify.db
    const product: any = products.find(product => product.id === id)
    const scores = comments.filter(c => c.productId === product.id).map(c => c.score)
    const commentsCount = scores.length
    let score = scores.reduce((a, b) => (a + b), 0)
    score = score ? Math.round((score / commentsCount) * 2) / 2 : 0
    reply.schema('detail').send({ ...product, score, commentsCount })
  })

  fastify.get<{ Params: ProductParams }>('/:id/comments', { onRequest: [fastify.authenticate] }, async function (request, reply) {
    const { id } = request.params
    const { comments } = fastify.db
    const filteredComments = comments.filter(comment => comment.productId === id)
    reply.send(filteredComments)
  })

  fastify.post<{ Params: ProductParams }>('/:id/comments', { onRequest: [fastify.authenticate] }, async function (request: any, reply) {
    const { id } = request.params
    const { text, score } = request.body
    const db = fastify.db
    const comment = {
      id: faker.string.uuid(),
      productId: id,
      text,
      score,
      date: new Date(),
      username: request.user.username,
    }
    db.comments.push(comment)
    reply.code(201).send(comment)
  })
}

export default products;
