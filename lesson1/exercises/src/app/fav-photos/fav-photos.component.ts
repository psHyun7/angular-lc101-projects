import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Rando Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png';
  image3 = 'https://res.cloudinary.com/teepublic/image/private/s--EqShq3LZ--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1537243685/production/designs/3172466_0.jpg';

  constructor() { }

  ngOnInit() {
  }

}