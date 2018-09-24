// Add your functions and code here
function destructivelyAppendKitten(name){
  kitten.push(name)
}

function destructivelyPrependKitten(name){
  kitten.shift(name)
}

function destructivelyRemoveLastKitten(){
  kitten.pop()
}

function destructivelyRemoveFirstKitten(){
  kitten.unshift()
}

function appendKitten(name){
  return kitten.concat(name)
}

function prependKitten(name){
  return [...kitten, name]
}

function removeLastKitten(){
  return kitten.slice(0,kitten.length - 1)
}

function removeFirstKitten(){
  return kitten.slice(1,kitten.length)
}