const { response } = require("express")
const express = require("express")

const router = new express.Router()

router.get("/heroes", (res, req) => {
	return res.status(200).send("heroes")
})

module.exports = router