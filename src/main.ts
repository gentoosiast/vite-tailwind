import { createElem, clsx } from './helpers';
import './global.css';

const divElem = createElem('div', clsx('h-48 w-48 bg-pink-700'));

document.body.append(divElem);
