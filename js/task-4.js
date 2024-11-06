function getShippingCost(country) {
    let message;
  
  switch(country){
    case "China":
      price = 100;
      message = `Shipping to China will cost 100 credits`;
      break;
  
    case "Chile":
      price = 250;
      message = `Shipping to Chile will cost 250 credits`;
      break;
  
    case "Australia":
      price = 170;
      message = `Shipping to Australia will cost 170 credits`;
      break;
  
    case "Jamaica":
      price = 120;
      message = `Shipping to Jamaica will cost 120 credits`;
      break;
      default : 
  message = `Sorry, there is no delivery to your country`;
  }
    
    return message;
  }
  console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 