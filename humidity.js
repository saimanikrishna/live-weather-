
const humidityData = {
    "2020": [50, 53, 60, 63, 59, 62, 80, 75, 73, 63, 69, 55],
    "2021": [50, 53, 60, 61, 67, 73, 77, 70, 65, 67, 55, 53],
    "2022": [45, 51, 52, 62, 67, 72, 77, 71, 68, 73, 61, 57],
    "2023": [51, 54, 52, 64, 59, 74, 75, 69, 65, 62, 57, 55]
};

function generateHumidityLineGraph(id, data, label, borderColor) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const ctx = document.getElementById(id).getContext("2d");
    if (window.humidityLineChart !== undefined) {
        window.humidityLineChart.destroy();
    }
    window.humidityLineChart = new Chart(ctx, {
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

function generateHumidityBarGraph(id, data, label, backgroundColor) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const ctx = document.getElementById(id).getContext("2d");
    if (window.humidityBarChart !== undefined) {
        window.humidityBarChart.destroy();
    }
    window.humidityBarChart = new Chart(ctx, {
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
    
    generateHumidityLineGraph("humidityLineGraph", humidityData[selectedYear], "Humidity", 'rgb(75, 192, 192)');
    
    generateHumidityBarGraph("humidityBarGraph", humidityData[selectedYear], "Humidity", 'rgba(75, 192, 192, 0.5)');
});

const defaultYear = "2020";
generateHumidityLineGraph("humidityLineGraph", humidityData[defaultYear], "Humidity", 'rgb(75, 192, 192)');
generateHumidityBarGraph("humidityBarGraph", humidityData[defaultYear], "Humidity", 'rgba(75, 192, 192, 0.5)');
