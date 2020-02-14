using System;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using GuggenheimFinal.Models;

namespace GuggenheimFinal.Tests
{
    [TestClass]
    public class TestBackendLogic 
    { 
        [TestMethod]
        
        //I only have 1 function I need to test, and I want all tests for that function in one test function. I will use 
        //several asserts in this test function to test all ways to add charge for functionality. 
        public void testCalculatePrice()
        {
            var calculator = new Calculations();

            //checking base charge
            InputData charge = new InputData("0", "0", "2012-12-12", "12:00");  
            var calculatedCharge = calculator.CalculatePrice(charge);
            double correctCharge= 3.5;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "base charge is not correct");

            //checking overSix
            charge = new InputData("1", "0", "2012-12-12", "12:00");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 3.85;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "over six additional charge is not correct");

            //checking overSix multiple units
            charge = new InputData("10", "0", "2012-12-12", "12:00");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 7;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "over six multiple units additional charge is not correct");

            //checking underSix
            charge = new InputData("0", "0.2", "2012-12-12", "12:00");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 3.85;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "under six additional charge is not correct");

            //checking underSix multiple units
            charge = new InputData("0", "1", "2012-12-12", "12:00");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 5.25;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "under six multiple units additional charge is not correct");

            //checking peak time 1 (12/12/2012 is a Wednesday)
            charge = new InputData("0", "0", "2012-12-12", "18:00");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 4.5;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "peak time 1 additional charge is not correct");

            //checking peak time 2 (12/10/2012 is a Monday)
            charge = new InputData("0", "0", "2012-12-10", "16:00");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 4.5;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "peak time 2 additional charge is not correct");

            //checking peak time 3 (12/14/2012 is a Wednesday)
            charge = new InputData("0", "0", "2012-12-14", "19:59");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 4.5;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "peak time 3 additional charge is not correct");

            //checking night 1 
            charge = new InputData("0", "0", "2012-12-12", "20:00");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 4;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "night time 1 additional charge is not correct");

            //checking night 2
            charge = new InputData("0", "0", "2012-12-12", "5:00");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 4;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "night time 2 additional charge is not correct");

            //checking peak time edge case (12/14/2012 is a Wednesday)
            charge = new InputData("0", "0", "2012-12-14", "20:00");
            calculatedCharge = calculator.CalculatePrice(charge);
            correctCharge = 4;
            Assert.AreEqual(correctCharge, calculatedCharge, 0.01, "peak time edge case additional charge is not correct");
        }
    }
}
