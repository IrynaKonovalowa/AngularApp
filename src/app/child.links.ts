// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Input, Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'child-links',
    templateUrl:'./child.links.html',		
    styleUrls:['./app.component.css']
})
export class ChildLinks { 
    links =["https://en.wikipedia.org/wiki/Bill_Gates", "https://www.gatesfoundation.org/",
    "https://www.gatesnotes.com/", "https://twitter.com/billgates"];
    
    addLink(billLink: string): void{
        this.links.push(billLink);
    };
}