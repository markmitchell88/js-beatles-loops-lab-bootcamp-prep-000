// add solution here
function theBeatlesPlay(musicians,instruments){
  var beatles = [];
  for (let i = 0; i < musicians.length; i++)
  {
    var string = `${musicians[i]} plays ${instruments[i]}`;
    beatles.push(string);
  }
  return beatles
}

function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array
}
