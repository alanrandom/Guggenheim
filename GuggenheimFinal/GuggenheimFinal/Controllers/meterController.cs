using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GuggenheimFinal.Models;



namespace GuggenheimFinal.Controllers
{
    public class meterController : ApiController
    {
        // GET api/meter
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/meter/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/meter
        //This is the only function that we need to use for the backend for this project. The code is in Models/BackendLogic.cs. 
        //I am leaving in the original GET, PUT, DELETE methods because they might be needed in the future for other calls, and they
        //were default included when I set up this project. 
        
        public double Post([FromBody] InputData inputs)
        {
            Calculations solver = new Calculations();
            return solver.CalculatePrice(inputs);
        }

        //this is somewhat of a hack that I put in because calling POST kept giving me an http error of: 
        //"has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status."
        //I finally found this solution after understanding the communication process (sends an option first), and given the amount of time
        //this took (around 3 hours), I think writing tests is a much greater priority for my time (I do not want to spend another 3 hours on a
        //"proper" solution). 
        public HttpResponseMessage Options()
        {
            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }

        // PUT api/meter/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/meter/5
        public void Delete(int id)
        {
        }
    }
}
