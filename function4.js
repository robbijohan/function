
let processSentence = function(name1,name2,name3,name4){
   return 'Nama saya ' + name1 + ' ,umur saya ' + name2 + ' tahun,alamat saya di ' + name3 + '  ,dan saya punya hobi yaitu ' + name4
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

let fullSentence = processSentence(name,age,address,hobby)
console.log(fullSentence)