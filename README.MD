# 小夏老師 TypeScript 教程

## 視頻地址

- 【全网首发:更新中】typescript手册从零3天全面通:  
  <https://www.bilibili.com/video/BV1MZ4y157EP>

- 【全网首发:更新中】typescript手册从零3天全面通--进阶篇:  
  <https://www.bilibili.com/video/BV185411574h>

## 初始化原生 TypeScript

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
