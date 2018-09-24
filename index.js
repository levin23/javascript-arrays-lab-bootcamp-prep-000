// Add your functions and code here
destructivelyAppendKitten(name){
  kitten.push(name)
}

destructivelyPrependKitten(name){
  kitten.shift(name)
}

destructivelyRemoveLastKitten(){
  kitten.pop()
}

destructivelyRemoveFirstKitten(){
  kitten.unshift()
}

appendKitten(name){
  return kitten.concat(name)
}

prependKitten(name){
  return [...kitten, name]
}

removeLastKitten(){
  return kitten.slice(0,kitten.length-1)
}

removeFirstKitten(){
  return kitten.pop()
}

destructivelyRemoveFirstKitten(){
  kitten.unshift()
}

destructivelyRemoveFirstKitten(){
  kitten.unshift()
}