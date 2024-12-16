import { MatBadge } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [MatIcon, MatButton, MatBadge],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
