function chunkString(string, chunkSize){
    let array = [];
    for (let i = 0; i < string.length; i += chunkSize) {
    array.push(string.slice(i, i + chunkSize));
    }
    let result = []
    array.forEach((item, index) => {
      if(index === 0){
        return result.push(item + "...")
      }
      if(index === array.length - 1){
        return result.push("..." + item)
      }
      return result.push("..." + item + "...")
    })
    return result;
}
module.exports = {
  chunkString
}