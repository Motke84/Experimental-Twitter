using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using TwitWebApi.Extensions;
using TwitWebApi.Models;

namespace TwitWebApi.Controllers
{
    [RoutePrefix("api/Twiter")]
    public class TwitController : ApiController
    {
        private readonly string _path;

        private List<TwitModel> Twits { get; }

        public TwitController()
        {
            _path = HttpContext.Current.Server.MapPath("~/App_Data/TwitsData.json");
            Twits = _path.LoadFromFile<List<TwitModel>>();
        }

        [Route("GetAllTwits")]
        //http://localhost:49882/api/Twiter/GetAllTwits
        public IEnumerable<TwitModel> GetAllTwits()
        {
            return Twits;
        }

        [HttpGet]
        [Route("GetTwits/{id}")]
        //http://localhost:49882/api/Twiter/GetTwits/1
        public IHttpActionResult GetTwit(int id)
        {
            var twit = Twits.FirstOrDefault(p => p.Id == id);
            return twit == null ? (IHttpActionResult) NotFound() : Ok(twit);
        }

        //[HttpPost]
        //[Route("AddTwit")]
        ////http://localhost:49882/api/Twiter/AddTwit
        //public IHttpActionResult AddTwit([FromBody] string newTwit)
        //{
        //    var twit = newTwit.DeserializeFromJson<TwitModel>();

        //    if (twit == null)
        //        return BadRequest();

        //    var max = Twits.ToList().Max(e => e.Id);
        //    twit.Id = max + 1;
        //    Twits.Add(twit);
        //    Twits.SaveToFile(_path);

        //    return Ok(twit);
        //}

        [HttpPost]
        [Route("AddTwit")]
        //http://localhost:49882/api/Twiter/AddTwit
        public IHttpActionResult AddTwit([FromBody] TwitModel newTwit)
        {
            var twit = newTwit;

            if (twit == null)
                return BadRequest();

            var max = Twits.ToList().Max(e => e.Id);
            twit.Id = max + 1;
            Twits.Add(twit);
            Twits.SaveToFile(_path);

            return Ok(newTwit);
        }
        
    }
}
