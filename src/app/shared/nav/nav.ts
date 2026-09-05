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
  // Dark is the site's default identity (matches the CSS default with no
  // data-theme attribute), so the toggle starts in the dark state.
  readonly isDark = signal<boolean>(true);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      // Only switch to light if the viewer explicitly chose it before —
      // no system-preference fallback, since dark is the designed default.
      if (localStorage.getItem('theme') === 'light') {
        this.setDark(false);
      }
    } catch {
      // localStorage unavailable — keep the default dark theme
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
    if (dark) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.dataset['theme'] = 'light';
    }
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      // ignore — per-viewer convenience only
    }
  }
}
