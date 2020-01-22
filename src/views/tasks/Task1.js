function filterText(symbols) {
   // filtered string, return only letters
   const letters = symbols.toLowerCase().replace(/[^a-xz]/g, "");
   // считаем в объект кол-во вхождений каждой буквы, используя ее как ключ
   const eachLetter = {};
   for (const star of letters) eachLetter[star] = (eachLetter[star] || 0) + 1;
   // преобразуем полученный объект в массив объектов
   const result = Object.keys(eachLetter).map(star => ({
      letter: star,
      count: eachLetter[star]
   }));

   return result.sort((a, b) => b.count - a.count);
}

const text =
   "In the year 2045, the real world is a harsh place. The only time Wade Watts (Tye Sheridan) truly feels alive is when he escapes to the OASIS, an immersive virtual universe where most of humanity spends their days. In the OASIS, you can go anywhere, do anything, be anyone-the only limits are your own imagination.";
// Go for Array and write only for first elements
const filteredText = filterText(text).splice(0, 5);

const pretty = filteredText
   .map(
      (obj, i) =>
         `${i + 1}: letter: '${obj.letter}'\n   meet ${obj.count} times`
   )
   .join("\n");

console.log(pretty);
