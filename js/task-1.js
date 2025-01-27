function slugify(title) {
    // title.;
    const titleChanged = title.toLowerCase().split(" ");
    return titleChanged.join("-");
    // return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
}



console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
