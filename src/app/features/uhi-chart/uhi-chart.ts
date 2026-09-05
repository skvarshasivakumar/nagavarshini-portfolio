import { Component, computed, signal } from '@angular/core';
import { UHI_DATA } from '../../core/data/resume-data';
import { UhiRecord } from '../../core/models/resume.models';

interface CityLine {
  city: UhiRecord['city'];
  color: string;
  points: { x: number; y: number; year: number; value: number }[];
  path: string;
}

const CITY_COLORS: Record<UhiRecord['city'], string> = {
  Delhi: 'var(--color-harvest)',
  Bangalore: 'var(--color-clay)',
  Jaipur: 'var(--color-fern)',
  Chennai: 'var(--color-laterite)',
};

const WIDTH = 640;
const HEIGHT = 280;
const PAD = { top: 16, right: 16, bottom: 28, left: 36 };

@Component({
  selector: 'app-uhi-chart',
  standalone: true,
  templateUrl: './uhi-chart.html',
})
export class UhiChartComponent {
  readonly width = WIDTH;
  readonly height = HEIGHT;
  readonly cities = Array.from(new Set(UHI_DATA.map((d) => d.city)));
  readonly cityColor = CITY_COLORS;
  readonly activeCities = signal<Set<UhiRecord['city']>>(new Set(this.cities));
  readonly hovered = signal<{ x: number; y: number; year: number; entries: { city: string; value: number; color: string }[] } | null>(null);

  private readonly years = Array.from(new Set(UHI_DATA.map((d) => d.year))).sort((a, b) => a - b);
  private readonly minVal = Math.min(...UHI_DATA.map((d) => d.lstAnomaly)) - 0.3;
  private readonly maxVal = Math.max(...UHI_DATA.map((d) => d.lstAnomaly)) + 0.3;

  readonly lines = computed<CityLine[]>(() =>
    this.cities.map((city) => {
      const records = UHI_DATA.filter((d) => d.city === city).sort((a, b) => a.year - b.year);
      const points = records.map((r) => ({
        x: this.xFor(r.year),
        y: this.yFor(r.lstAnomaly),
        year: r.year,
        value: r.lstAnomaly,
      }));
      const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
      return { city, color: CITY_COLORS[city], points, path };
    }),
  );

  readonly yTicks = computed(() => {
    const step = (this.maxVal - this.minVal) / 4;
    return Array.from({ length: 5 }, (_, i) => {
      const value = this.minVal + step * i;
      return { value: Number(value.toFixed(1)), y: this.yFor(value) };
    });
  });

  readonly xTicks = computed(() => this.years.filter((y) => y % 3 === 0).map((year) => ({ year, x: this.xFor(year) })));

  readonly hoverBands = computed(() => {
    const bandWidth = (WIDTH - PAD.left - PAD.right) / this.years.length;
    return this.years.map((year) => ({ year, x: this.xFor(year), bandWidth }));
  });

  toggleCity(city: UhiRecord['city']): void {
    const next = new Set(this.activeCities());
    if (next.has(city)) {
      if (next.size > 1) next.delete(city);
    } else {
      next.add(city);
    }
    this.activeCities.set(next);
  }

  isActive(city: UhiRecord['city']): boolean {
    return this.activeCities().has(city);
  }

  onHoverYear(year: number): void {
    const rows = this.cities
      .filter((c) => this.isActive(c))
      .map((city) => {
        const rec = UHI_DATA.find((d) => d.city === city && d.year === year)!;
        return { city, value: rec.lstAnomaly, color: CITY_COLORS[city] };
      });
    this.hovered.set({ x: this.xFor(year), y: PAD.top, year, entries: rows });
  }

  clearHover(): void {
    this.hovered.set(null);
  }

  private xFor(year: number): number {
    const t = (year - this.years[0]) / (this.years[this.years.length - 1] - this.years[0]);
    return PAD.left + t * (WIDTH - PAD.left - PAD.right);
  }

  private yFor(value: number): number {
    const t = (value - this.minVal) / (this.maxVal - this.minVal);
    return HEIGHT - PAD.bottom - t * (HEIGHT - PAD.top - PAD.bottom);
  }
}
