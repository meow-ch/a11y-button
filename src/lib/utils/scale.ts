export function generateMinOneMaxArray(min: number, max: number, steps: number): number[] {
  if (min > 1 || max < 1) {
    console.log(min, max);
    throw new Error("Invalid input: 'min' must be less than 1 and 'max' must be greater than 1.");
  }
  if (steps < 2) {
    throw new Error("The number of steps should be at least 2 (to include both min and max).");
  }

  const tolerance = 1e-10;
  const arr: number[] = [];
  const stepSize = (max - min) / (steps - 1);
  let insertedOne = false;

  for (let i = 0; i < steps; i++) {
    let candidate = min + i * stepSize;

    // If candidate is within tolerance of 1, use exactly 1.
    if (Math.abs(candidate - 1) < tolerance) {
      candidate = 1;
      insertedOne = true; // Mark that we've generated 1.
    }

    // If we haven't generated 1 yet and we are about to cross 1,
    // insert 1 between the last element and the current candidate.
    if (
      !insertedOne &&
      arr.length > 0 &&
      arr[arr.length - 1] < 1 &&
      candidate > 1
    ) {
      arr.push(1);
      insertedOne = true;
    }

    arr.push(candidate);
  }

  return arr;
}

