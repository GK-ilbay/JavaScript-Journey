

// funtions with rest parameters
function summation(...values){
    return values.reduce((toplam, sayı)=> toplam + sayı, 0);
};
console.log(summation(5,5,5,5,10,2));

// other type of define func
let summation2 = function(...values){
    return values.reduce((toplam, sayı)=> toplam + sayı, 0);
};
console.log(summation2(2,3,4,5,6));

//
let summation3 = (...values)=>{
    return values.reduce((sum, number)=> sum + number, 0);
};
console.log(summation3(5,6,7,8,4));

// defining nested functions (iç içe fonksiyonlar)
let sayHiTwice = ()=>{
    let sayHi = ()=>{
        console.log('Hello World');
    };
    sayHi();
    sayHi();
};
sayHiTwice();

// in javascript, funtions are like variables. They can be returned, be parameter!!!

// usage of functions with closures


