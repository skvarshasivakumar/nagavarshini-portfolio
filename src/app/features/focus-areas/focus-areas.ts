import { Component } from '@angular/core';
import { LucideRecycle, LucideFlame, LucideLeaf, LucideMap } from '@lucide/angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { FOCUS_AREAS } from '../../core/data/resume-data';

@Component({
  selector: 'app-focus-areas',
  standalone: true,
  imports: [LucideRecycle, LucideFlame, LucideLeaf, LucideMap, RevealDirective],
  templateUrl: './focus-areas.html',
})
export class FocusAreasComponent {
  readonly areas = FOCUS_AREAS.map((area, i) => ({ ...area, delay: i * 0.08 }));
}
