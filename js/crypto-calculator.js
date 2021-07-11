



$(document).ready(function(){
    $("#loss").hide();
    $("#win").hide();
    $("#btn").click(function(){
        var buyPrice = $("#buy").val()
        var amount = $("#amount").val()
        var sellPrice = $("#sell").val()
        var percentage = $("#percentage").val()

        console.log(buyPrice)
        console.log(amount)
        console.log(sellPrice)
        console.log(percentage)

        var difference = sellPrice - buyPrice
        var profit = difference * ((amount*percentage)/100)
        var value = Math.round(profit)
        console.log(value)

        var alert = document.getElementById("alert")

        if(value > 0){
            alert.innerHTML = "+" + value
            alert.className = "alert alert-success"
        }else if(value < 0){
            alert.innerHTML =  value
            alert.className = "alert alert-danger"
        }else{
            alert.innerHTML = "+- " + value
            alert.className = "alert alert-secondary"
        }
        


        console.log(value)
    })
});