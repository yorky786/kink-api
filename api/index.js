const express = require('express');
const app = express();

const kinks = {
  "leather": { "desc": "Wear it, whip it, live it.", "challenge": "Strut in leather for 5 mins tonight." },
  "bondage": { "desc": "Ropes are your new BFF.", "challenge": "Tie a knot, post it on X." },
  "pup": { "desc": "Bark if you’re into it.", "challenge": "Howl at the moon—record it." },
  "feet": { "desc": "Toes are the new gold.", "challenge": "Massage your own feet, rate it 1-10." },
  "spank": { "desc": "Cheeks go red, hearts go wild.", "challenge": "Slap a pillow, count to 10." }
};

app.get('/kink/:name', (req, res) => {
  const kink = kinks[req.params.name.toLowerCase()] || { error: "Kink not found—go wild anyway!" };
  res.json(kink);
});

app.get('/random', (req, res) => {
  const allKinks = Object.keys(kinks);
  const randomKink = kinks[allKinks[Math.floor(Math.random() * allKinks.length)]];
  res.json(randomKink);
});

app.listen(process.env.PORT || 3000, () => console.log('Kink-o-Tron 3000 is alive!'));