const today = new Date();
currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML= `<span>${oLastModif}</span>`;

let temperature = 11; //C
let speedWind= 6; //km/h



currentTemperature.innerHTML= `<span>${temperature}</span>`;
windSpeed.innerHTML= `<span>${speedWind}</span>`;

function windChillCalculator (T,W) {
    let T1=1.8*T+32;
    let W1= W/1.609;
    if (T1<= 50 && W1>3) {
        let windC= 35.74+0.6215*T1-35.75*Math.pow(W1,0.16)+0.4275*T1*Math.pow(W1,0.16);
        let windC1= (windC-32)/1.8;
        let roundWindC= Math.round(windC1*10)/10;
        return roundWindC;
    }
    else {
        const response= "N/A";
        return response;
    }    
}

let windChi= windChillCalculator(temperature,speedWind);
windChill.innerHTML= `<span>${windChi}</span>`;
