import {TestBed, inject } from '@angular/core/testing';
import {ChargesService } from './charges.service';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {inputData} from './input-data';
import {catchError} from 'rxjs/operators';  
import { ExpectedConditions } from 'protractor';

describe('Test Charge Service', () => {

    let startingInput : inputData; 

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ChargesService], 
            imports: [
                HttpClientModule
            ]
        });
        startingInput = {
            overSix: "10",
            underSix: "100",
            date: "2012-12-12",
            rideStartTime: "12:12"
        };
    });

    it('should be created', inject([ChargesService], (service: ChargesService) => {
        expect(service).toBeTruthy();
    }));

    it('should have handleError Function', 
    inject([ChargesService], (service: ChargesService) => {
        expect(service.handleError).toBeTruthy();
    }));

    it('should have getPrice Function', 
    inject([ChargesService], (service: ChargesService) => {
        expect(service.getPrice).toBeTruthy();
    }));

    //I unfortunately could not figure out how to test these two functions before the deadline. 

});

