const fchartBtns = document.querySelectorAll(".fchartBtns button");
const fchartTableBody = document.querySelectorAll("#fchartTableBody");

let drag;
fchartBtns.forEach( button => {
    button.addEventListener("dragstart", (event) => {
        drag = event.target;
    }, false);
})

fchartData.forEach(function(data){
    var newRow = document.createElement("tr");
    data.forEach(element => {
        var newCell = document.createElement("td");

        if(!element.default){
            newCell.setAttribute("data-ans", element.item);

            newCell.addEventListener("dragenter" , (event) => {
                event.target.classList.add("enter");
            }, false)
        
            newCell.addEventListener("dragover" , (event) => {
                event.preventDefault();
            }, false)
    
            newCell.addEventListener("drop" , (event) => {
                event.preventDefault();
                newCell.innerHTML = drag.innerHTML;
                if(drag.innerHTML == newCell.getAttribute("data-ans")){
                    newCell.className = "successdrag";
                }else{
                    newCell.className = "errordrag";
                }
            }, false)
        }else{
            newCell.append(element.item);
        }
        newRow.append(newCell);
    });
    document.getElementById("fchartTableBody").append(newRow);
});
