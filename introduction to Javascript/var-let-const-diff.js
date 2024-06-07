var numero = 1;
numero = 2;
console.log(numero); // vai mostrar 2

/**
 * Var, tende a ser menos "seguro" porque ele pode ser alterado
 * sem apresentar erro, e seu tipo ser trocado com facilidade.
 */

let numeru = 3;
numeru = 4;
let numeruu;
numeruu = [123];
console.log(numeru); // vai mostrar 4
console.log(numeruu); //  [123]
/**
 * Posso trocar o tipo, posso trocar o valor e
 * declarar sem atribuir valor já na declaração
 * tenho segurança de escopo
 * então let é mais seguro.
 */

const num = 5;
// num = 6

/*
vai dar erro, Assignment to constant variable...
Não posso apenas declarar e não assinar ou atribuir valor a ela
e não posso mudar seu tipo primitivo...
variaveis constantes não mudam o seu valor literal.
Se ela é um retorno de String() por exemplo. ok é uma string
se ela é uma  string tipo "Exemplo" então o valor literal dela
não vai mudar.
*/

const exemploDeConstComString = String("Olá");
const exemploDeConstComObjeto = { valor: 10 };
exemploDeConstComObjeto.nome = "carlos";
exemploDeConstComObjeto.valor = true;
console.log(exemploDeConstComObjeto);
