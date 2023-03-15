function carbsPerCookedGram(carbs, reference) {
  return carbs / reference;
}

function cookedRatio(cookedWeight, dryWeight) {
  return cookedWeight / dryWeight;
}

export function carbsPerDryGram(carbs, reference, dryWeight, cookedWeight) {
  return (
    carbsPerCookedGram(carbs, reference) * cookedRatio(cookedWeight, dryWeight)
  );
}

export function carbsPerPortion(
  carbs,
  reference,
  dryWeight,
  cookedWeight,
  dryPortion
) {
  return Number(
    (
      carbsPerDryGram(carbs, reference, dryWeight, cookedWeight) * dryPortion
    ).toFixed(1)
  );
}

export function dosePerPortion(
  carbs,
  reference,
  dryWeight,
  cookedWeight,
  dryPortion,
  antecedent
) {
  return Math.round(
    carbsPerPortion(carbs, reference, dryWeight, cookedWeight, dryPortion) /
      antecedent
  );
}
