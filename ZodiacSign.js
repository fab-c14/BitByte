// Define your birth month
const birthMonth = "September"; // Change this to your birth month

// Zodiac signs mapped to months
const zodiacMap = {
  January: { symbol: "♑", name: "Capricorn" },
  February: { symbol: "♒", name: "Aquarius" },
  March: { symbol: "♓", name: "Pisces" },
  April: { symbol: "♈", name: "Aries" },
  May: { symbol: "♉", name: "Taurus" },
  June: { symbol: "♊", name: "Gemini" },
  July: { symbol: "♋", name: "Cancer" },
  August: { symbol: "♌", name: "Leo" },
  September: { symbol: "♍", name: "Virgo" },
  October: { symbol: "♎", name: "Libra" },
  November: { symbol: "♏", name: "Scorpio" },
  December: { symbol: "♐", name: "Sagittarius" }
};

// Sample fortunes
const fortunes = [
  "A surprise opportunity will knock on your door soon.",
  "You’ll find clarity in a situation that’s been confusing.",
  "Someone close to you will bring unexpected joy.",
  "Take a leap of faith—luck is on your side.",
  "Your creativity will shine brighter than ever.",
  "A peaceful moment will help you recharge and refocus.",
  "Trust your instincts—they’re sharper than you think.",
  "A small act of kindness will ripple into something big."
];

// Get zodiac info
const zodiac = zodiacMap[birthMonth];

// Pick a random fortune
const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

// Output result
console.log(`Your sign is ${zodiac.symbol} ${zodiac.name}.`);
console.log(`🔮 Your fortune: ${randomFortune}`);
