//console.log(process.argv);

var sum = 0;
var arraylength = process.argv.length;

for(i=2 ; i < arraylength; i++) {

    sum += Number(process.argv[i]);


}
//console.log(process.argv.length);

console.log(sum);
