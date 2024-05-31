import * as readlineSync from 'readline-sync';
import { clear } from 'console';


export function keypress() {
    readlineSync.keyInPause("Pressione qualquer tecla para continuar.");
    clear();
}