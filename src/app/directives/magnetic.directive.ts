import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
  standalone: true
})
export class MagneticDirective {
  private el = inject(ElementRef<HTMLElement>);

  @Input() magneticStrength = 0.35;

  private reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.reduceMotion) {
      return;
    }
    const host = this.el.nativeElement;
    const rect = host.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * this.magneticStrength;
    const y = (event.clientY - rect.top - rect.height / 2) * this.magneticStrength;
    host.style.transform = `translate(${x}px, ${y}px)`;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.transform = 'translate(0, 0)';
  }
}
