#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const chalk = require('chalk')
const boxen = require('boxen')

const colors = {
  red: '#EC697C',
  navy: '#242842'
}

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: colors.red,
  backgroundColor: colors.navy
}

const padAmount = 16

const hero = `
 ██████╗ █████╗ ██████╗ ██████╗  ██████╗ ███╗   ██╗ █████╗ ██████╗  █████╗ 
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔═══██╗████╗  ██║██╔══██╗██╔══██╗██╔══██╗
██║     ███████║██████╔╝██████╔╝██║   ██║██╔██╗ ██║███████║██████╔╝███████║
██║     ██╔══██║██╔══██╗██╔══██╗██║   ██║██║╚██╗██║██╔══██║██╔══██╗██╔══██║
╚██████╗██║  ██║██║  ██║██████╔╝╚██████╔╝██║ ╚████║██║  ██║██║  ██║██║  ██║
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
`

const ingredientsList = [
  {
    quantity: '360g',
    description: 'Spaghetti'
  },
  {
    quantity: '200g',
    description: 'Guanciale'
  },
  {
    quantity: '3',
    description: 'Eggs (2 whole, 1 yolk)'
  },
  {
    quantity: '80g',
    description: 'Grated Parmigiano'
  },
  {
    quantity: 'tsp',
    description: 'Olive Oil'
  },
  {
    quantity: 'Pinch',
    description: 'Salt'
  },
  {
    quantity: 'Pinch',
    description: 'Black Pepper'
  }
]

const ingredientsMapped = ingredientsList.map(item => `${chalk.white.bold(item.quantity.padStart(padAmount, ' '))}: ${chalk.white(item.description)}`)
const ingredientsFormatted = ingredientsMapped.join('\n')

const data = {
  hero: chalk.hex(colors.red)(hero),
  serves: chalk.hex(colors.red)('Serves 4'.padStart(padAmount, ' ')),
  author: chalk.white('By Michael Pumo'),
  ingredients: ingredientsFormatted
}

const output = `
${data.hero}

${data.serves}  ${data.author}

${data.ingredients}
`

console.log(boxen(output, options))
