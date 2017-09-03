
function getprice(sqft, zipcode){
    var arraysqft = [10000,14500,15000,16000,16500,19000,20000,24000,25000,29000,30000,35000,40000,45000,100000]
    var arraymonthly =[1863,2448.37,3048.51,3094.27,3394,3694,3694,4294.55,4294.55,5548,5747,6388,7280,7280,14609]
    var effectivedays = [122.4185,152.4255,154.7135,169.7,184.7,184.7,214.72750000000002,214.72750000000002,277.4,287.35,319.4,364,364,730.45];
    n = arraymonthly.length;
    console.log("arraymonthly's length is:", n);
    for(i=0;i < arraymonthly.length ; i++){
        effectivedays[i] = arraymonthly[i]/20;
        //        console.log("For size of: " + arraysqft[i] + " For monthly price:  " + arraymonthly[i]," For price per day:  "+ effectivedays[i]);
}
    //console.log(effectivedays);
}

getprice(10000, 95148);

function qprice(sqft){
    sqftmultiplier = 0.1407;
    intercept = 993.8099;
    return sqft * sqftmultiplier + intercept;
}

var arraymonthly =[1863,2448.37,3048.51,3094.27,3394,3694,3694,4294.55,4294.55,5548,5747,6388,7280,7280,14609]
qprice(10000)
// console.log("This is the quoted price", arraymonthly);
// console.log("This is the fit line", qprice(10000), qprice(14500), qprice(15000), qprice(16000), qprice(19000), qprice(20000), qprice(25000));

// console.log(arraymonthly[0], qprice(10000), arraymonthly[1], arraymonthly[2], arraymonthly[3], arraymonthly[4]. arraymonthly[5], arraymonthly[6])

var arraysqft = [10000,14500,15000,16000,16500,19000,20000,24000,25000,29000,30000,35000,40000,45000,100000]

for(i=0; i<arraymonthly.length; i++){
    //qprice(arraymonthly[i])
    console.log("This is the quoted price: "+ arraymonthly[i], "This is the line price "+ qprice(arraysqft[i]), "This is the relevant sqft: " + arraysqft[i]);
}

