import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private trigger?: { kill(): void };

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    gsap.registerPlugin(ScrollTrigger);

    const target = this.el.nativeElement;
    const tween = gsap.fromTo(
      target,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: this.revealDelay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: target,
          start: 'top 85%',
        },
      },
    );
    this.trigger = tween.scrollTrigger;
  }

  ngOnDestroy(): void {
    this.trigger?.kill();
  }
}
