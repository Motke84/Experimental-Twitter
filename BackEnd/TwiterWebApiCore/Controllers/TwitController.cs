using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TwitWebApiCore.Models;
using TwiterWebApiCore;
using TwiterWebApiCore.Context;
using Microsoft.AspNetCore.Cors;

namespace TwitWebApiCore.Controllers
{
    [EnableCors("AllowAllOrigins")]
    [Route("api/Twiter")]
    public class TwitController : Controller
    {
        private readonly string _path;
        TwiterContext _context;


        private List<TwitModel> Twits { get; }

        public TwitController(TwiterContext context)
        {
            _context = context;
            //_path = HttpContext.Current.Server.MapPath("~/App_Data/TwitsData.json");
            //  Twits = _path.LoadFromFile<List<TwitModel>>();
        }

        [HttpGet("GetAllTwits", Name = "GetAllTwits")]
        //http://localhost:49882/api/Twiter/GetAllTwits
        public IEnumerable<TwitModel> GetAllTwits()
        {
            return _context.Twits.ToList();
        }

        [HttpGet("GetTwit/{id}", Name = "GetTwit")]
        //http://localhost:49882/api/Twiter/GetTwit/1
        public IActionResult GetTwit(int id)
        {
            var twit = _context.Twits.FirstOrDefault(p => p.id == id);

            if (twit == null)
            {
                return NotFound();
            }
            return Ok(twit);
        }

        //[HttpPost("AddTwit", Name = "AddTwit")]
        ////http://localhost:49882/api/Twiter/AddTwit
        //public IActionResult AddTwit([FromBody] TwitModel newTwit)
        //{
        //    var twit = newTwit;

        //    if (twit == null)
        //        return BadRequest();

        //    var max = Twits.ToList().Max(e => e.id);
        //    twit.id = max + 1;
         
            
        //    _context.SaveTwit(newTwit);
        //    return Ok(twit);
        //}

        [HttpPost("AddTwit", Name = "AddTwit")]
        //http://localhost:49882/api/Twiter/AddTwit
        public IActionResult AddTwit([FromBody] TwitModel newTwit)
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


            //Twits.SaveToFile(_path);
            _context.SaveTwit(newTwit);
            return Ok(newTwit);
        }

        [HttpGet("DeleteTwit/{id}", Name = "DeleteTwit")]
        //http://localhost:49882/api/Twiter/DeleteTwit/10
        public IActionResult DeleteTwit(int id)
        {
            var twit = Twits.FirstOrDefault(p => p.id == id);
            if (twit == null)
                return NotFound();

            _context.DeleteTwit(twit);
            return Ok(Twits);
        }

    }
}
