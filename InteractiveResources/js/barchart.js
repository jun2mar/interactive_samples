async function BarloadChart(){
    BarchartData = [];
    document.querySelector("#barchartReport").innerHTML = "<canvas id=\"" + BarcanvasID + "\"></canvas>";

    // CHECK INPUT VALUES
    const barchartinputs = document.querySelectorAll(".barchartinputs");
    await barchartinputs.forEach((element, index) => {
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
        BarchartData.push(parseInt(value));
    });

    // CREATE BAR CHART
    const ctx = document.getElementById(BarcanvasID).getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: BarchartLabels,
            datasets: [{
                label: BarchartTitle,
                data: BarchartData,
                backgroundColor: BarbackgroundColor,
                BarborderColor: BarborderColor,
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

async function BarinitChartData(){
    const barchartinner = document.querySelector(".barchartinner");
    barchartinner.innerHTML = "";

    // INITIALIZE DATA
    await BarchartTableData.forEach((element, index) => {
        let row = barchartinner.insertRow();
        
        let cell1 = row.insertCell();
        cell1.innerHTML = element.text;

        let cell2 = row.insertCell();
        var input = document.createElement("INPUT");
        input.setAttribute("type", "text");
        input.setAttribute("id", "chartdata_" + index);
        input.setAttribute("datavalue", element.value);
        input.classList.add("form-control");
        input.classList.add("barchartinputs");
        cell2.appendChild(input);

        let cell3 = row.insertCell();
        var btn = document.createElement("BUTTON");
        btn.classList.add("btn");
        btn.classList.add("btn-primary");
        btn.setAttribute("datainputid", "chartdata_" + index);
        btn.innerHTML = "Check";
        btn.addEventListener("click", BarloadChart);
        cell3.appendChild(btn);

        BarchartLabels.push(element.text);

        let o = Math.round, r = Math.random, s = 255;
        let color = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s);
        let bgColor = color + ',' + 0.6 + ')';
        let brdrColor = color + ',' + 2 + ')';
        BarbackgroundColor.push(bgColor);
        BarborderColor.push(brdrColor);
    });
    await BarloadChart();
}