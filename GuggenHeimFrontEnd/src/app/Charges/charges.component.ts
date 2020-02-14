
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core'
import { inputData } from 'src/app/input-data';
import {ChargesService} from 'src/app/charges.service';

@Component({
  selector: 'my-charge',
  templateUrl: './charges.component.html' 
})

export class ChargesComponent implements OnInit {
  inputs : inputData = {
    overSix: "10",
    underSix: "100",
    date: "2012-12-12", //NEEDS TO BE ENTERED IN FORM OF YYYY-MM-DD
    rideStartTime: "12:12" //NEEDS TO BE MILITARY TIME (think about if this is necessary)
  };
  finalPrice : number;

  constructor(private _service : ChargesService) {
  }

  ngOnInit() { //if I want to initialize anything it would go here
  }

  postCalculate() {
    if (this.overCheck() && this.underCheck() && this.dateCheck() && this.timeCheck()) {

      this._service.getPrice(this.inputs).then(data => 
        {
          this.finalPrice = data;
        });
    } else {
      this.finalPrice = null;
    }

  }

  //check formatting for various fields
  overCheck(): boolean {
    //input is string, but we want a number so we "convert to number"
    let newval = Number(this.inputs.overSix);
    return (this.inputs.overSix.length != 0 && Number.isInteger(newval) && newval >= 0);
  }

  underCheck(): boolean {
    //check fifths by seeing if 5*number is integer
    //input is string, but we want a number so we "convert to number"
    let newval = Number(this.inputs.underSix);
    return (this.inputs.underSix.length != 0 && Number.isInteger(newval * 5) && newval >= 0);
  }

  dateCheck(): boolean {
    //make sure all inputs are numbers and that it follows correct date format
    const DATE_PATTERN = /^([0-9]{4}-[0-9]{2}-[0-9]{2})$/;
    let isDate = new Date(this.inputs.date);
    return DATE_PATTERN.test(this.inputs.date) && !isNaN(isDate.getTime());
  }

  timeCheck(): boolean {
    //make sure it follows correct time format
    const TIME_PATTERN = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/;
    return TIME_PATTERN.test(this.inputs.rideStartTime);
  }

}
