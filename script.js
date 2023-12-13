const years = [];
const temps = [];

async function getData() {
    const response = await fetch("Dataset.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
        const row = elem.split(",");
        const year = row[0];
        const temp = parseFloat(row[1]) + 14;
        years.push(year);
        temps.push(temp);
        console.log(year, temp);
    });
    await getChart();
}

async function getChart(){
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
            label: 'Historic Temperatures',
            borderColor: '#031A6B',
            backgroundColor: '#031A6B',
            data: temps,
            fill: false,
            borderWidth: 1
            }]
        },
    });
}

getData();
