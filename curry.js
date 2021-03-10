
const rec = (f, args) => {
  if (args.length > f.length) {
    throw new Error(`Expected ${f.length} arguments, received: ${args.length}`)
  }
  if (args.length === f.length) {
    return f(...args)
  }
  return function () {
    return rec(f, [...args, ...arguments])
  }
}

const curry = f => {
  if (f.length === 0) {
    return f
  }
  return function () {
    return rec(f, [...arguments])
  }
}

exports.curry = curry
