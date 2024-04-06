class UberPriceCalculator {
    constructor(baseFarePerKm, costPerMinute, surgeMultiplier) {
      this.baseFarePerKm = baseFarePerKm;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice(distanceInKm, timeInMinutes, surgeFactor = 1) {
      const surgePriceMultiplier = this.surgeMultiplier * surgeFactor;
      const basePrice = this.baseFarePerKm * distanceInKm;
      const timePrice = this.costPerMinute * timeInMinutes;
      const totalPrice = (basePrice + timePrice) * surgePriceMultiplier;
      return totalPrice;
    }
  }
  
  // Example usage:
  const baseFarePerKm = 0.5; // Base fare per kilometer in dollars
  const costPerMinute = 0.1; // Cost per minute in dollars
  const surgeMultiplier = 1.5; // Surge pricing multiplier
  
  const calculator = new UberPriceCalculator(baseFarePerKm, costPerMinute, surgeMultiplier);
  
  // Calculate price for a 10 km ride taking 15 minutes with no surge pricing
  const priceWithoutSurge = calculator.calculatePrice(10, 15);
  console.log("Price without surge:", priceWithoutSurge.toFixed(2));
  
  // Calculate price for the same ride with a surge factor of 2 (i.e., double the normal price)
  const priceWithSurge = calculator.calculatePrice(10, 15, 2);
  console.log("Price with surge:", priceWithSurge.toFixed(2));
  