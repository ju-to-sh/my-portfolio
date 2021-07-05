const Witticism = () => {
  let words = ['apple', 'banana', 'grape'];
  let random = Math.floor( Math.random() * words.length );

  return words[random]
}

export default Witticism;
