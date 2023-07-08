$(document).ready(function() {
    getData();
}).on('success.form.bv', function(e) {
    getData();
});

function getData () {
    var submit = $('button[type="submit"]');
    var users = [];
    var value;
    submit.click(function(e){
        e.preventDefault();
        $('input[type="number"], .selectpicker option:selected').each(function(e) {
        value = $(this).val();
        users.push(value); 
        })
        console.log(users);
        var totalAmount = simulateCredit(users[1], users[2], users[3]);
        printAmount(totalAmount);
        users=[];
    });
    
}

function simulateCredit(ingress, egress, numOfCuotes){
    const ingressNum = parseInt(ingress);
    const egressNum = parseInt(egress);
    const cuotesNum = parseInt(numOfCuotes);

    var netIngress = ingressNum-egressNum;
    var debtCapacity = netIngress*0.35;     
    var partialAmount = debtCapacity*cuotesNum;
    var halfAmount = partialAmount/2;
    var totalAmount = halfAmount*0.8;
    console.log("total monto aprobado:" + totalAmount);
    return totalAmount;
}

function printAmount(amount){
    $("#result > p").text(amount);
}
