import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);

  @Input('appCountUp') target = 0;
  @Input() countDecimals = 0;
  @Input() countDuration = 1500;

  private observer?: IntersectionObserver;
  private frameId?: number;

  ngOnInit(): void {
    const host = this.el.nativeElement;
    host.textContent = (0).toFixed(this.countDecimals);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      host.textContent = this.target.toFixed(this.countDecimals);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animateCount(host);
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(host);
  }

  private animateCount(host: HTMLElement): void {
    const start = performance.now();
    const from = 0;
    const to = this.target;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / this.countDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = from + (to - from) * eased;
      host.textContent = value.toFixed(this.countDecimals);

      if (progress < 1) {
        this.frameId = requestAnimationFrame(step);
      }
    };

    this.frameId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
  }
}
