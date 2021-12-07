# OOP 面向對象的三大特性

## 封裝

- private
  - 自身可調用

- protected
  - 自身可調用
  - 子類可調用

- public
  - 自身可調用
  - 子類可調用
  - 實例可調用

### 參數屬性

```typescript
// 二者等效

class Socks1 {
  constructor(private color: string) {}
}

class Socks2 {
  private color: string

  constructor(color: string) {
    this.color = color
  }
}
```

## 繼承

- extends

## 多態
