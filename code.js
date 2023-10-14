const removeStrings = str=>{
  return str.replace(/[abc]/gi,"");
};
console.log(removeStrings(how are you brother?));
output:"how re you rother?"
