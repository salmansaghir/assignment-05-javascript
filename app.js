//-------ARRAY AND LOOP---------
//Q1
// var arr;
// arr=[[]];
//Q2
// var arr;
// arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// // document.write(`${arr[0].join(" ")}<br>${arr[1].join(" ")}<br>${arr[2].join(" ")}`)
// for(var i=0; i<=3; i++){
//     document.write(arr[i].join(" ")+"<br>")
// }
//Q3
// for(var i=1; i<=10; i++){
//     document.write(i+"<br>")
// }
//Q4
// var table=+prompt("Enter a number of table")
// for(var i=1; i<=10; i++){
//     document.write(`${table} * ${i} = ${table*i} <br>`)
// }
//Q4.b
// var table=+prompt("Enter the number of table")
// var rang=+prompt("Rang of the table ")
// for(var i=1; i<=rang; i++){
//     document.write(`${table} * ${i} = ${table*i} <br>`)
// }
//Q5
// var fruits = ["apple", "banana", "mango", "orange","strawberry"]
// document.write(fruits +"<br>")
// for(var i=0; i<=4; i++)
// document.write(`<br> The Element at Index ${i} ${fruits[i]}`)
//Q6
// document.write("Counting:<br>")
// for(var i=1; i<=15; i++){
//     document.write(i,",")
// }
// document.write("<br>Reverse Counting:<br>")
// for(var i=10; i>=1; i--){
//     document.write(i,",")
// }
// document.write("<br>Even:<br>")
// for(var i=0; i<=20; i+=2){
//     document.write(i,",")
// }

// document.write("<br>Odd:<br>")
// for(var i=1; i<=20; i+=2){
//     document.write(i,",")
// }

// document.write("<br>series:<br>")
// for(var i=2; i<=20; i+=2){
//   document.write(i+"K,")
// }

//Q7
// var a=['cake','apple pie','cookie','chips','patties']
// var find=prompt('Enter the bakery item name')
// var match='no'
// for(var i=0; i<a.length; i++){
//     if(find===a[i]){
//         match='yes'
//         alert(find+'product is in arry index of'+i)
//         break
//     }
// }
// if(match =='no'){
//     alert(find+'product is not found')
// }

//Q8

// var arr=[24,53,78,91,12]
// var largest=arr[0]
// for( var i=0; i<arr.length; i++){
//     if(arr[i]>largest){
//         largest=arr[i]
//     }
// }
// console.log("The largest number of in arry is:"+largest)

//Q9

// var arr=[24,53,78,91,12]
// var smallest=arr[0]
// for(var i=0; i<arr.length; i++){
//     if(arr[i]<smallest){
//  smallest=arr[i]
//     }
// }
// console.log("The smallest number of in arry is: "+smallest)

//Q10

// for (var i=5; i<=100; i=i+5){
//     console.log(i)
// }