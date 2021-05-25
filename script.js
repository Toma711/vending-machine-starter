var money = 10.00;
var cokes = 0;
var chips = 0;

$(".buy").click(function() {
  
  let item = $("input").val();
  item = item.toLowerCase();
  
  if(((item === "chip") || (item === "chips")) && (money >= 1.25)){
    $(".message").text("Thank you for purchasing chips!");
    money = money - 1.25;
    chips = chips + 1;
    $(".money").text("I have $" + money + ", " + cokes + " cokes, " + chips + " chips!");
  } else if((item === "coke") && (money >= 1.5)){
    $(".message").text("Thank you for purchasing a coke!");
    money = money - 1.5;
    cokes = cokes + 1;
    $(".money").text("I have $" + money + ", " + cokes + " cokes, " + chips + " chips!");
  } else if(money <= 1){
    $(".message").text("Sorry, you don't have enough money");
  } else {
    $(".message").text("Please select a valid food item");
  }
  
});
