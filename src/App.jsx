import React from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  // 初期値が''なので変更があれば変える関数を作る
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    // 何も入力していなかったら追加できないようにする
    if (todoText === "") return;
    // スプレッド構文で今あるincompleteTodosの配列にtodoTextを加えたものをコピーする
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 入力した後は文字を消す
    setTodoText("");
  };
  // 引数にindexを持たせ何行目の削除ボタンかを教える
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // spliceで配列の何番目をいくつ消すかを決める
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // 完了のTodoを作成
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(completeTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* propsを渡す */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        // 未完了のTodoの数が5以上ならdisabledにtrueが入る
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTodoは5個までだよ～。消化しろ～。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
