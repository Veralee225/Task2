//each should have principal and time as keys. write a function called interest calculator
let data=
[ {principal: 2500, time: 1.8},
  {principal: 1000, time: 5},
  {principal: 3000, time: 1},
  {principal: 2000, time: 3},
];

//Interest Calculator Function

function interestCalculator(para) {
    for (let i=0; i < para.length; i++) {
        if (para[i].principal >= 2500 && para[i].time > 1 && para[1].time < 3) {
            para[i].rate = 3;

        }else if (para[i].principal >= 2500 && para[i].time >= 3) {
           para[i].rate = 4;

        } else if (para[i].principal < 2500 || para[i].time <= 1) {
            para[i].rate = 2;

        }else {
            para[i].rate = 1;
        }
        i.interest = (i.principal * i.rate * i.time)/ 100;
           interestData.push({
               'principal': i.principal,
               'rate' : i.rate,
               'time': i.time,
               'interest' : i.interest,
           });

    let interestData = [para];
    console.log(interestData);
    return interestData;
    }  
}
interestCalculator(data);