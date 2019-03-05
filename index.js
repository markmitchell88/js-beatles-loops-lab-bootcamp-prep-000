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
