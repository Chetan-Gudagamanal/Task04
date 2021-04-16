req=new XMLHttpRequest();
let url="https://restcountries.eu/rest/v2/all"
req.open("GET",url,true);
req.send();
req.onload=function (){
    let data=JSON.parse(req.response);

    //countries in Asia using filter function
    console.log("*************** countries in Asia are *******************")
    let contriesInAsia=data.filter((ele)=>ele["region"]=="Asia")
    for(i=0;i<contriesInAsia.length;i++){
        console.log(contriesInAsia[i]["name"])
    }
    console.log("*************************************************************")


    //countries with population with less then 2 lac using filter function
    console.log("*************** countries with population with less then 2 lac are *******************")
    let populationLessThen2Lac=data.filter((ele)=>ele["population"]<200000);
    for(i=0;i<populationLessThen2Lac.length;i++){
        console.log(populationLessThen2Lac[i]["name"]+"  "+populationLessThen2Lac[i]["population"])
    }
    console.log("************************************************************************")


    //print name, capital ,flag using foreach function
    console.log("*************** name, capital ,flag details of countries *******************")
    data.forEach(ele => console.log(ele["name"]+" , "+ele["capital"]+" , "+ele["flag"]));
    console.log("************************************************************************")


    //print total population of the countries using reduce function
    console.log("*************** total population of the countries *******************")
    let totalPopulation=data.reduce((a,ele)=> a + +ele["population"],0)
    console.log(totalPopulation);
    console.log("************************************************************************")


    //print countries which use dollers as currency
    console.log("*************** countries which use dollers as currency *******************")
    let countriesWtCurDoller=data.filter((ele)=>{
        for(i=0;i<ele["currencies"].length;i++){
            if(ele["currencies"][i]["code"]=="USD"){
                return true;
            }
        }
    });
    countriesWtCurDoller.forEach(ele => console.log(ele["name"]));
    console.log("************************************************************************")

}