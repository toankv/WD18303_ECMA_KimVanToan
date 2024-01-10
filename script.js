function generateTableHeader(headerTitles){
    if(!headerTitles || headerTitles.length ===0){
        return "";

    }
    let html = ``;
    headerTitles.forEach(element =>
    {
        html += `<th>${element}</th>`
    });
    return `<thead><tr>${html}</tr></thead>`;
}

function generateTableRow(rowData){
    if(!rowData || rowData.length ===0)
    {return "";
    }
    return `<tr>
<td>${rowData.id}</td>
<td>${rowData.name}</td>
<td><img src="${rowData.avartar}" height="50"></td>
<td>${rowData.creataAt}</td>
</tr>`;
}
function generateTable(headers,data){
    let headerRow = generateTableHeader(headers);

    let html= ``;
    data.forEach(element =>{
        html+=generateTableRow(element)
    })
    return `<table>${headerRow} <tbody>${html}</tbody></table>`;
}

let list = [
    {
        id:1,
        name:"Kim Van Toan",
        avartar: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        creataAt: "2024/01/09"
    },
    {
        id:2,
        name:"Kim jong uon",
        avartar: "https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        creataAt: "2024/01/09"
    }
]
let header =[
    "id",
    "name",
    "avartar",
    "creataAt"
]
document.write(generateTable(header,list));
