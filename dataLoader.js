var body = {
    "laanebelop": 0,
    "nominellRente": 3,
    "terminGebyr": 30,
    "utlopsDato": "2045-01-01",
    "saldoDato": "2020-01-01",
    "datoForsteInnbetaling": "2020-02-01",
    "ukjentVerdi": "TERMINBELOP"
}
var options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body)
};

function updateVariable() {
    body.laanebelop = parseInt(document.getElementById("input_field").value);
    options.body = JSON.stringify(body);
    console.log(options);
    fetchData();
}



var options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body)
};


async function fetchData() {
    let fetchData = await fetch("https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan", options);
    let awaitFetch = await fetchData.json()
    console.log(awaitFetch["nedbetalingsplan"]["innbetalinger"]);

    
    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }

    function generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }

    let table = document.getElementById("table");
    table.innerHTML = "";
    let data = Object.keys(awaitFetch["nedbetalingsplan"]["innbetalinger"][0]);
    generateTableHead(table, data);
    generateTable(table, awaitFetch["nedbetalingsplan"]["innbetalinger"]);

}

var input = document.getElementById("input_field");

    input.addEventListener("keyup", function (event) {

        let key = event.key || event.keyCode;
        console.log(key);
        if (key === "Enter" || key == 13) {
            event.preventDefault();
            document.getElementById("hei").click();
        }
    });


