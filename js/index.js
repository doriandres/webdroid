import { IndexViewModel } from './viewmodels/index.js';
import { IndexView } from './views/index.js';

const view = new IndexView();
document.getElementById("root").appendChild(view.create());