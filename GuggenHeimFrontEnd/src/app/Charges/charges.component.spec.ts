import { TestBed, async, inject } from '@angular/core/testing';

import { ChargesComponent } from './charges.component';
import { inputData } from '../input-data';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';

describe('ChargesTest', () => {
    let Input : inputData; 

    beforeEach(async(() => {
        // The TestBed is the most important of the Angular testing utilities.
    // The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.
    // The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
      TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ],
        declarations: [
          ChargesComponent
        ],
        providers: [
            ChargesComponent
        ]
      }).compileComponents();

    }));

    //check existences

    it('firstTestTest', () => {
        const fixture = TestBed.createComponent(ChargesComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });

    it('should have overCheck Function', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        expect(charge.overCheck).toBeTruthy();
    }));

    it('should have underCheck Function', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        expect(charge.underCheck).toBeTruthy();
    }));

    it('should have dateCheck Function', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        expect(charge.dateCheck).toBeTruthy();
    }));

    it('should have timeCheck Function', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        expect(charge.timeCheck).toBeTruthy();
    }));

    it('should have postCalculate Function', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        expect(charge.postCalculate).toBeTruthy();
    }));

    //check correctness

    it('ensure overCheck is correct when it should be', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.overSix = "10";
        expect(charge.overCheck()).toEqual(true);
    }));

    it('ensure underCheck is correct when it should be', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.underSix = "10";
        expect(charge.underCheck()).toEqual(true);
    }));

    it('ensure dateCheck is correct when it should be', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.date = "1024-10-05";
        expect(charge.dateCheck()).toEqual(true);
    }));

    it('ensure timeCheck is correct when it should be', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.rideStartTime = "13:13";
        expect(charge.timeCheck()).toEqual(true);
    }));

    //check incorrect inputs
    it('ensure overCheck is incorrect when it should be 1', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.overSix = "10a";
        expect(charge.overCheck()).toEqual(false);
    }));

    it('ensure overCheck is incorrect when it should be 2', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.overSix = "10.1";
        expect(charge.overCheck()).toEqual(false);
    }));

    it('ensure overCheck is incorrect when it should be 3', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.overSix = "10a";
        expect(charge.overCheck()).toEqual(false);
    }));

    it('ensure underCheck is incorrect when it should be 1', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.underSix = "10.7";
        expect(charge.underCheck()).toEqual(false);
    }));

    it('ensure underCheck is incorrect when it should be 2', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.underSix = "abc";
        expect(charge.underCheck()).toEqual(false);
    }));

    it('ensure underCheck is incorrect when it should be 3', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.underSix = "";
        expect(charge.underCheck()).toEqual(false);
    }));

    it('ensure dateCheck is incorrect when it should be 1', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.date = "1024-10-5";
        expect(charge.dateCheck()).toEqual(false);
    }));

    it('ensure dateCheck is incorrect when it should be 2', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.date = "abcd-ef-gh";
        expect(charge.dateCheck()).toEqual(false);
    }));

    it('ensure dateCheck is incorrect when it should be 3', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.date = "1024105";
        expect(charge.dateCheck()).toEqual(false);
    }));

    it('ensure timeCheck is incorrect when it should be 1', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.rideStartTime = "1:69";
        expect(charge.timeCheck()).toEqual(false);
    }));

    it('ensure timeCheck is incorrect when it should be 2', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.rideStartTime = "1:1";
        expect(charge.timeCheck()).toEqual(false);
    }));

    it('ensure timeCheck is incorrect when it should be 3', 
    inject([ChargesComponent], (charge: ChargesComponent) => {
        charge.inputs.rideStartTime = "1:1b";
        expect(charge.timeCheck()).toEqual(false);
    }));

    //the results of postCalculate come from backend, so we leave the testing for that 
    //function's functionality to the backend tests. 
    
});





