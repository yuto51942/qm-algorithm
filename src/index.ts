import inputQM from './input'
import {question} from 'readline-sync'
import {printTruthTable} from './printData'
import {calculate} from './calculate'


function main() {
  let numberOfInputLength = parseInt(question('入力の数を入力してください: '))
  while(isNaN(numberOfInputLength)){
    numberOfInputLength = parseInt(question('入力の数を入力してください: '))
  }

  const qms = inputQM(numberOfInputLength)

  printTruthTable(qms, numberOfInputLength)

  calculate(qms, numberOfInputLength)
}

main()
