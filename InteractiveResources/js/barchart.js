

async function loadChart(){
    chartData = [];
    document.querySelector("#chartReport").innerHTML = "<canvas id=\"" + canvasID + "\"></canvas>";

    // CHECK INPUT VALUES
    const chartinputs = document.querySelectorAll(".chartinputs");
    await chartinputs.forEach((element, index) => {
        let value = element.value.toLowerCase();
        let answer = element.getAttribute('datavalue').toLowerCase();

        if(value != ""){
            element.classList.remove("is-invalid");
            element.classList.remove("is-valid");

            if(value == answer){
                element.classList.add("is-valid");
            }else{
                element.classList.add("is-invalid");
                let dataerror = element.getAttribute("dataerror");
                if(!dataerror){
                    element.setAttribute("dataerror", 1);
                }else{
                    if(dataerror == 3){
                        element.placeholder = answer;
                        let checkElement = document.getElementById("inpurerr_" + index);
                        if(checkElement){
                            checkElement.remove()
                        }
                        let small = document.createElement("small");
                        small.setAttribute("id", "inpurerr_" + index);
                        small.style.backgroundColor = '#dc3545';
                        small.style.width = '100%';
                        small.style.display = 'flex';
                        small.style.color = 'white';
                        small.style.padding = '0.2rem 0 0.2rem 0.5rem';
                        small.innerHTML = "Answer: " + answer;

                        element.after(small);
                    }else{
                        element.setAttribute('dataerror', parseInt(dataerror) + 1)
                    }
                }
            }
        }

        value = (value != "") ? parseInt(value) : 0;
        chartData.push(parseInt(value));
    });

    // CREATE BAR CHART
    const ctx = document.getElementById(canvasID).getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartLabels,
            datasets: [{
                label: chartTitle,
                data: chartData,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

async function initChartData(){
    const barchartinner = document.querySelector(".barchartinner");
    barchartinner.innerHTML = "";

    // INITIALIZE DATA
    await chartTableData.forEach((element, index) => {
        let row = barchartinner.insertRow();
        
        let cell1 = row.insertCell();
        cell1.innerHTML = element.text;

        let cell2 = row.insertCell();
        var input = document.createElement("INPUT");
        input.setAttribute("type", "text");
        input.setAttribute("id", "chartdata_" + index);
        input.setAttribute("datavalue", element.value);
        input.classList.add("form-control");
        input.classList.add("chartinputs");
        cell2.appendChild(input);

        let cell3 = row.insertCell();
        var btn = document.createElement("BUTTON");
        btn.classList.add("btn");
        btn.classList.add("btn-primary");
        btn.setAttribute("datainputid", "chartdata_" + index);
        btn.innerHTML = "Check";
        btn.addEventListener("click", loadChart);
        cell3.appendChild(btn);

        chartLabels.push(element.text);

        let o = Math.round, r = Math.random, s = 255;
        let color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s);
        let bgColor = color + ',' + 0.6 + ')';
        let brdrColor = color + ',' + 2 + ')';
        backgroundColor.push(bgColor);
        borderColor.push(brdrColor);
    });
    await loadChart();
}