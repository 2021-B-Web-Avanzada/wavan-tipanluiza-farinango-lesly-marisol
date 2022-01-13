import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {

urlLogo = 'https://www.petmd.com/themes/custom/petmd_barrio/assets/images/PetMD_Logo_Desktop.png'


  constructor() { }

  ngOnInit(): void {
  }

}
