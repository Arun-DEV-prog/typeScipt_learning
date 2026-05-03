let anything : any;
anything=33;

(anything as number).toFixed(3);


const kgToGMConverter=(input: string | number )=>{
  
      if( typeof input=="number"){
         return input* 1000;
      }else if( typeof input === "string"){
          const [value]=input.split(" ");
         return `Converted output is ${Number(value)*100} kg`
      }

}


const result1=kgToGMConverter(2) as number;

const result2=kgToGMConverter("3 kg");


console.log(result1, result2);



 type CustomError={
     message: string;
 }

try{

}catch{
     console.log((error as CustomError).message)
}
