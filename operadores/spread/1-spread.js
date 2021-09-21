// Spread
var partes = ['ombro', 'joelhos'];
//Com o Spread permite contatenar um array dentro de um array apenas usadno a mensão "...nomedoarray"
var musicas = ['cabeca', ...partes, 'e', 'pés'];


console.log(musicas);

//o resultado será "[ 'cabeca', 'ombro', 'joelhos', 'e', 'pés' ]"

function fn(x, y, z){};
var args = [0, 1, 2];
fn(...args);