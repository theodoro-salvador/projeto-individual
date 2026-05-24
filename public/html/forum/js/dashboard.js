const chartAlbuns = document.getElementById('canvas_albuns');
const chartDecadas = document.getElementById('canvas_decadas');
const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 20,
        },
        scales: {
            x: {
                grid: {
                    color: '#98b0dc',
                    lineWidth: 0.5,
                }
            },
            y: {
                // min: 1,
                // max: 15,
                ticks: {
                    stepSize: 1,
                },
                grid: {
                    color: '#98b0dc',
                    lineWidth: 0.5,
                }
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        elements: {
            line: {
                borderWidth: 2,
            },
            point: {
                radius: 5,
                backgroundColor: '#792026',
                borderColor: '#db2c31',
                borderWidth: 2,
            },
        }
    }

window.onload = executarFuncoesDashboard();

function executarFuncoesDashboard(){
    buscarGraficoAlbuns();
    buscarGraficoDecadas();
    buscarKpiDiscoPreferido();
    buscarKpiDecadaPreferida();
}

async function buscarGraficoAlbuns(){

    let nomesDiscos = [];
    let qtdVotosDiscos = [];

    let resultado = await fetch('/graficos/buscarGraficoAlbuns', {
        method: 'GET',
    });
        
    if(resultado.status == 200){
        let dadosGrafico = await resultado.json();

            console.log(dadosGrafico);

            for(let i = 0; i < dadosGrafico.length; i++){

                nomesDiscos.push(dadosGrafico[i].nomeDisco);
                qtdVotosDiscos.push(dadosGrafico[i].qtdVotos);

            }

    }

    new Chart(chartAlbuns, {

        type: 'line',
        data: {
            labels: nomesDiscos,
            datasets: [{
                label: 'Quantidade de Votos',
                data: qtdVotosDiscos,
                backgroundColor: '#792026',
                borderColor: '#db2c31',
            }],
        },
        options: defaultOptions,

    });


}

async function buscarGraficoDecadas(){

    let decadas = [1970, 1980, 1990, 2000, 2010, 2020];
    let votosDecadas = [];

    let resultado = await fetch('/graficos/buscarGraficoDecadas', {
        method: 'GET',
    });

    if(resultado.status == 200){

        let dadosGrafico = await resultado.json();

        votosDecadas.push(
            dadosGrafico[0].decada70, dadosGrafico[0].decada80,
            dadosGrafico[0].decada90, dadosGrafico[0].decada00,
            dadosGrafico[0].decada10, dadosGrafico[0].decada20
        );

    }

    new Chart(chartDecadas, {

        type: 'bar',
        data: {
            labels: decadas,
            datasets: [{
                label: 'Quantidade de Votos',
                data: votosDecadas,
                backgroundColor: '#792026',
                borderColor: '#db2c31',
            }],
        },
        options: defaultOptions,

    })

}

async function buscarKpiDiscoPreferido(){

    let resultado = await fetch('/graficos/buscarKpiDiscoPreferido', {
        method: 'GET',
    });

    if(resultado.status == 200){

        let dadosKpi = await resultado.json()

        document.getElementById('kpi_disco_preferido').innerHTML = `${dadosKpi[0].nomeDisco.toString()}`;


    }


}

async function buscarKpiDecadaPreferida(){

    let resultado = await fetch('/graficos/buscarKpiDecadaPreferida', {
        method: 'GET',
    });

    if(resultado.status == 200){

        let dadosKpi = await resultado.json();

        document.getElementById('kpi_decada_preferida').innerHTML = `${dadosKpi[0].decadaDisco.toString()}`;

    }

}