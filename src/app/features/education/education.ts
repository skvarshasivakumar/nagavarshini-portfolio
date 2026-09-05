import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import {
  AFFILIATIONS,
  CERTIFICATIONS,
  EDUCATION,
  PUBLICATIONS,
  TRAININGS,
} from '../../core/data/resume-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './education.html',
})
export class EducationComponent {
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
  readonly trainings = TRAININGS;
  readonly publications = PUBLICATIONS;
  readonly affiliations = AFFILIATIONS;
}
