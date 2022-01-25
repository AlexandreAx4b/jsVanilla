import './src/style/settings/color.css';
import './src/style/generic/reset.css'
import './src/style/elements/base.css'
import CardGame from "./src/components/CardGame";

const root = document.querySelector('#root');
const htmlCardGame = CardGame();

root.insertAdjacentHTML('beforeend', htmlCardGame);