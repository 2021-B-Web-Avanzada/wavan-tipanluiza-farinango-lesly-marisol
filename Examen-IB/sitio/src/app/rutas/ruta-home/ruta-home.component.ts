import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.scss']
})
export class RutaHomeComponent implements OnInit {

  arregloSection1 = [
    {
      titulo:'Kennel Cough in Dogs: Symptoms and Treatments',
      autor:'Sara Bledse, DVM, CVA, CHPV',
      fecha:'Jun 30, 2020',
      urlLink:'https://www.petmd.com/sites/default/files/styles/home_page_recent_articles_392x284_/public/Dog-lounging-on-couch.jpg?itok=wVNa4Dg6'
    },
    {
      titulo:'Arthritis Treatment for Cats',
      autor:'PetMD Editorial',
      fecha:'Apr 07, 2020',
      urlLink:'https://www.petmd.com/sites/default/files/styles/home_page_recent_articles_392x284_/public/young-tabby-cat.jpg?itok=1y8MUz-8'
    },
    {
      titulo:'Dog Hypothermia',
      autor:'Jennifer Coates, DVM',
      fecha:'Oct 20, 2021',
      urlLink:'https://www.petmd.com/sites/default/files/styles/home_page_recent_articles_392x284_/public/2021-11/small-dog.jpg?itok=ZMSe09Lr'
    }

  ]
  arregloSection2 = [
    {
      titulo:'8 Ways to Shake Up Your Dog Walking Routine',
      autor:'PetMD Editorial',
      fecha:'Dec 12, 2018',
      resumen:'Reviewed and updated for accuracy on December 12, 2018 by Jennifer Coates, DVM Walking your dog is one of the key responsibilities of pet parenthood—and it comes with huge health benefits for both dogs and humans. In fact, a study from Michigan…',
      urlArticulo:'https://www.petmd.com/dog/care/8-ways-shake-your-dog-walking-routine',
      urlImagen:'https://www.petmd.com/sites/default/files/styles/home_page_recent_articles_392x284_/public/woman-with-dog-close-up-outdoors-picture-id813703830.jpg?itok=KQJv2tgj'
    },
    {
      titulo: 'Dog Walking Tips: What Not to Do When Walking Your Dog',
      autor:'Victoria Shade, CPTDA-KA',
      fecha:'Mar 18, 2019',
      resumen:'The fuzzy end of the leash is faced with a long list of do’s and don’ts during their daily walks, but we often forget that our behavior can also impact what happens during our strolls. You might have a few dozen things you wish your dog would or…',
      urlArticulo: 'https://www.petmd.com/dog/training/dog-walking-tips-what-not-do-when-walking-your-dog',
      urlImagen: 'https://www.petmd.com/sites/default/files/styles/home_page_recent_articles_392x284_/public/couple-walking-with-beagle-dog-wearing-in-collar-and-leash-in-the-picture-id857996324.jpg?itok=kJbDA4Oz'
    },
    {
      titulo: 'How to Exercise Your Cats Through Play',
      autor: 'Krista Seradayar, DVM',
      fecha:'Jul 30,2020',
      resumen:'Do cats need exercise? Of course! When cats are exercising, they’re helping maintain a healthy weight and also getting stimulation to keep them emotionally and behaviorally healthy. Here are some tips on how to exercise your cats along with some cat…',
      urlArticulo: 'https://www.petmd.com/cat/wellness/evr_ct_exercising_with_your_cat_a_how_to_guide',
      urlImagen: 'https://www.petmd.com/sites/default/files/styles/home_page_recent_articles_392x284_/public/cat-play-time.jpg?itok=RmDNQPef'
    }
  ]

urlPrincipal = 'https://www.petmd.com/sites/default/files/styles/home_page_banner_desktop/public/2021-11/Herobox-1920x720-Newsletter_1.jpg?itok=iS-yMvvE'


  articuloPrincipal = [
    {
      titulo: 'Cold Weather Safety Tips for Traveling With a Pet',
      autor:'PetMD Editorial',
      fecha: 'Jan 10, 2019',
      resumen: 'Reviewed and updated for accuracy on January 10, 2019, by Katie Grzyb, DVM If you plan to travel with a pet this winter, it’s important to be mindful of cold weather safety issues. After all, frigid temperatures aren’t pleasant for you or your pet.…',
      urlArticulo:'https://www.petmd.com/dog/seasonal/cold-weather-safety-tips-traveling-pet',
      urlImagen:'https://www.petmd.com/sites/default/files/styles/nutrition_diet_tips_790_593/public/traveling-with-dog-picture-id640999028.jpg?itok=Ew4bw1Zd'
    }
  ]

  articuloAdicional = [
    {
      titulo:'Does Seasonal Affective Disorder Affect Pets?',
      autor:'PetMD Editorial',
      fecha:'Jan 27, 2017',
      urlImagen:'https://www.petmd.com/sites/default/files/styles/nutrition_diet_tips_790_593/public/shutterstock_519470713.jpg?itok=1RKMoOA4'
    },
    {
      titulo:'How to Keep a Dog Warm in Winter Weather',
      autor: 'PetMD Editorial',
      fecha:'Nov 13, 2018',
      urlImagen: 'https://www.petmd.com/sites/default/files/styles/nutrition_diet_tips_790_593/public/Winter-Weather.jpg?itok=2GjFR4oT'
    }
  ]

  videos = [
    {
      titulo:'Is Pepto-Bismol Safe For Dogs?',
      urlImagen:'https://www.petmd.com/sites/default/files/video_thumbnails/k8rs3628rp.jpg',
      urlVideo:'https://www.petmd.com/node/231'
    },
    {
      titulo: 'Common poisonous plants for pets',
      urlImagen: 'https://www.petmd.com/sites/default/files/video_thumbnails/41ulix42rs.jpg',
      urlVideo: 'https://www.petmd.com/node/226'
    },
    {
      titulo:'Home Remedies for Cat Colds',
      urlImagen: 'https://www.petmd.com/sites/default/files/video_thumbnails/ha4zt4wrck.jpg',
      urlVideo: 'https://www.petmd.com/node/221'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
