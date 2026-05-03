interface Developer <T,X=null>{
    name: string,
    salary: number,
    device: {
        brand: string,
        model: string,
        releaseYear: string
    }
    smartWatch: T;
    Bike?: X;
}


type BrandCaraWAtch={
     heartRate: string, 
     stopWatch: boolean,

}

type AppleWactch={
     heartRate: string, 
     callSupport: boolean,
     calculator: boolean,
     airFeatures: boolean,

}
const poorDeveloper: Developer<BrandCaraWAtch,{
     brand: "Yamaha",
     enginer_capacity: "200cc"
}>={
     name: "MR Poor",
     salary: 20,
     device: {
         brand: "HP ",
         model: "Elitebook g6",
         releaseYear: "2020"
     },
     smartWatch: {
         heartRate: "120",
         stopWatch: true
     }
}


const richDeveloper: Developer<AppleWactch>={
     name: "MR Poor",
     salary: 2000,
     device: {
         brand: "HP22 ",
         model: "Elitebook g6",
         releaseYear: "2027"
     },
     smartWatch: {
         heartRate: "120",
         callSupport: true,
         calculator: true,
         airFeatures: true
     }
}