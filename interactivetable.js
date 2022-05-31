function loadToForm(row){
    let table=[];
    for(let i=0;i<row.cells.length;i++){
        table.push(row.cells[i].innerHTML);
    }

    document.getElementById("Id").value=table[0];
    document.getElementById("firstName").value=table[1];
    document.getElementById("lastName").value=table[2];
    document.getElementById("address").value=table[3];
}