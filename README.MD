# 小夏老師 TypeScript 教程

## 視頻地址

※ 進階篇的内容已經包含在第一個視頻中了

- 【全网首发:更新中】typescript手册从零3天全面通:  
  <https://www.bilibili.com/video/BV1MZ4y157EP>

- 【全网首发:更新中】typescript手册从零3天全面通--进阶篇:  
  <https://www.bilibili.com/video/BV185411574h>

## 說明

- 這個筆記衹記録了我沒掌握的或者掌握得不牢固的知識點，初學者想學習完整内容請自行觀看視頻。
- `code/src/note.ts` 是 `note` 中的筆記記録的代碼块的實際寫出來的效果。
- 一些我能肯定沒有疑問的代碼块沒有寫在 `code/src/note.ts` 中。

## 在空白文件夾中初始化 TypeScript

### 安裝

```shell
npm install typescript

# 確認是否安裝成功
tsc -v
```

### 創建配置文件

```shell
tsc --init
```

#### 常用配置

```json
// tsconfig.json

{
  "compilerOptions": {
    "outDir": "./", // 文件編譯後放置的位置
    "rootDir": "./", // 待編譯文件放置的位置。設置此項後可以直接使用 `tsc` 編譯，不需要指定文件。
  }
}
```
