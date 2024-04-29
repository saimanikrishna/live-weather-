
const temperatureData = {
    "2020": [28, 30, 32, 36, 39, 37, 35, 34, 31, 28, 27, 25],
    "2021": [27, 29, 33, 32, 35, 38, 34, 32, 29, 27, 27, 26],
    "2022": [27, 28, 30, 31, 33, 35, 39, 31, 29, 27, 27, 25],
    "2023": [28, 29, 30, 32, 33, 35, 31, 30, 29, 28, 27, 25]
};

function generateLineGraph(id, data, label, borderColor) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const ctx = document.getElementById(id).getContext("2d");
    if (window.lineChart !== undefined) {
        window.lineChart.destroy();
    }
    window.lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: label,
                data: data,
                fill: false,
                borderColor: borderColor,
                tension: 0.1
            }]
        },
        options: {}
    });
}

function generateBarGraph(id, data, label, backgroundColor) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const ctx = document.getElementById(id).getContext("2d");
    if (window.barChart !== undefined) {
        window.barChart.destroy();
    }
    window.barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: backgroundColor,
            }]
        },
        options: {}
    });
}

document.getElementById("yearSelect").addEventListener("change", function() {
    const selectedYear = this.value;
    
    generateLineGraph("temperatureLineGraph", temperatureData[selectedYear], "Temperature", 'rgb(75, 192, 192)');
    
    generateBarGraph("temperatureBarGraph", temperatureData[selectedYear], "Temperature", 'rgba(75, 192, 192, 0.5)');
});

const defaultYear = "2020";
generateLineGraph("temperatureLineGraph", temperatureData[defaultYear], "Temperature", 'rgb(75, 192, 192)');
generateBarGraph("temperatureBarGraph", temperatureData[defaultYear], "Temperature", 'rgba(75, 192, 192, 0.5)');