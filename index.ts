import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

import { TypeABC } from 'tsapp';

export interface PluginOptions {
  optionA: string
}

// define plugin using promises
const myPluginAsync: FastifyPluginAsync<PluginOptions> = async (fastify, options) => {
  const { optionA } = options
  const { decoratorA: TypeABC } = fastify
  //...
}

// export plugin using fastify-plugin
export default fp(myPluginAsync, '3.x')