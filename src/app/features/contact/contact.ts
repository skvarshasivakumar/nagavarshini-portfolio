import { Component } from '@angular/core';
import { LucideMail, LucideExternalLink, LucideFileDown, LucidePhone } from '@lucide/angular';
import { RevealDirective } from '../../shared/reveal.directive';
import { CONTACT } from '../../core/data/resume-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LucideMail, LucideExternalLink, LucideFileDown, LucidePhone, RevealDirective],
  templateUrl: './contact.html',
})
export class ContactComponent {
  readonly contact = CONTACT;
  readonly year = new Date().getFullYear();
}
