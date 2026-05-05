const Color={
     Primary: "RED",
     Secondary: "BLUE"
} as const;


type ValidColor=typeof Color [keyof typeof Color];

const setColor=(c: ValidColor)=>{
    return c;

}
console.log(setColor("BLUE"));
