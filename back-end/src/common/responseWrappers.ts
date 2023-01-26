import { type ResponseWrapper } from './types'

export const successResponse = (body: unknown, statusCode = 200): ResponseWrapper => {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}

export const errorResponse = (error: Error): ResponseWrapper => {
  return {
    statusCode: 500,
    body: JSON.stringify({
      message: error.message
    })
  }
}
