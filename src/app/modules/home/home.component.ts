import { Component, OnInit, OnDestroy } from '@angular/core';
import { PreloaderComponent } from '../../core/components/preloader/preloader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PreloaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  images = [
    'imgs/index/slide-01.jpg',
    'imgs/index/slide-02.jpg',
    'imgs/index/slide-03.jpg',
    'imgs/index/slide-04.jpg',
    'imgs/index/slide-05.jpg',
    'imgs/index/slide-06.jpg',
    'imgs/index/slide-07.jpg',
  ];

  currentIndex = 0;
  autoSlideInterval: any;
  slideInterval = 5000;
  isFadingIn = true;

  ngOnInit() {
    this.autoSlideInterval = setInterval(() => {
      this.nextImage();
    }, this.slideInterval);
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextImage() {
    this.isFadingIn = false;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
      this.isFadingIn = true;
    }, 1000);
  }
}
