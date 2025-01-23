import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgForm } from '@angular/forms';
import Typed from 'typed.js';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements AfterViewInit {
  @ViewChild('autoInput', { static: true }) autoInput!: ElementRef;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['Akash Kumar', 'Web Developer', 'Programmer', 'Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
      };

      new Typed(this.autoInput.nativeElement, options);
    }
  }

  skills = [
    { imgSrc: '../../../assets/icons/1.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/2.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/3.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/4.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/5.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/6.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/10.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/13.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/8.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/9.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/12.png', animationDelay: '' },
    { imgSrc: '../../../assets/icons/14.png', animationDelay: '' },
  ];
  
  ngOnInit(): void {
    // Add a random delay to each skill
    this.skills = this.skills.map(skill => ({
      ...skill,
      animationDelay: `${Math.random() * 2}s` // Random delay between 0s and 2s
    }));
  }

  profile = [
    {
      name: 'Hackerrank',
      imgSrc: '../../../assets/icons/19.png',
      height: '70px',
      width: '70px',
      description:'4 Star in C++,3 Star in Problem Solving',
      link: 'https://www.hackerrank.com/profile/akashweb123',
    },
    {
      name: 'GFG',
      imgSrc: '../../../assets/icons/15.png',
      height: '70px',
      width: '130px',
      description:'500+ Problems Solved',
      link: 'https://www.geeksforgeeks.org/user/toxicvenom25/',
    },
    {
      name: 'LeetCode',
      imgSrc: '../../../assets/icons/17.png',
      height: '70px',
      width: '70px',
      description:'150+ Problems Solved',
      link: 'https://leetcode.com/u/Isagi007/',
    },
    {
      name: 'CodeChef',
      imgSrc: '../../../assets/icons/16.png',
      height: '70px',
      width: '60px',
      description:'1 Star on CodeChef',
      link: 'https://www.codechef.com/users/akashkun04',
    },
  ];

  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contact = form.value;
      console.log('Form Submitted!', this.contact);
      // Here you can add your logic to send the data to a backend server.
      form.reset();
    }
  }
}
