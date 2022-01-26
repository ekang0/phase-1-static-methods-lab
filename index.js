class Formatter {
  //add static methods here
  static capitalize(string){
    return string.substr(0, 1).toUpperCase() + string.substr(1)
  };
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9 '-]/g, '')
  };

  static titleize(string){
    let newString = string.split(' ').map(word => {
      if(word === 'the' || word === 'a' || word === 'an' || word === 'but'|| word === 'of' || word === 'and' || word === 'for' || word === 'at' || word === 'by'|| word === 'from'){
      return word.toLowerCase()
      } else {
      return word.substr(0, 1).toUpperCase() + word.substr(1)
      }
      }).join(' ');
    
    return newString.substr(0, 1).toUpperCase() + newString.substr(1)
  };

}