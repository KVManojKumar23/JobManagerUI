import { Component } from '@angular/core';
import { SideNav } from '../side-nav/side-nav';
import { MainNav } from '../main-nav/main-nav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    SideNav, MainNav, RouterOutlet
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
