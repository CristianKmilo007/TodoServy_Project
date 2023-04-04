import { Component, OnInit } from '@angular/core';
declare let Swiper:any
declare let tns:any

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.toggleText1()
    this.toggleText2()
    this.slider1()
    this.acordion()
  
  }

  toggleText1(){
    let read_text :any = document.getElementById('read-text')
  
      let answet_text:any = document.getElementById('answer-text')
  
      read_text.addEventListener('click', ()=>{
  
        answet_text.classList.toggle('show')

        if(answet_text.classList.contains('show')){
          read_text.innerHTML = 'menos'
        }else{
          read_text.innerHTML = 'Conoce más aquí'
        }
      })
  }

  toggleText2(){
    let read_text2 :any = document.getElementById('read2-text')
  
      let answet_text2:any = document.getElementById('answer2-text')
  
      read_text2.addEventListener('click', ()=>{
  
        let res=answet_text2.classList.toggle('show2')

        if(res){
          read_text2.innerHTML = 'menos'
        }else{
          read_text2.innerHTML = 'Conoce más aquí'
        }
      })
  }

  slider1(){
    var swiper = new Swiper(".mySwiper", {
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
      },
      autoplay: {
        delay: 5000,
      },

    });


    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      effect: 'fade',

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
      },
      autoplay: {
        delay: 5000,
      },

    });
  }

  acordion(){
    let acordions:any = document.querySelectorAll('.acordion')

    acordions.forEach((acor:any) => {
      acor.addEventListener('click', ()=>{
        acor.classList.toggle('active')
      })
    })
  }



   



}
