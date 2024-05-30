import * as readlineSync from 'readline-sync';
import { clear } from 'console';


export function keypress() {
    readlineSync.question("Pressione 'Enter' para continuar.");
    clear();
}