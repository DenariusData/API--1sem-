import * as readlineSync from 'readline-sync';
import { clear } from 'console';


export function keypress() {
    readlineSync.keyInPause("Pressione qualquer tecla alfanumerica para continuar.");
    clear();
}