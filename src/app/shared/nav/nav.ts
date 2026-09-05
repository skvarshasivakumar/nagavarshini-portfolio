import { AfterViewInit, Component, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LucideMoon, LucideSun, LucideDownload } from '@lucide/angular';

interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LucideMoon, LucideSun, LucideDownload],
  templateUrl: './nav.html',
})
export class NavComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  readonly sections: NavSection[] = [
    { id: 'about', label: 'About' },
    { id: 'focus', label: 'Focus' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly activeSection = signal<string>('about');
  readonly isDark = signal<boolean>(false);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDark(stored ? stored === 'dark' : prefersDark);
    } catch {
      // localStorage unavailable — keep light default
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    );
    for (const section of this.sections) {
      const el = document.getElementById(section.id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleTheme(): void {
    this.setDark(!this.isDark());
  }

  private setDark(dark: boolean): void {
    this.isDark.set(dark);
    document.documentElement.dataset['theme'] = dark ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      // ignore — per-viewer convenience only
    }
  }
}
