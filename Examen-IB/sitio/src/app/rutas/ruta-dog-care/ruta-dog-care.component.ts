import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-dog-care',
  templateUrl: './ruta-dog-care.component.html',
  styleUrls: ['./ruta-dog-care.component.scss']
})
export class RutaDogCareComponent implements OnInit {


  urlDog = 'https://www.petmd.com/sites/default/files/styles/home_page_banner_desktop/public/2020-10/dog%20care%20center%20final%202.jpg?itok=LWDan7zr'

  arregloSection2 =[
    {
      titulo:'Do Dogs Get Jealous?',
      autor:'Melissa Boldan, DVM',
      fecha:'Dec 15, 2021',
      resumen:'Jealousy is defined as a desire to possess something that someone else has, or a feeling of unhappiness or anger because you fear someone you love is liked by another. But do dogs get jealous like humans do? Do they feel jealous when we spend time with or give attention to…',
      urlArticulo:'https://www.petmd.com/dog/behavior/do-dogs-get-jealous',
      urlImagen:'https://www.petmd.com/sites/default/files/styles/what_s_new_392_284/public/2021-12/three.spaniels.jpg?itok=D2qeRt-C'
    },
    {
      titulo:'12 Dog Tongue Facts',
      autor:'Kasey Stopp, DVM, CVA',
      fecha:'Dec 14, 2021',
      resumen:'Whether it’s getting every last morsel of food from their bowl, panting after a game of fetch, or showering you with affection, a dog’s tongue plays an important role in how they interact with their environment. Here are some interesting facts that you probably don’t know…',
      urlArticulo:'https://www.petmd.com/dog/general-health/12-dog-tongue-facts',
      urlImagen:'https://www.petmd.com/sites/default/files/styles/what_s_new_392_284/public/2021-12/happy.dog_.tongue.jpg?itok=WeysBvi3'
    },
    {
      titulo:'Do Dogs Have Taste Buds?',
      autor:'Teresa Manucy, DVM',
      fecha:'Dec 13, 2021',
      resumen:'Our canine companions use their sense of taste in combination with their other senses to explore the world around them. Sometimes it seems like dogs will eat anything, from garbage and fecal matter to undigestible items like toys and fabric. And other times dogs may be very…',
      urlArticulo:'https://www.petmd.com/dog/general-health/do-dogs-have-taste-buds',
      urlImagen:'https://www.petmd.com/sites/default/files/styles/what_s_new_392_284/public/2021-12/dog-eating-out-of-silver-bowl.jpg?itok=8_EnSlQ0'
    },
    {
      titulo:'Can Dogs Laugh?',
      autor:'Autumn Madden, DVM',
      fecha:'Dec 02, 2021',
      resumen:'Laughter, by definition, is a physiological response to humor. Dogs can be playful, but do they understand humor and laughing at funny things? Do they have their own version of laughter? What do they think when humans laugh? Do Dogs Laugh? Dogs do laugh; however, it is not…',
      urlArticulo:'https://www.petmd.com/dog/behavior/can-dogs-laugh',
      urlImagen:'https://www.petmd.com/sites/default/files/styles/what_s_new_392_284/public/2021-12/happy-white-fluffy-dog-with-big-smile-picture-id1056388636.jpg?itok=W_c-psAz'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
