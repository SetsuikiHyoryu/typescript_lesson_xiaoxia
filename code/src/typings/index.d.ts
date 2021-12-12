declare const jQuery: (param: string) => void

declare namespace myLib {
  const makeGreeting: (s: string) => string
  let numberOfGreetings: number

  namespace fn {
    const test: (s: string) => void
    let test1: string
  }
}

interface Socks {
  color: string
}
