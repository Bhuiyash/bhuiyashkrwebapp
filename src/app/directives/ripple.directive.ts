import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appRipple]',
  standalone: true
})
export class RippleDirective {
  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

  private reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.reduceMotion) {
      return;
    }
    const host = this.el.nativeElement;
    const computedPosition = getComputedStyle(host).position;
    if (computedPosition === 'static') {
      this.renderer.setStyle(host, 'position', 'relative');
    }
    this.renderer.setStyle(host, 'overflow', 'hidden');

    const rect = host.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'ripple-effect');
    this.renderer.setStyle(ripple, 'width', `${size}px`);
    this.renderer.setStyle(ripple, 'height', `${size}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);
    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.appendChild(host, ripple);

    setTimeout(() => this.renderer.removeChild(host, ripple), 650);
  }
}
