function Validate(options) {
  return function(value) {
    return options.indexOf(value) !== -1
  }
}

export default Validate
