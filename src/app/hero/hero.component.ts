import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private renderer: Renderer2) { }

  isReadMoreVisible = false;

  readmore() {
    const para = document.querySelector('#readpara');

    if (this.isReadMoreVisible) {
      this.renderer.setStyle(para, 'display', 'none');
      this.renderer.setStyle(para, 'height', '0');
    } else {
      this.renderer.setStyle(para, 'display', 'block');
      this.renderer.setStyle(para, 'height', 'auto');
    }
    this.isReadMoreVisible = !this.isReadMoreVisible;
  }
  isReadMoreVisible1 = false;

  readmore1() {
    const para = document.querySelector('#readpara1');
    if (this.isReadMoreVisible1) {
      this.renderer.setStyle(para, 'display', 'none');
      this.renderer.setStyle(para, 'height', '0');
    } else {
      this.renderer.setStyle(para, 'display', 'block');
      this.renderer.setStyle(para, 'height', 'auto');
    }
    this.isReadMoreVisible1 = !this.isReadMoreVisible1;
  }
}
