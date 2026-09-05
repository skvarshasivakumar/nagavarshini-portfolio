import { Component } from '@angular/core';
import { LucideArrowDown } from '@lucide/angular';
import { CONTACT } from '../../core/data/resume-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideArrowDown],
  templateUrl: './hero.html',
})
export class HeroComponent {
  readonly contact = CONTACT;
}
