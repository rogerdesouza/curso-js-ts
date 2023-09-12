const nome = 'Roger'
const idade = 39
const peso = 82
const altura = 1.75
let imc = peso/(altura*altura)
imc = imc.toFixed(2) 
const anoDeNascimento = (new Date().getFullYear() - idade)

console.log(`
O nome é ${nome}, a idade é ${idade}, a peso é ${peso}, a altura é ${altura}.
Tem um IMC de ${imc} e nasceu, provavelmente, em ${anoDeNascimento}.
`);
