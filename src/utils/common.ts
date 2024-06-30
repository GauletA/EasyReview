

export function shuffleArray(inputArray: any[]) {
    // Copy the array to avoid modifying the original
    const shuffledArray = [...inputArray];
  
    // Fisher-Yates algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at indices i and j
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  