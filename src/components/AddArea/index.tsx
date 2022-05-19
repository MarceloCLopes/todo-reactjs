import { useState, KeyboardEvent } from "react";
import * as S from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState("");

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === "Enter" || (e.code === "NumpadEnter" && inputText !== "")) {
      onEnter(inputText);
      setInputText("");
    }
  }

  return (
    <S.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </S.Container>
  );
}
