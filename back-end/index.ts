import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { getFavourites } from './src/handlers/getFavourites'
import { getGroceryList } from './src/handlers/getGroceryList'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/user/:userId/favourites', async (req, res) => {
  res.send(await getFavourites(req.params.userId))
})

app.get('/user/:userId/list', async (req, res) => {
  res.send(await getGroceryList(req.params.userId))

})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
