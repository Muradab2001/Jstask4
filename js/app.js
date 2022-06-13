var iphone={
 marka:"iphone11",
 il:2018,
 reng:"qara"
}
var samsung={
  marka:"note7",
  il:2019,
  reng:"ag"
}
var student ={
  fullmobile: function(){
    return `markasi: ${this.marka} buraxilis ili:${this.il} rengi:${this.reng}`
  }
}
console.log(student.fullmobile.call(iphone));
console.log(student.fullmobile.apply(samsung));
