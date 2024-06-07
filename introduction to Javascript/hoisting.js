coisaBoba();

function coisaBoba() {
  console.log("Coisa boba foi chamada");
}

/*
    Porem né se eu guardar essa função dentro de uma variavel
    o comportamento muda.
*/

// coisaBobaComVAR();
// coisaBobaComVAR is not a function

var coisaBobaComVAR = function () {
  console.log("Coisa Boba com VAR");
};
coisaBobaComVAR();

const coisaBobaComCONST = function () {
  console.log("Coisa Boba com CONST");
};
coisaBobaComCONST();

let coisaBobaComLET = function () {
  console.log("Coisa Boba com LET");
};
coisaBobaComLET();

/**
 * Isso Ok, funciona.
 * mas chamar o coisaBobaComVAR(); antes da declaração dele pode dar um erro.
 * TypeError: coisaBobaComVAR is not a function
 */

// const algumaCoisa;
/**
 * E o const eu não consigo inicializar ele sem valor. sem atribuilo por exemplo...
 * o Let sim
 */

/*
 * se eu tentar acessar ele vai me dar um erro.
 * ReferenceError: Cannot access 'algumaCoisa' before initialization
 * console.log(algumaCoisa);
 * let algumaCoisa;
 */

let algumaCoisa;
console.log(algumaCoisa);
// Assim funciona o contrario não funciona.

/*
 * console.log(new NF(), NF);
 * class NF {
 *   index() {}
 * }
 ReferenceError: Cannot access 'NF' before initialization
*/

class NF {
  index() {}
}
console.log(new NF(), NF);

/**
 * É bom mencionar também que var, caiu em desuso.
 * e veio o let né, o let tem blocked scoope
 * que é securança de escopo
 */

function imprimirMenssagem(msg) {
  const msg2 = String(msg);
  console.log(typeof msg2);
}

imprimirMenssagem(123123);
