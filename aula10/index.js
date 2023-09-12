// string
const nome = 'Teste'
const nome2 = "Teste"
const nome3 = `Teste`

// number
const num1 = 10
const num2 = 10.52

// undefined = não aponta pra local nenhum na memória
let nomeAluno

// null = não aponta pra local nenhum na memória
let sobrenomeAluno = null

// booleano = true ou false (lógico)
const aprovado = true

// ver tipo das variáveis
console.log(typeof aprovado)

// referência (só para tipos não primitivos)
const a = [1, 2]
const b = a
b.push(3)
console.log(a, b)
