import { CardDeck } from './card'
import { CharacterDeck } from './character'
import { IDENTITY_INDEX_MAPPING } from './data'
import { Player } from './player'

let characterDeck = new CharacterDeck()

let player01 = new Player(IDENTITY_INDEX_MAPPING.name[0], characterDeck.draw())
player01.name = 'player01'
let player02 = new Player(IDENTITY_INDEX_MAPPING.name[2], characterDeck.draw())
player02.name = 'player02'

let players = [player01, player02]
let cardDeck = new CardDeck()

console.log(cardDeck.toString())
for (let n = 0; n < 4; n++) {
  player01.handCard.push(cardDeck.draw())
  player02.handCard.push(cardDeck.draw())
}

console.log(player01.toString())
console.log(player02.toString())

console.log(player01.handCard.toString())
console.log(player02.findCard('桃'))

// // handle
// import readline from 'readline'
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.on('close', function () {
//   console.log('\nBYE BYE !!!')
//   //process.exit(0)
// })
// async function handle() {
//   for (let player of players) {
//     rl.question(`${player.name}的回合: `, async (answer) => {})
//   }
// }
// handle()
