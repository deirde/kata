export function sum (...args) {
  return Object.assign(
    sum.bind(null, ...args),
    { valueOf: () => args.reduce((a, c) => a + c, 0) }
  )
}
