import fp from 'fastify-plugin'
import { faker } from '@faker-js/faker';

export interface DBPluginOptions { }

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  score: number;
  currency: string;
  images: string[];
}

export interface ProductDetails extends Product {
  information: string;
  arrivalDate: Date;
  commentsCount: number;
}

export interface Comment {
  id: string,
  productId: string,
  username: string,
  date: Date,
  score: number,
  text: string,
}

export interface Database {
  products: Product[],
  comments: Comment[],
}

faker.seed(0);

function generateNewProduct(): ProductDetails {
  const id: string = faker.string.uuid()
  const name: string = `${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`
  const description: string = faker.commerce.productDescription()
  const price: string = faker.commerce.price()
  const score: number = 0;
  const currency: string = faker.finance.currencyCode()
  const images: string[] = Array.from({ length: faker.number.int({ min: 2, max: 6 }) }, () => faker.image.urlLoremFlickr({ category: 'transport' }))
  const information: string = faker.lorem.paragraphs()
  const arrivalDate: Date = faker.date.future()
  const commentsCount: number = 0

  return { id, name, description, price, score, currency, images, information, arrivalDate, commentsCount };
}

function generateNewComment(productId: string): Comment {
  const id: string = faker.string.uuid()
  const username: string = 'user'
  const date: Date = faker.date.recent()
  const score: number = Math.round(faker.number.float({ min: 0, max: 5, precision: 0.1 }) * 2) / 2
  const text: string = faker.lorem.sentence()
  return { id, productId, username, date, score, text }
}

const products: Product[] = Array.from({ length: faker.number.int({ min: 3, max: 9 }) }, () => generateNewProduct())
const productIds = products.map(p => p.id)
const comments: Comment[] = Array.from({ length: faker.number.int({ min: 10, max: 40 }) }, () => generateNewComment(faker.helpers.arrayElement(productIds)))

const db = { products, comments }

export default fp<DBPluginOptions>(async (fastify, opts) => {
  fastify.decorate('db', db)
})

declare module 'fastify' {
  export interface FastifyInstance {
    db: Database;
  }
}
