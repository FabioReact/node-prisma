const { response } = require("express")
const express = require("express")

const router = new express.Router()

router.get("/users", (res, req) => {
	return res.status(200).send("heroes")
})

module.exports = router