function CalculateSum()
{
let a=0;
for(let i=0;i<1000000;i++){
    a=a+i;
}
return a;
}
const beforeFn=new Date();
const beforeTimeInMs=beforeFn.getTime();
CalculateSum();
const afterFn=new Date();
const afterTimeInMs=afterFn.getTime();
Totaltime=afterTimeInMs-beforeTimeInMs;
console.log('Total time took to execute:'+Totaltime);
