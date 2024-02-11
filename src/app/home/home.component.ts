import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName:string = "Ahmed";
  userAge:number = 30;
  imgSource:string = "./assets/images/work-1.jpg";
  imgWidth:number = 200;
  welcome():void{
    alert("Hello Ahmed")
  }
  sayHello():void{
    alert("Hello Ahmed")
  }
  work():void{
    console.log("hello key")

  }
  eat(eventInfo:any):void{
    console.log(eventInfo)

  }

  // ternary operator
  // condition ? true : false
  onSale:boolean = true;
  price:number = 300;

  friends:string[]=["Ahmed", "Ali" , "Usama" , "Bahnasy"];
  // user:any ={name:"ahmed" , age:30 , salary:3000};
  addFriend():void{
    this.friends.push("menisssy")

   
  }
// from interface file


users:User[] = [
  {name:"Ahmed" , age:30 , salary:3000},
  {name:"Ali" , age:31 , salary:4000},
  {name:"Usama" , age:28 , salary:6000},
  {name:"Walid" , age:27 , salary:5000},
]

products:any = [
  {name:"product-1" , price:3000 , onSale:true , imagePath:"./assets/images/1-1.jpg"},
  {name:"product-2" , price:7000 , onSale:false , imagePath:"./assets/images/1-2.jpg"},
  {name:"product-3" , price:5000 , onSale:true , imagePath:"./assets/images/1-3.jpg"},
  {name:"product-4" , price:9000 , onSale:false , imagePath:"./assets/images/1-4.jpg"},
  {name:"product-5" , price:6000 , onSale:true , imagePath:"./assets/images/1-1.jpg"},
  {name:"product-6" , price:8000 , onSale:true , imagePath:"./assets/images/1-5.jpg"},
]
searchTerm:string ="";
// every time i will call the function will display what inside the input
hamada(){
  console.log(this.searchTerm);
}
}
