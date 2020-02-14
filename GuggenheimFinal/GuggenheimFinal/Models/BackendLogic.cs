using GuggenheimFinal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace GuggenheimFinal.Models
{
    public class Calculations
    {

        //I will assume that the format of the input parameters are in the correct forms. Specifically, this means
        //overSix is a string of a non-negative int, underSix is a string of a non-negative float that is a multiple of 0.2, 
        //date is a string of the form "YYYY-MM-DD" where it represents a valid date, and rideStartTime is a string of the 
        //form "HH:MM" where HH is a valid hour and MM is a valid minute, in MILITARY time. 
        public double CalculatePrice(InputData inputs)
        {
            double nightCharge = 0; //Night surcharge of $.50 after 8:00 PM & before 6:00 AM
            double peakCharge = 0; //Peak hour Weekday Surcharge of $1.00 Monday - Friday after 4:00 PM & before 8:00 PM
            double NYTax = 0.5;  //New York State Tax is $0.50 per ride
            double entryCharge = 3.00; //$3.00 entry fee


            //date format is yyyy-mm-dd 
            string[] ymd = inputs.date.Split('-');
            int[] YMD = Array.ConvertAll(ymd, s => int.Parse(s));

            //time format is hh:mm
            string[] hm = inputs.rideStartTime.Split(':');
            int[] HM = Array.ConvertAll(hm, s => int.Parse(s));

            DateTime rideDT = new DateTime(YMD[0], YMD[1], YMD[2], HM[0], HM[1], 0); //assume 0 for seconds because it does not matter
            string[] weekdays = new string[] { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" };

            if (weekdays.Contains(rideDT.DayOfWeek.ToString()))
            {
                if (rideDT.Hour >= 16 && rideDT.Hour < 20) peakCharge = 1.00;
            }
            if (rideDT.Hour >= 20 || rideDT.Hour < 6) nightCharge = 0.50;

            return ((Int32.Parse(inputs.overSix) * 0.35) + (double.Parse(inputs.underSix) * 5 * 0.35) + (entryCharge + NYTax + nightCharge + peakCharge));
        }
    }
}
