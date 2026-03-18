export function calculateAIPropertyScore(property: any): number {
  let score = 50;

  score += property.bedrooms * 5;
  score += property.bathrooms * 4;
  score += Math.min(property.features.length * 3, 15);

  const pricePerSqft = property.price / property.sqft;
  if (pricePerSqft < 1000) score += 20;
  else if (pricePerSqft < 2000) score += 10;
  else if (pricePerSqft > 5000) score -= 10;

  if (property.location.includes("Sandton")) score += 15;
  if (property.location.includes("Cape Town")) score += 10;

  if (property.status === "Active") score += 5;
  if (property.status === "Under Offer") score -= 5;

  const daysListed = Math.floor(
    (new Date().getTime() - new Date(property.listedDate).getTime()) /
      (1000 * 60 * 60 * 24),
  );
  if (daysListed < 7) score += 10;
  else if (daysListed < 30) score += 5;
  else if (daysListed > 90) score -= 10;

  return Math.min(Math.max(score, 0), 100);
}

export function calculateAIValueEstimate(property: any): {
  estimatedValue: number;
  difference: number;
  percentage: string;
  assessment: string;
} {
  const basePrice = property.price;
  const score = calculateAIPropertyScore(property);

  const multiplier = 0.9 + score / 100;

  const estimate = Math.round(basePrice * multiplier);

  const difference = estimate - basePrice;
  const percentage = ((difference / basePrice) * 100).toFixed(1);

  return {
    estimatedValue: estimate,
    difference: difference,
    percentage: percentage,
    assessment: difference > 0 ? "Undervalued" : "Overvalued",
  };
}

export function getAIMatchScore(): number {
  const scores = [85, 92, 78, 65, 88, 95, 72, 60, 90, 55, 70, 93];
  return scores[Math.floor(Math.random() * scores.length)];
}
