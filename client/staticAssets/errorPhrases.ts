export const errorPhrases = [
  'I looked everywhere',
  "Sorry, I can't find that",
  'It was just here...',
  "That doesn't exist",
  'Rough times',
];

export function getRandomErrorPhrase() {
  return errorPhrases[Math.floor(Math.random() * errorPhrases.length)];
}
