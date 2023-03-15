import { carbsPerDryGram, carbsPerPortion, dosePerPortion } from "carbman";

describe("carbsPerDryGram", function () {
  it("does the reference case", function () {
    expect(Number(carbsPerDryGram(32.3, 100, 90, 200).toFixed(3))).toEqual(
      0.718
    );
  });
});

describe("carbsPerPortion", function () {
  it("does the reference case", function () {
    expect(carbsPerPortion(32.3, 100, 90, 200, 150)).toEqual(107.7);
  });
});

describe("dosePerPortion", function () {
  it("does the reference case", function () {
    expect(dosePerPortion(32.3, 100, 90, 200, 200, 5)).toEqual(29);
  });
});
