import {Directive, ElementRef, Renderer2} from '@angular/core';
 
 // Директива - это обычный класс на TypeScript, к которому применяется декоратор Directive
@Directive({
    selector: '[bill]' // селектор CSS, с которым будет ассоциирована директива
})
export class BillDirective{
     
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
// Класс "ElementRef" представляет ссылку на элемент, к которому будет применяться директива.   
// Renderer2 представляет сервис, который используется для стилизации элемента.
		this.renderer.setStyle(this.elementRef.nativeElement, "color", "darkblue");
        this.renderer.setStyle(this.elementRef.nativeElement, "font-family", "IndieFlower-Regular");
        this.renderer.setStyle(this.elementRef.nativeElement, "margin", "0px");
    }
}