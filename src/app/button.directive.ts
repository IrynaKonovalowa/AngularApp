import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';
 
 // Директива - это обычный класс на TypeScript, к которому применяется декоратор Directive
@Directive({
    selector: '[buttn]' // селектор CSS, с которым будет ассоциирована директива
})
export class ButtonDirective{
     
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
    }
    @HostListener("mouseenter") onMouseEnter() {
        this.setSize("30px", "90px");
        this.setColor("darkviolet");
        this.setFontWeight("bold");
        this.setBorder("3px solid darkviolet");
    }
    private setSize(val: string, val1: string) {
        this.renderer.setStyle(this.elementRef.nativeElement, "height", val);
        this.renderer.setStyle(this.elementRef.nativeElement, "width", val1);
    }
    private setColor(val: string) {
        this.renderer.setStyle(this.elementRef.nativeElement, "color", val);        
    }
    private setBorder(val: string) {
        this.renderer.setStyle(this.elementRef.nativeElement, "border", val);        
    }

    private setFontWeight(val: string) {
        this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", val);        
    }
    
    @HostListener("mouseleave") onMouseLeave() {
        this.setSize("auto", "auto");
        this.setColor("blue");
        this.setFontWeight("normal");
        this.setBorder("2px solid blue");
    }    
}