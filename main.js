import './src/style/settings/color.css';
import './src/style/generic/reset.css'
import './src/style/elements/base.css'
import CardGame from "./src/components/CardGame";
import BoardGame from './src/objects/BoardGame';

const root = document.querySelector('#root');
const htmlBoardGame = BoardGame(2);

root.insertAdjacentHTML('beforeend', htmlBoardGame);