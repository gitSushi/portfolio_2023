import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  @ViewChild('hamburger') hamburger: ElementRef = {} as ElementRef;
  @ViewChild('bones') bones: ElementRef = {} as ElementRef;
  @ViewChild('ulmenu') ulmenu: ElementRef = {} as ElementRef;

  isMenuOpen: boolean = false;

  myLinks = [
    {
      route: 'tldr',
      content: 'tl;dr',
    },
    {
      route: 'alternance',
      content: 'alternance',
    },
    {
      route: 'build-a-dev',
      content: 'build-a-dev',
    },
    {
      route: 'contact',
      content: 'contact',
    },
  ];

  constructor(private renderer: Renderer2) {}

  hideMenu() {
    this.renderer.setStyle(this.bones.nativeElement, 'display', 'none');
    this.renderer.setStyle(this.hamburger.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.ulmenu.nativeElement, 'right', '-13em');
  }

  handleClosingMenu() {
    if (this.isMenuOpen) {
      this.hideMenu();
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  handleToogleMenu() {
    if (this.isMenuOpen) {
      this.hideMenu();
    } else {
      this.renderer.setStyle(this.bones.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.hamburger.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.ulmenu.nativeElement, 'right', '-1em');
    }
    this.isMenuOpen = !this.isMenuOpen;
  }
}
