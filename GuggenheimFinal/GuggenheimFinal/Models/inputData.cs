using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GuggenheimFinal.Models
{
    public class InputData
    {
        public InputData(string overSix, string underSix, string date, string rideStartTime)
        {
            this.overSix = overSix;
            this.underSix = underSix;
            this.date = date;
            this.rideStartTime = rideStartTime;
        }
        public string overSix { get; set; }
        public string underSix { get; set; }
        public string date { get; set; }
        public string rideStartTime { get; set; }

        
    }
}