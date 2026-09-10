# React-useReducer-NotificationApp

Reactの`useReducer`と`useContext`を使用して、複数コンポーネントで通知状態を共有する練習用アプリです。

## 概要

通知の追加・削除を行える簡易的なNotificationシステムを実装しています。

通知状態は`useReducer`で管理し、`useContext`を使用して複数のコンポーネントから共有しています。

通知の種類に応じて、TailwindCSSで表示色を変更しています。

## 使用技術

* React
* TypeScript
* useReducer
* useContext
* TailwindCSS
* uuid

## 機能

* 通知の追加

  * Info
  * Success
  * Error
* 通知の削除
* 通知タイプごとのデザイン変更
* Contextによる通知状態の共有

## 通知データ

```ts
{
  id: string;
  message: string;
  type: "info" | "error" | "success";
}
```

## アクション

Reducerでは以下のアクションを扱います。

```ts
type Action =
  | {
      type: "add";
      message: string;
      nType: NotificationType;
    }
  | {
      type: "remove";
      id: string;
    };
```

## ディレクトリ構成

```text
src/
├── App.tsx
│
├── components/
│   ├── ControlPanel.tsx
│   └── NotificationList.tsx
│
├── contexts/
│   └── NotificationContext.tsx
│
├── reducers/
│   └── NotificationReducer.ts
│
└── types/
    └── NotificationType.ts
```

## 状態管理

`NotificationContext`で`useReducer`を使用して通知状態を管理しています。

```text
App
 ↓
NotificationProvider
 ↓
useReducer
 ↓
state / dispatch
 ↓
┌─────────────────┐
│ ControlPanel    │ → add
│ NotificationList│ → remove
└─────────────────┘
```

`ControlPanel`から通知を追加し、`NotificationList`から通知を削除できます。

## 学習目的

* `useReducer`による状態管理
* `useContext`による状態共有
* ContextとReducerの分離
* TypeScriptによるState・Actionの型定義
* コンポーネントの責務分離
* TailwindCSSによる条件付きスタイリング
