// Your code here
export function isPalindrome(word) {
    if (typeof word !== "string") {
      throw new Error("Invalid input: input must be a string");
    }
    if (word.length === 0) {
      return false; // Special case for empty strings
    }
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Invalid input: only alphabetic characters are allowed");
    }
  
    const normalizedWord = word.toLowerCase();
    const reversedWord = normalizedWord.split("").reverse().join("");
    return normalizedWord === reversedWord;
  }
  