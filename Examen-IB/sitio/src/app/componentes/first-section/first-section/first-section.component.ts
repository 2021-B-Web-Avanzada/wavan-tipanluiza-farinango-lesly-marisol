import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {

  urlFacebook = 'https://cdn.icon-icons.com/icons2/642/PNG/128/facebook_icon-icons.com_59205.png'
  urlTwitter = 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'
  urlFacePage = 'https://www.facebook.com/'
  urlTwitterPage = 'https://twitter.com/?lang=es'

  constructor() { }

  ngOnInit(): void {
  }

}
