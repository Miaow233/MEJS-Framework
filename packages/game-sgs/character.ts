import { Skill } from './skill'
import { Character as Char } from './data'
import { AbstractCard, AbstractDeck } from './card'
/** 武将牌 */
export type CharacterId = number
export const enum CharacterGender {
  Male,
  Female,
  Neutral,
}

export const enum CharacterEquipSections {
  Weapon = 'weapon section',
  Shield = 'shield section',
  DefenseRide = 'defense ride section',
  OffenseRide = 'offense ride section',
  Precious = 'precious',
}

export const enum CharacterNationality {
  Wei,
  Shu,
  Wu,
  Qun,
  God,
}

export function getNationalityRawText(nationality: CharacterNationality) {
  const rawNationalityText = ['wei', 'shu', 'wu', 'qun', 'god']
  return rawNationalityText[nationality]
}
export function getGenderRawText(gender: CharacterGender) {
  const rawGenderText = ['male', 'female', 'unknoun']
  return rawGenderText[gender]
}

export function Lord(constructor: new (...args: any[]) => any): any {
  return class extends constructor {
    private lord: boolean = true
  } as any
}

export class Character {
  name: string
  country: CharacterNationality
  skills: String[]
  maxHealth: number
  gender: CharacterGender
  description: string
  constructor(name: string, health: number, skills: String[], country: CharacterNationality, gender: CharacterGender) {
    this.name = name
    this.maxHealth = health
    this.skills = skills
    this.country = country
    this.gender = gender
  }
  toString() {
    return `${this.name}`
  }
}
export class CharacterDeck extends AbstractDeck<Character> {
  constructor() {
    super()
    Char.forEach((i: any) => {
      this.cards.push(new Character(i[0], i[1], i[2], i[3], i[4]))
    })
    this.cards = this.shuffle(this.cards)
  }
}
