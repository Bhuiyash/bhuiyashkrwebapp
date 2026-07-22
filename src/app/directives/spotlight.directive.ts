import { Directive, ElementRef, HostListener, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appSpotlight]',
  standalone: true
})
export class SpotlightDirective implements OnInit {
  private el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    this.el.nativeElement.classList.add('spotlight-card');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const host = this.el.nativeElement;
    const rect = host.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    host.style.setProperty('--spot-x', `${x}%`);
    host.style.setProperty('--spot-y', `${y}%`);
  }
}
