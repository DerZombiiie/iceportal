const fs = require("fs")
const fetch = require("fetch").fetchUrl

console.log("starting miner")

const path = "https://iceportal.de/api1/rs/status"
const trip = "https://iceportal.de/api1/rs/tripInfo/trip"
const bap = "https://iceportal.de/bap/api/bap-service-status"

function oneRound() {
	fetch(path, (err, meta, body) => {
		if(err) {
			console.log(err)
			return
		}

		fs.writeFileSync(`data/${Math.floor(Date.now()/1000)}.json`, body.toString())
	})
}

function tripFunc() {
	fetch(trip, (err, meta, body) => {
		if(err) {
			console.log(err)
			return
		}

		fs.writeFileSync(`trip/${Math.floor(Date.now()/1000)}.json`, body.toString())
	})
}

function bapFunc() {
	fetch(bap, (err, meta, body) => {
		if(err) {
			console.log(err)
			return
		}

		fs.writeFileSync(`bap/${Math.floor(Date.now()/1000)}.json`, body.toString())
	})
}

setInterval(_=>{
	console.log(`Doing round`)
	oneRound()
}, 500)
setInterval(_=>{
	console.log("trip round")
	tripFunc()
}, 10000)
setInterval(_=>{
	console.log("bap round")
	bapFunc()
}, 10000)

