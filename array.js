console.log("Array successfully");

var productdata=[
    {   Name:"JN",
        productname:"liondates",
        quality:"good",
        stock:"60%",
       
    },
    {
         Name:"JN",
        productname:"redwinshop",
        quality:"Average",
        stock:"30%",
    },
    {
         Name:"JN",
        productname:"books",
        quality:"good",
        stock:"100%",
    },
       {
         Name:"JN",
        productname:"wheat",
        quality:"good",
        stock:"80%",
    },
       {
         Name:"JN",
        productname:"sunscreen",
        quality:"good",
        stock:"100%",
    },
       {
         Name:"JN",
        productname:"hair oil",
        quality:"good",
        stock:"70%",
    },
       {
         Name:"JN",
        productname:"shampoo",
        quality:"good",
        stock:"50%",
    },
       {
        Name:"JN",
        productname:"water bottel",
        quality:"Average",
        stock:"30%",
    },
       {
        Name:"JN",
        productname:"detergent",
        quality:"good",
        stock:"40%",
   
    },
       {
        Name:"JN",
        productname:"rice",
        quality:"good",
        stock:"90%",
    },
       {
        Name:"JN",
        productname:"grains",
        quality:"good",
        stock:"40%",
    },
       {
        Name:"JN",
        productname:"bescuts",
        quality:"Average",
        stock:"70%",
    },
]

productdata.push({
      Name:"JN",
        productname:"fish",
        quality:"Average",
        stock:"70%",
})

productdata.push({
      Name:"JN",
        productname:"egg",
        quality:"good",
        stock:"100%",
})
//map
productdata.map((productname,index)=>{
    console.log("index =",index);
    console.log("productname =",productname)
})

let formatproductdata = productdata.map(product=>{
    return{
        fullname :`${product.Name} ${product.productname}`,
        stock:product.stock,
        isAdult:product.stock >="50%"
    }
})




//find
let findproductname=productdata.find(name=>{
    return name.productname === "bescuts"
})

let findsun=productdata.find(sun=>{
    return sun.productname === "sunscreen"
})


//filter
let above50percentage=productdata.filter(stock=>{
    return stock.quality >= "50%"
})

let quality=productdata.filter(names=>{
    return names.quality === "Average"
})

let qualitygood=productdata.filter(names=>{
    return names.quality === "good"
})

//forEach
productdata.forEach(p=>
    console.log("productname",p.productname)
);

productdata.forEach(stock=>(
    console.log("stock",stock.stock)
))


//reduse

let totalStock = productdata.reduce((sum, p) => {
  return sum + parseInt(p.stock); // Remove "%" and add
}, 0);
console.log("total stock  =",totalStock + "%");

//sort

let sorted = productdata.sort((a, b) => a.productname.localeCompare(b.productname));
console.log("stored :",sorted);

//FindIndex
let index = productdata.findIndex(p => p.productname === "shampoo");
console.log("shampoo =",index); // e.g., 2

let indexof=productdata.findIndex(p=> p.productname === "wheat");
console.log("wheat :",indexof)

console.log("productdata =",formatproductdata)
console.log("productname =",findproductname)
console.log("sunscreen =",findsun)
console.log("stock",above50percentage)
console.log("Average quality =",quality)
console.log("good quality =",qualitygood)
console.log("poductname")