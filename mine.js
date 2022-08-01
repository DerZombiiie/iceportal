const fs = require("fs")
const fetch = require("fetch").fetchUrl

console.log("starting miner")

const path = "https://iceportal.de/api1/rs/status"


function oneRound() {
	fetch(path, (err, meta, body) => {
		if(err) {
			console.log(err)
			return
		}

		fs.writeFileSync(`data/${Math.floor(Date.now()/1000)}.json`, body.toString())
	})
}

roundCount = 1

// --- oneRound() --- //
if ( process.argv[2] ) {
	if ( process.argv[2] == "ever" ) {
		roundCount = -1
	} else {
		roundCount = process.argv[2]
	}
}

thePath = ""
if ( process.argv[3] ) {
	thePath = process.argv[3]
}

let rt = 3600000 // roundTime NOT russia today!

if (roundCount > 0) {
// register rounds:
for( let i = 0 ; i < roundCount ; i++ ) {
	console.log(`Scheduling donwload #${i+1} of ${roundCount} in ${i * rt}ms`)
	setTimeout(()=>{
		console.log(`Doing round ${i+1}/${roundCount}`)
		oneRound()
	}, i * rt)
}
} else {
	setInterval(_=>{
		console.log(`Doing round`)
		oneRound()
	}, 500)
	
}
