// Never
;(() => {
  const throwError = (message: string): never => {
    throw new Error(message)
  }

  const doSome = (): void => {
    throwError('error')
  }
})()

// ---

// 參數屬性
;(() => {
  class Socks1 {
    constructor(private color: string) {}
  }

  class Socks2 {
    private color: string

    constructor(color: string) {
      this.color = color
    }
  }
})()

// ---

// 類的存取器
;(() => {
  class Socks {
    private _color: string = 'white'

    get color(): string {
      return this._color
    }

    set color(color: string) {
      this._color = color
    }
  }

  const socks = new Socks()
  socks.color = 'black'
  console.log(socks.color) // black
})()

// ---

// 抽象類
;(() => {
  abstract class Socks {
    abstract putOn(): void
  }

  // new Socks() // Cannot create an instance of an abstract class.ts(2511)

  class Thighhighs extends Socks {
    putOn() {
      console.log('put on thighhighs')
    }
  }
})()

// ---

// 類類型接口
;(() => {
  interface Socks {
    color: string
    putOn(color: string): void
  }

  class Thighhighs implements Socks {
    color = 'white'

    putOn(color: string): void {
      console.log(`poOn ${color} Thighhighs`)
    }
  }
})()

// ---

// 混合類型
;(() => {
  interface Socks {
    (user: string): void
    color: string
    putOff(): void
  }

  // function putOnSocks(): Socks {
  const putOnSocks = (): Socks => {
    const socks = <Socks>(user: string) => {}
    socks.color = 'white'

    socks.putOff = () => {
      console.log('put off socks')
    }

    return socks
  }

  const putOnThighhighs = putOnSocks()
  putOnThighhighs('loli')
  console.log(putOnThighhighs.color) // white
  putOnThighhighs.putOff()
})()

// ---

// 泛型
;(() => {
  const getSocks = <T>(socks: T): T => {
    return socks
  }
})()

// 泛型約束
interface LenthWise {
  length: number
}

const doSome = <T extends LenthWise>(some: T): T => {
  console.log(some.length)
  return some
}

// 交叉類型
const extend = <T, U>(first: T, second: U): T & U => {
  const result = {} as T & U

  for (let key in first) {
    ;(result as any)[key] = first[key]
  }

  for (let key in second) {
    if (!(result as any).hasOwnProperty(key)) {
      ;(result as any)[key] = second[key]
    }
  }

  return result
}

// ---

// 拓展運算符
// 此二者等效
declare function putOnSocks(...arguments: [string, string]): void
declare function putOnSocks2(type: string, color: string): void
