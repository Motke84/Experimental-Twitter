using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;

namespace TwitWebApi.Models
{
    public class TwitModel
    {
        public int Id { get; set; }

        public string AutorImage { get; set; }

        public string AutorName { get; set; }

        public string AutorUser { get; set; }

        public string AutorComments { get; set; }

        public int TotalLikes { get; set; }

        public bool CurrentUserLiked { get; set; }

        public string AutorEmail { get; set; }

        public string MailFrequency { get; set; }
    }
}