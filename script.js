// Dados baseados na planilha simulada
const dadosFinanceiros = [
    { ano: 2026, idade: 18, salario: 1500.00, reserva: 180.00, valorInicial: 0.00, rendimento: 0.00, valorFinal: 180.00 },
    { ano: 2027, idade: 19, salario: 1650.00, reserva: 198.00, valorInicial: 180.00, rendimento: 9.00, valorFinal: 387.00 },
    { ano: 2028, idade: 20, salario: 1815.00, reserva: 217.80, valorInicial: 387.00, rendimento: 19.35, valorFinal: 624.15 },
    { ano: 2029, idade: 21, salario: 1996.50, reserva: 239.58, valorInicial: 624.15, rendimento: 31.21, valorFinal: 894.94 },
    { ano: 2030, idade: 22, salario: 2196.15, reserva: 263.54, valorInicial: 894.94, rendimento: 44.75, valorFinal: 1203.22 },
    { ano: 2031, idade: 23, salario: 2415.77, reserva: 289.89, valorInicial: 1203.22, rendimento: 60.16, valorFinal: 1553.28 },
    { ano: 2032, idade: 24, salario: 2657.34, reserva: 318.88, valorInicial: 1553.28, rendimento: 77.66, valorFinal: 1949.82 },
    { ano: 2033, idade: 25, salario: 2923.08, reserva: 350.77, valorInicial: 1949.82, rendimento: 97.49, valorFinal: 2398.08 },
    { ano: 2034, idade: 26, salario: 3215.38, reserva: 385.85, valorInicial: 2398.08, rendimento: 119.90, valorFinal: 2903.83 },
    { ano: 2035, idade: 27, salario: 3536.92, reserva: 424.43, valorInicial: 2903.83, rendimento: 145.19, valorFinal: 3473.45 },
    { ano: 2036, idade: 28, salario: 3890.61, reserva: 466.87, valorInicial: 3473.45, rendimento: 173.67, valorFinal: 4114.00 }
];

// Função para formatar valores numéricos como moeda (R$)
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para preencher a tabela no HTML
function renderizarTabela() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    dadosFinanceiros.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.ano}</td>
            <td>${item.idade}</td>
            <td class="highlight-salary">${formatarMoeda(item.salario)}</td>
            <td>${formatarMoeda(item.reserva)}</td>
            <td>${formatarMoeda(item.valorInicial)}</td>
            <td>${formatarMoeda(item.rendimento)}</td>
            <td class="highlight-final">${formatarMoeda(item.valorFinal)}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarTabela);
