import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Simulation';

ngOnInit(){
  this.abc();
}
  RainOnPrevDay = [
    { event: 'No Rain', C_P: 0.50, min: 1, max: 50 },
    { event: '1', C_P: 0.75, min: 51, max: 75 },
    { event: '2', C_P: 0.90, min: 76, max: 90 },
    { event: '3', C_P: 0.95, min: 91, max: 93 },
    { event: '4', C_P: 0.98, min: 96, max: 98 },
    { event: '5', C_P: 1, min: 99, max: 100 }
  ]



  NoRainOnPrevDay = [
    { event: 'No Rain', C_P: 0.75, min: 1, max: 75 },
    { event: '1', C_P: 0.90, min: 76, max: 90 },
    { event: '2', C_P: 0.96, min: 91, max: 96 },
    { event: '3', C_P: 1, min: 97, max: 100 },

  ]
  randomNumbers = [
    // {Day:1,RandomNumber:67},
    // {Day:2,RandomNumber:63},
    // {Day:3,RandomNumber:39},
    // {Day:4,RandomNumber:55},
    // {Day:5,RandomNumber:29},
    // {Day:6,RandomNumber:78},
    // {Day:7,RandomNumber:70},
    // {Day:8,RandomNumber:6},
    // {Day:9,RandomNumber:78},
    // {Day:10,RandomNumber:76}
  ]
  event = []
  obj;
  isVisible=false;
  calc=[]
  totalRain=0;
  lastDayEvent = 'No Rain'



  generateRandomNumbers() {
    for (let index = 0; index < 10; index++) {
      let number = Math.floor(Math.random() * 100);
      this.obj={Day:index+1,RandomNumber:number};
      this.randomNumbers.push(this.obj);

    }
    //console.log(this.randomNumbers);
  }

  // this.abc();



  abc() {
    this.randomNumbers=[];
    this.event=[]
    this.generateRandomNumbers();

    this.randomNumbers.forEach(element => {
      if (this.lastDayEvent === 'No Rain') {
        this.NoRainOnPrevDay.forEach(element1 => {
          if (element.RandomNumber >= element1.min && element.RandomNumber <= element1.max) {
            this.lastDayEvent = element1.event;
           // console.log(this.lastDayEvent)
            this.obj={Day:element.Day,RandomNumber:element.RandomNumber,event:this.lastDayEvent};
            this.event.push(this.obj);

          }
        })

      }
      else {
        this.RainOnPrevDay.forEach(element2 => {
          if (element.RandomNumber >= element2.min && element.RandomNumber <= element2.max) {
            this.lastDayEvent = element2.event;
            this.obj={Day:element.Day,RandomNumber:element.RandomNumber,event:this.lastDayEvent};
            this.event.push(this.obj);

          }
        })
      }
    });
   // console.log(event);
  }

navigate(){
  console.log(this.event);
  this.isVisible=true;
  this.event.forEach(element=>{
    if(element.event!='No Rain')
    {
      this.calc.push(parseInt( element.event));
       this.totalRain+=parseInt( element.event)
    }

  });
  console.log(this.calc);
}
  

}
