import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { UhiChartComponent } from '../uhi-chart/uhi-chart';
import { PROJECTS } from '../../core/data/resume-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective, UhiChartComponent],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
