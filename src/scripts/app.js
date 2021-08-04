
function renderExcel(evt) {

    evt.preventDefault();

    console.log("Clearing the old table");



    let r = +evt.target.numOfRows.value;

    let c = +evt.target.numOfCols.value;

    // let v = evt.target.dummyValue.value;

    renderTable(r, c);

}

function renderTable(rows, cols) {
    let table = document.getElementById("book1");

    table.innerHTML = "";

    insertRowHeader(table, cols);

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow(i + 1);
        createColsInsideRow(row, i, cols);
    }


}

function insertRowHeader(table, cols) {
    let headerRow = table.insertRow(0);

    for (let i = 0; i < cols + 1; i++) {
        headerRow.innerHTML = headerRow.innerHTML + (`<th class='header-cell' id='col-header-cell-${i}'>
                            <span class='header-content'> Col-${i}</span>
                        </th>`);
    }

}

function createColsInsideRow(row, rowNumber, cols) {
    row.innerHTML = `<th class='header-cell' id='row-header-cell-${rowNumber}'>
                        <span class='header-content'> Row-${rowNumber}</span>
                    </th>`;
    for (let i = 1; i < cols + 1; i++) {
        let cell = row.insertCell(i);
        createTextFieldInsideCell(cell, rowNumber, i);
    }
}


function createTextFieldInsideCell(cell, rowNumber, colNumber) {
    let div = document.createElement('div')
    div.class = "cell";
    div.id = `cell_${rowNumber}_${colNumber}`;
    let input = document.createElement('input');
    input.name = `input_${rowNumber}_${colNumber}`;
    input.class = "cell-input";
    input.id = `input_${rowNumber}_${colNumber}`;

    div.appendChild(input);

    cell.appendChild(div);
}
function createRow(cols) {
    let el = [];
    for (let i = 0; i < cols; i++) {

    }
}

// window.addEventListener("DOMContentLoaded", function () {
    document.getElementsByTagName('button')[0].click();
// })

