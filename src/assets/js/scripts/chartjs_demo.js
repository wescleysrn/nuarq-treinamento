$(function() {
    // Line Chart example

    var lineData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [
            {
                label: "Equipe Java",
                backgroundColor: 'rgba(52,152,219, 0.9)',
                borderColor: 'rgba(52,152,219, 1)',
                pointBorderColor: "#fff",
                data: [28, 48, 52, 62, 86, 55, 90],
            },{
                label: "Equipe PHP",
                backgroundColor: 'rgba(213,217,219, 0.9)',
                borderColor: 'rgba(213,217,219, 1)',
                pointBorderColor: "#fff",
                data: [65, 59, 64, 62, 56, 27, 40],
            }
        ]
    };
    var lineOptions = {
        responsive: true,
        maintainAspectRatio: false
    };
    var ctx = document.getElementById("line_chart").getContext("2d");
    new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});

    // Bar Chart example

    var barData = {
        labels: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabádo"],
        datasets: [
            {
                label: "Equipe Java",
                backgroundColor:'#DADDE0',
                data: [45, 80, 58, 74, 54, 59, 40]
            },
            {
                label: "Equipe PHP",
                backgroundColor: '#2ecc71',
                borderColor: "#fff",
                data: [29, 48, 40, 19, 78, 31, 85]
            }
        ]
    };
    var barOptions = {
        responsive: true,
        maintainAspectRatio: false
    };

    var ctx = document.getElementById("bar_chart").getContext("2d");
    new Chart(ctx, {type: 'bar', data: barData, options:barOptions}); 

    // doughnut chart example

    var doughnutData = {
        labels: ["Angular","PHP","Java" ],
        datasets: [{
            data: [200,40,60],
            backgroundColor: ["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]
        }]
    } ;


    var doughnutOptions = {
        responsive: true
    };


    var ctx4 = document.getElementById("doughnut_chart").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});

    // Radar chart example

    var radarData = {
        labels: ["Análise", "Projeto", "Desenvolvimento", "Teste", "Validação", "Implantação", "Funcionamento"],
        datasets: [{
            label: "Projetos de Serviço de Barramento",
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)"
        }, {
            label: "Projetos Finalisticos",
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)"
        }]
    };

    var radarOptions = {
        responsive: true
    };

    var ctx5 = document.getElementById("radar_chart").getContext("2d");
    new Chart(ctx5, {type: 'radar', data: radarData, options:radarOptions});

});
