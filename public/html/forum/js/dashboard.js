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

new Chart(chartAlbuns, {

    type: 'line',
    data: {
        labels: ['oi', 'tudo', 'bem'],
        datasets: [{
            label: 'Quantidade de Votos',
            data: [1, 2, 3],
            backgroundColor: '#792026',
            borderColor: '#db2c31',
        }],
    },
    options: defaultOptions,

});

function buscarDadosGraficoAlbuns(){

    fetch()

}