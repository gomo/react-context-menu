# react-es6-template

react + es6(webpack)のプロジェクトテンプレートです。フォークしてブランチでちょこっとテストするなり、丸っとコピって新規プロジェクトを作るなり、一部コピーして使うなり好きにしてください。

## インストール

```
npm install
```

## ビルド方法

gulpのdefaultタスクになっています。

```
gulp
```

でwebpackとsass両方ともビルドされます。

## Compatibility

IE9/IE10に対応させるため[ES2015 classes transform](https://babeljs.io/docs/plugins/transform-es2015-classes/)の`loose`モードでコンパイルしています。必要なければ適宜外してください。

webpack.config.js
```ｊｓ
query:
{
    presets:['es2015', 'react'],
    plugins: [["transform-es2015-classes", { "loose": true }]]
}
```
