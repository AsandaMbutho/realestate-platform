import { propertiesData } from "./TS_propertiesData";

export function getAIRecommendation() {
  const sortedProperties = [...propertiesData].sort((a, b) => {
    const scoreA =
      (b.bedrooms * 3 + b.bathrooms * 2 + b.features.length * 1.5) /
      (b.price / 1000000);
    const scoreB =
      (a.bedrooms * 3 + a.bathrooms * 2 + a.features.length * 1.5) /
      (a.price / 1000000);
    return scoreA - scoreB;
  });

  const topProperties = sortedProperties.slice(0, 3);

  const reasons = [
    "Best value for money based on features and location",
    "High potential for appreciation in growing area",
    "Excellent rental yield potential",
    "Premium location with strong demand",
    "Modern amenities at competitive price",
    "Unique features that increase value",
  ];

  const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

  return {
    recommendedProperties: topProperties,
    reason: randomReason,
    timestamp: new Date().toLocaleString(),
  };
}

export function getAIChatResponse(message: string) {
  const responses = [
    "Based on your preferences, I recommend properties in Sandton for their strong growth potential.",
    "Cape Town properties offer excellent lifestyle value and steady appreciation.",
    "Consider investment properties with rental potential for passive income.",
    "For family living, look for properties with gardens and security features.",
    "Luxury properties in prime locations typically hold value well during market fluctuations.",
    "Studio apartments in trendy areas like Melville have high rental demand.",
  ];

  return {
    response: responses[Math.floor(Math.random() * responses.length)],
    suggestedProperties: propertiesData.slice(0, 2),
  };
}
