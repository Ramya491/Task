function actualPrice(costPrice) {
    // Calculate the discount (20% of the cost price)
    let discount = costPrice * 0.20;
    
    // Subtract the discount from the cost price to get the selling price
    let sellingPrice = costPrice - discount;
    
    // Display the selling price
    console.log("The selling price after 20% discount is: $" + sellingPrice.toFixed(2));
}

// Example usage:
actualPrice(100);  // If the cost price is $100

