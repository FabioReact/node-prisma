const express = require("express")
const { PrismaClient } = require("@prisma/client")
const userRouter = require("./routes/user")

const prisma = new PrismaClient()

const main = async () => {
	// // Constantes
	// const port = 4000
	// // const apiHeroesURL = `https://superheroapi.com/api/${process.env.ACCESS_TOKEN}`
	
	// // Création de l'application express
	// const app = express()
	
	// // Utilisation du Middleware
	// app.use(express.json())
	// app.use(userRouter)

	// const allUsers = await prisma.user.findMany()
	// console.log(allUsers)
	await prisma.user.create({
    data: {
      email: "fabio@prisma.io",
    }
  })
	
	// app.listen(port, () => {
	// 	console.log(`Serveur lancé sur: http://localhost:${port}`)
	// })
}

main()
	.catch(e => {
		console.log("Houston? We have a problem!")
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect
	})