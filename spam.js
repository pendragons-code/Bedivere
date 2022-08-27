const { EmbedBuilder } = require("discord.js")
const puppeteer = require("puppeteer")
const { OwnerID } = require("../../../config.json")
module.exports = {
	name: "spam",
	aliases: [],
	desc: "Spams remote user.",
	utilisation: "spam < number of word in name > < name > < message >",
	category: "core",
	async execute(bot, messageCreate, args, prefix){

//current issues: trying to resolve how to get the cookies from chrome. I was not able to get chrome-cookies-secure to fully work, it got into whatsapp wb but logged out.




		let i = 0
		target = ""
		while(i < parseInt(args[0])){
			target + args[i+1]
			i++
		}
		let message = args.slice(parseInt(args[0]) + 1).join(" ")
		const start = async (url, target) => {
			const browser = await puppeteer.launch({
				headless: false,
				defaultViewport: null,
				args: ['--start-maximized']
			})

			const page = await browser.newPage()

		    	await page.goto(url, {
	        	waitUntil: 'networkidle2',
	        	timeout: 0,
		    	})
   
		    	await page.waitForSelector(`span[title='${target}']`)
			    await page.click(`span[title='${target}']`)

			    let input = await page.$(
       			    '#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div'
    				)

   			 let messages = [
        		'Spam',
		        'Its a spam attack',
		        'Have a great time',
		        '💚💚💚',
		        '🐱‍🚀🐱‍🚀🐱‍🚀',
		        '👾👾👾',
		        '🤖🤖🤖',
			]

			    for (let i = 0; i < 150; i++) {
			        let message = messages[Math.floor(Math.random() * messages.length)]
			        await input.type(message)
			        await page.keyboard.press('Enter')
				    }
					}
		start(url, target)
	}
}
