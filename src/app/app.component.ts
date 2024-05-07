// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, ViewChild } from '@angular/core';
import { ChildLinks} from './child.links';
import { ChildQuotes} from './child.quotes';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app', // Определяется селектор-css для HTML-элемента, который будет представлять компонент.
    templateUrl:'./app.component.html',    
    styleUrls:['./app.component.css']
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
    name = 'Bill Gates';
    billQuote: string = "";
    billLink: string = "";
    
    @ViewChild(ChildQuotes)
    private quoteComponent: ChildQuotes;

    addQuote(billQuote){this.quoteComponent.addQuote(billQuote)
        this.billQuote = "";
    };

    @ViewChild(ChildLinks)
    private linkComponent: ChildLinks;

    addLink(billLink){this.linkComponent.addLink(billLink)
        this.billLink = "";
    };

    toChange: string = "";    

    ChangeBiography(){
        this.toChange = "Biography";          
    };
    ChangeQuotes(){
        this.toChange = "Quotes";
    };
    ChangeLinks(){
        this.toChange = "Links";
    };
    ChangeExit(){
        this.toChange = "Exit";
    };
};