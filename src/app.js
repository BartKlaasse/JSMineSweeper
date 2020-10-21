// Import components
import Header from './components/Header';
import Grid from './components/Grid';
// Import Js modules
import GameCtrl from './js/GameCtrl';
//import scss file here
import './scss/app.scss';

const app = async () => {
  document.getElementById('header').innerHTML = Header();
  document.getElementById('grid').innerHTML = Grid();
};

//init app
app();

// only create board once dom has been loaded
document.addEventListener('DOMContentLoaded', () => {
  GameCtrl.createBoard();
});
