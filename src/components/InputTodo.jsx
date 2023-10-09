import React from "react";

// コンポーネント内にcssのスタイルをあてられる
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

// コンポーネント化したファイルにはpropsを忘れずに
export const InputTodo = (props) => {
  // 受け取ったpropsの中身を分割代入で取り出す
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        // disabledがtrueなら入力もボタンも押せなくする
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
