document.querySelector('#traduzir').addEventListener('click', (e) => {
    e.preventDefault();

    let $inputNumeroBinario = document.querySelector('#numeroBinario');
    let $inputTraduzido = document.querySelector('#textoTraduzido');

    iserirNumero(numeroSomado($inputNumeroBinario.value), $inputTraduzido);
});

function iserirNumero(numeroBinario, textoTraduzido) {
    textoTraduzido.insertAdjacentHTML("beforebegin",
        `<input type="text" class="form-control" id="textoTraduzido" value="${numeroBinario}" disabled>`);
    textoTraduzido.remove();
};


function numeroSomado(inputNumeroBinario) {
    let numeroSomado = 0;
    let numeroBinarioSplit = inputNumeroBinario.split('');

    numeroBinarioSplit.forEach((numero, indice) => {
        numeroSomado += Math.pow(2, indice) * numeroBinarioSplit[numeroBinarioSplit.length - 1 - indice];
    });

    return numeroSomado;
};