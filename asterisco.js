exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    let padrao = '';
    for (i = 1; i <= linhas; i++){
        padrao += '*';
        console.log(padrao);
    }
}