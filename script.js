async function getData() {
    const response = await fetch("Dataset.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
        const row = elem.split(",");
        const year = row[0];
        const temp = row[1];
        console.log(year, temp);
    });
}
//end of functions
//call the function to test if you see the image on the left in the console
    