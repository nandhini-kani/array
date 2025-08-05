


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

function searchproduct(){
var searchquery=document.getElementById("searchquery").value;
 
const filterpro=productdata.filter(product=>{
    return product.productname.toLowerCase().includes(searchquery.toLowerCase())
})

console.log(filterpro);
}