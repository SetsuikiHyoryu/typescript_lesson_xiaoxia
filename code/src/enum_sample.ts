// 以往沒有枚舉時的做法
;(() => {
  const Direction = {
    Up: 'up',
    Down: 'Down',
    Left: 'Left',
    Right: 'Right',
  }
})()

// 使用枚舉
;(() => {
  // 数字枚舉
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }

  console.log(Direction.Up) // 0
  console.log(Direction.Down) // 1
  console.log(Direction.Left) // 2
  console.log(Direction.Right) // 3

  enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right,
  }

  console.log(Direction2.Up) // 1
  console.log(Direction2.Down) // 2
  console.log(Direction2.Left) // 3
  console.log(Direction2.Right) // 4

  enum E1 {
    A,
    B,
    C = 60 * 2,
    D = 'White Thighhighs'.length,
  }
})()

// 字符串枚舉
;(() => {
  enum Socks {
    Tighhighs = 'Thighhighs',
    Tights = 'Tights',
    Kneehighs = 'Kneehighs',
  }
})()

// 枚舉中的一些運算
;(() => {
  enum FileAccess {
    // constant members
    None, // 0
    Read = 1 << 1, // 2: 0000 0001 -> 0000 0010
    Write = 1 << 2, // 4: 0000 0001 -> 0000 0100
    ReadWrite = Read | Write, //6: 0000 0010 | 0000 0100 -> 0000 0110

    // computed member
    G = '123'.length, // 3
  }
})()
