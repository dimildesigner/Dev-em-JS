function calcularReservas() {
    // Variáveis para armazenar os dados e resultados de cada cliente
    var nome1, pessoas1, mesa1, valorMinimo1, valorTotal1,
        nome2, pessoas2, mesa2, valorMinimo2, valorTotal2,
        nome3, pessoas3, mesa3, valorMinimo3, valorTotal3;

    var consumoMinimoRestaurante = 0;
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = '<h2>Resultados</h2><p id="totalConsumoRestaurante"></p>';

    // --- Lógica para o Cliente 1 ---
    nome1 = document.getElementById("nome1").value;
    pessoas1 = parseInt(document.getElementById("pessoas1").value);
    mesa1 = document.getElementById("mesa1").value;
    valorMinimo1 = 0;
    valorTotal1 = 0;

    if (nome1 && pessoas1) {
        if (mesa1 === 'padrao') {
            valorMinimo1 = 50;
        } else if (mesa1 === 'vip') {
            valorMinimo1 = 80;
        } else if (mesa1 === 'varanda') {
            valorMinimo1 = 100;
        }

        valorTotal1 = valorMinimo1 * pessoas1;
        consumoMinimoRestaurante = consumoMinimoRestaurante + valorTotal1;

        resultadoDiv.innerHTML += `
                    <div class="cliente-info">
                        <p><strong>Cliente:</strong> ${nome1}</p>
                        <p><strong>Pessoas:</strong> ${pessoas1}</p>
                        <p><strong>Tipo de Mesa:</strong> ${mesa1}</p>
                        <p><strong>Valor Total:</strong> R$ ${valorTotal1.toFixed(2)}</p>
                    </div>
                `;
    }

    // --- Lógica para o Cliente 2 ---
    nome2 = document.getElementById("nome2").value;
    pessoas2 = parseInt(document.getElementById("pessoas2").value);
    mesa2 = document.getElementById("mesa2").value;
    valorMinimo2 = 0;
    valorTotal2 = 0;

    if (nome2 && pessoas2) {
        if (mesa2 === 'padrao') {
            valorMinimo2 = 50;
        } else if (mesa2 === 'vip') {
            valorMinimo2 = 80;
        } else if (mesa2 === 'varanda') {
            valorMinimo2 = 100;
        }

        valorTotal2 = valorMinimo2 * pessoas2;
        consumoMinimoRestaurante = consumoMinimoRestaurante + valorTotal2;

        resultadoDiv.innerHTML += `
                    <div class="cliente-info">
                        <p><strong>Cliente:</strong> ${nome2}</p>
                        <p><strong>Pessoas:</strong> ${pessoas2}</p>
                        <p><strong>Tipo de Mesa:</strong> ${mesa2}</p>
                        <p><strong>Valor Total:</strong> R$ ${valorTotal2.toFixed(2)}</p>
                    </div>
                `;
    }

    // --- Lógica para o Cliente 3 ---
    nome3 = document.getElementById("nome3").value;
    pessoas3 = parseInt(document.getElementById("pessoas3").value);
    mesa3 = document.getElementById("mesa3").value;
    valorMinimo3 = 0;
    valorTotal3 = 0;

    if (nome3 && pessoas3) {
        if (mesa3 === 'padrao') {
            valorMinimo3 = 50;
        } else if (mesa3 === 'vip') {
            valorMinimo3 = 80;
        } else if (mesa3 === 'varanda') {
            valorMinimo3 = 100;
        }

        valorTotal3 = valorMinimo3 * pessoas3;
        consumoMinimoRestaurante = consumoMinimoRestaurante + valorTotal3;

        resultadoDiv.innerHTML += `
                    <div class="cliente-info">
                        <p><strong>Cliente:</strong> ${nome3}</p>
                        <p><strong>Pessoas:</strong> ${pessoas3}</p>
                        <p><strong>Tipo de Mesa:</strong> ${mesa3}</p>
                        <p><strong>Valor Total:</strong> R$ ${valorTotal3.toFixed(2)}</p>
                    </div>
                `;
    }

    // Exibir o consumo total do restaurante
    document.getElementById("totalConsumoRestaurante").innerHTML = `<strong>Consumo Mínimo Total do Restaurante:</strong> R$ ${consumoMinimoRestaurante.toFixed(2)}`;
}