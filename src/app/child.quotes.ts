// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Input, Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'child-quotes',
    templateUrl:'./child.quotes.html',		
    styleUrls:['./app.component.css']
})
export class ChildQuotes {
    quotes = ["«Patience is a key element of success»", "«If you think your teacher is tough, wait till you get a boss»",
    "«Life is not fair — get used to it! »", "«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»",
"«Be nice to nerds. Chances are you’ll end up working for one»"];

addQuote(billQuote: string): void{
    this.quotes.push(billQuote);
    };
}