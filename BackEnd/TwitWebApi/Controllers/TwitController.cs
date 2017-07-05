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
        [Route("GetTwit/{id}")]
        //http://localhost:49882/api/Twiter/GetTwit/1
        public IHttpActionResult GetTwit(int id)
        {
            var twit = Twits.FirstOrDefault(p => p.id == id);
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

            if (twit.id > 0)
            {
                twit = Twits.FirstOrDefault(e => e.id == twit.id);
                twit.autorComments = newTwit.autorComments;
                twit.autorEmail = newTwit.autorEmail;
                twit.autorImage = newTwit.autorImage;
                twit.autorName = newTwit.autorName;
                twit.autorUser = newTwit.autorUser;
                twit.currentUserLiked = newTwit.currentUserLiked;
                twit.totalLikes = newTwit.totalLikes;
                twit.mailFrequency = newTwit.mailFrequency;
            }
            else
            {
                var max = Twits.ToList().Max(e => e.id);
                twit.id = max + 1;
                Twits.Add(twit);
            }

            
            Twits.SaveToFile(_path);

            return Ok(newTwit);
        }

        [HttpGet]
        [Route("DeleteTwit/{id}")]
        //http://localhost:49882/api/Twiter/DeleteTwit/10
        public IHttpActionResult DeleteTwit(int id)
        {
            var twit = Twits.FirstOrDefault(p => p.id == id);
            if (twit == null)
                return (IHttpActionResult) NotFound();

            Twits.Remove(twit);
            Twits.SaveToFile(_path);

            return Ok(Twits);
        }

    }
}
