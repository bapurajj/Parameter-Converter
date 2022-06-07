let weight=document.getElementById("weight")

weight.addEventListener("input",function()
{
    let kg=weight.value
    let pounds=document.getElementById("pounds")
    pounds.innerHTML=`pounds: ${kg * 2.205}`
})

let measure=document.getElementById("measurement")

measure.addEventListener("input",function()
{
    let feet=measure.value
    let centi=document.getElementById("centi")
    centi.innerHTML=`centi: ${feet * 30.48}`
})
  

let temperature=document.getElementById("Temperature")

temperature.addEventListener("input",function()
{
    let cel=temperature.value
    let fahren=document.getElementById("fahren")
    fahren.innerHTML=`fahren: ${(cel * 1.8)+32}`
})


