import CardGame from "../../components/CardGame";

export default function BoardGame(amountCard) {
  const htmlCardGame = CardGame();
  const htmlBoardGame = htmlCardGame.repeat(amountCard);

  return htmlBoardGame;
}