window.onload = buscarGraficoAlbuns();

function buscarGraficoAlbuns(){

    let nomesDiscos = [];
    let qtdVotosDiscos = [];

    fetch('/graficos/buscarGraficoAlbuns', {
        method: 'GET',
    })
    .then(function (resultado){
        
        if(resultado.status == 200){
            resultado.json().then(function(dadosGrafico){

                console.log(dadosGrafico);

                for(let i = 0; i < dadosGrafico.length; i++){

                    nomesDiscos.push(dadosGrafico[i].nomeDisco);
                    qtdVotosDiscos.push(dadosGrafico[i].qtdVotos);

                }

            });
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

});

console.log(nomesDiscos, qtdVotosDiscos)

}

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
                min: 1,
                max: 15,
                ticks: {
                    stepSize: 5,
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