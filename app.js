// console.log("hello");

// class Exampple{
//     public static void main(String [] args){

//     }
// }

// let sum = run(12,23);

// console.log(sum);

// function run(x, y){
//     return x+y;
// }

// let customer = {
//     name:"saman",
//     age:12,
//     address:"gampaha"
// }

// let customer2 = {
//     name:"kamal",
//     age:20,
//     address:"anuradhapura"
// }

// console.log(customer);
// console.log(customer2);


// class Customer{
   
//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }
//     setName(name) {
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }
// }

// let customer= new Customer(125,20,"gampaha");

// let customer2= new Customer("kamal",21,"anuradhapura");

// new Customer();

// console.log(customer.getName());
// customer2.setName("sumanapala");
// console.log(customer2);


// let numbers = [
//     10,
//     "20",
//     30,
//     true,
//     {
//         name:"saman",
//         age:20,
//         address:"gampaha"
//     },
//     60
// ];

// console.log( numbers);

// let customers = [
//     {
//         name:"saman",
//         age:"12"
//     },
//     {
//         name:"kamal",
//         age:"20"
//     },
//     {
//         name:"vimal",
//         age:"32"
//     },
//     {
//         name:"nimal",
//         age:"15"
//     },
//     {
//         name:"sunil",
//         age:"50",
//         address:"gampaha"
//     },
//     {
//         name:"ranil",
//         age:"30"
//     }
// ]

// for(let i = 0; i<customers.length; i++){
//     console.log(customers[i].name +" | "+ customers[i].age);
//     console.log();
// }

// let numbers = [5,8,9,12,1,7,8,2,3,2]

// let words = ["bggdf","fdsf","asdf","rrgb","csdf","dfdg","zxasd","vsd","po","re"]

// numbers.push(100);
// numbers.push(200);

// numbers.pop();

// console.log(numbers.sort());

// console.log(words.sort());

// document.write("Hello iCET..");

// let name = "nimal";

// function btnClick(){
//     document.getElementById("h1").innerText="Saman";
//     document.getElementById("sampleDiv").innerHTML=`<h1>${name}<h1>`
// }


let customers = [
    {
        name:"saman",
        age:"12",
        address:"kurunegala"
    },
    {
        name:"kamal",
        age:"20",
        address:"panadura"
    },
    {
        name:"vimal",
        age:"32",
        address:"kurunegala"
    },
    {
        name:"nimal",
        age:"15",
        address:"nuwara"
    },
    {
        name:"sunil",
        age:"50",
        address:"gampaha"
    },
    {
        name:"ranil",
        age:"30",
        address:"mathara"
    }
]




function btnClick(){
    addCustomer();
    loadTable();
}

function addCustomer(){
   let name =  document.getElementById("txtName").value;
   let age =  document.getElementById("txtAge").value;
   let address =  document.getElementById("txtAddress").value;

   console.log(name+"|"+age+"|"+address);

   customers.push({
    name,
    age,
    address
   })
}


function loadTable(){
    let tblCustomers = document.getElementById("tblCustomers");


    let tabelBody =`
           <tr>
            <th>Name</th>
            <th>age</th>
            <th>Address</th>
        </tr>
                    `;
    
    
    customers.forEach(data =>{
        tabelBody += `<tr> 
                        <td>${data.name}</td>
                        <td>${data.age}</td>
                        <td>${data.address}</td>
                    </tr>`
    });

    console.log(tabelBody);
    tblCustomers.innerHTML=tabelBody;
}




// function run(){
//     console.log("run");
// }

// let run = function(){
//     console.log("run");
// }

// let run = () => {
//     console.log("run");
// }

// let run = () => console.log("run");


// (data) => console.log("run");



















