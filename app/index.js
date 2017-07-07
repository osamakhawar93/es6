let b = "birthday";
let c = `Happy ${b}`;
console.log(c);

let d = ['usama','hamza'];
let e = ['ahmed',...d];
console.log(e);


///////////////// Destruction assignment  ////////////////////////


// array //

let a= ["simba","zazu","ladybird"];
let [first,second] = a ;
console.log(first,second);


// object // 

let king = { hero:"mufasa", villian:"scar", vigilante:"simba"};

let {hero, villian} = king;

console.log(hero,villian);

//////////////////// Desctruction assignment ////////////////////



///// Anonymous Function in Javascript  ///////


var cheer = function(){
    console.log("This is an anonymous function which means it wont have a name!");
}


cheer();




///// Anonymous Function in Javascript  ///////

//A Function without a name 

var cheer = function(){
 
  console.log("wohooooo!");

}

cheer();


////// Arrow Function ////////


var cheer =()=>{

    console.log("woho again");
}

cheer();

let yaap =()=>{

    console.log("woho again");
}

yaap();


/////////////////////////////////

/////////////////////es6 helper methods ///////////////////////



let runs = [20,21,23,19,10,30,33];

let bigRuns = runs.filter( (n) => {
return n >20
}
);

console.log(bigRuns);



///////////////// import export data ////////////////////////





import {fellowship,add,multiply} from './fellowship';



console.log("fellow ship"+fellowship);

console.log(multiply(5,10));



///////////////// import export data ////////////////////////


/////////////////////es6 Classess ///////////////////////



class Animal{
      
      constructor(name,height){
          this.name= name;
          this.height = height;
      }

      sound(){

          console.log(`Hey im ${this.name}`);
           
      }

}


class Simba extends Animal{
 
     constructor(name,height,color){
         super(name,height);
         this.color=color;
     }

}

let lion = new Animal("mufasa",5.5);
let mufasa = new Simba("zazu",4.5,"grey");
console.log(mufasa);



class Calculator{

    static multi(a,b){
        return a*b;
    }

}


let ns = Calculator.multi(4,5);
console.log(ns);





/////////////////////es6 Classess ///////////////////////



/////////////////////es6 Prototypes ///////////////////////


function Wizard(name,house,pet){
this.name=name;
this.house = house;
this.pet = pet;
   
     this.greet =()=>{
         return `I'm ${this.name} from ${this.house}`;
     }
  
}

let Harry = new Wizard("harry potter","Gryffindor","owl");

console.log(Harry.greet());

Wizard.prototype.color;

Harry.color="red";

Wizard.prototype.add = function(){
    console.log("HEY ITS ME, the add function ");
}

console.log(Harry.add());



/////////////////////es6 Prototypes ///////////////////////

/////////////////////es6 datastructures Set ///////////////////////


let set = new Set();
set.add(5);
set.add(53);
set.add({x:50,y:60});
set.add(5);
console.log(set,set.size);
console.log(set.has(5));



let chars = 'aeioasdslksfasdsdflsdsfdz';
let char_arr = chars.split("");
let chars_set = new Set(char_arr);

console.log(chars_set);

console.log(chars_set.has("a"));


/////////////////////es6 datastructures Set ///////////////////////

/////////////////////es6 datastructures Map ///////////////////////

var map = new Map();

//map.set("key","value");

map.set("key_1","return key 1");
map.set({a:'key'},"return key 2 ");

console.log(map);


/// looping throug a map


let numArr = [[1,'hey'],[2,'you'],[3,'Man!']];
let newMap = new Map(numArr);



console.log(newMap);

for(let [key,value] of newMap.entries()){
  console.log(`${key} and value is ${value}`);
}


let string = 'asdasdsdgsddgasdfsdhfujashdfkjahsdjkasd';

let letters = new Map();


for(let i=0;i<string.length;i++){
  let letter = string[i];
  if(!letters.has(letter)){
     letters.set(letter,1);
  }else{
      letters.set(letter,letters.get(letter) +1);
      console.log(letters.get(letter));
  }
}


/////////////////////es6 datastructures Map ///////////////////////