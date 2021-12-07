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
