## **課題**

通知（Notification）システムを作成しなさい。
複数コンポーネントで共通の通知状態を扱い、通知の追加・削除を行えるようにすること。

### **条件**

(1) useReducer と useContext を使用すること
(2) 通知は `{ id: string, message: string, type: 'info' | 'error' | 'success' }` とすること
(3) `'add'`, `'remove'` のアクションを扱うこと
(4) TailwindCSSで種類ごとに見た目を変えること
(5) コンポーネント名は `Problem5` にすること
