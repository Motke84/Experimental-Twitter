using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;


namespace TwitWebApiCore.Models
{
    public class TwitModel
    {
        public int id { get; set; }

        public string autorImage { get; set; }

        public string autorName { get; set; }

        public string autorUser { get; set; }

        public string autorComments { get; set; }

        public int totalLikes { get; set; }

        public bool currentUserLiked { get; set; }

        public string autorEmail { get; set; }

        public string mailFrequency { get; set; }
    }
}