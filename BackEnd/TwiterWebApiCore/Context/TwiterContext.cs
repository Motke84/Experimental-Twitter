using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TwitWebApiCore.Models;
using TwitWebApiCore.Extensions;

namespace TwiterWebApiCore.Context
{

    public class TwiterContext : DbContext
    {
        private string _path;

        public TwiterContext(DbContextOptions<TwiterContext> options)
            : base(options)
        {
            _path = "./Data/TwitsData.json";

            if (!Twits.Any())
            {
                var twits = _path.LoadFromFile<List<TwitModel>>();
                Twits.AddRange(twits);
                base.SaveChanges();
            }

        }


        public DbSet<TwitModel> Twits { get; set; }

        public void SaveTwit(TwitModel newTwit)
        {
            Twits.Add(newTwit);
            Twits.SaveToFile(_path);
            base.SaveChanges();
        }

        internal void DeleteTwit(TwitModel twit)
        {
            Twits.Remove(twit);
            Twits.SaveToFile(_path);
            base.SaveChanges();
        }
    }

}
