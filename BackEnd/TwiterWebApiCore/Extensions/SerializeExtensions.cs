using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Script.Serialization;

namespace TwitWebApiCore.Extensions
{
    public static class SerializeExtensions
    {
        public static string SerializeToJson<T>(this T obj) where T : class
        {
            // return new JavaScriptSerializer().Serialize(obj);
            return null;
        }

        public static T LoadFromFile<T>(this string path) where T : class
        {
            try
            {
                using (StreamReader file = File.OpenText(path))
                {
                    JsonSerializer serializer = new JsonSerializer();
                    return (T)serializer.Deserialize(file, typeof(T));
                }
            }
            catch(Exception ex)
            {

            }

            return default(T);
        }

        public static void SaveToFile<T>(this T obj,string fileName) where T : class
        {
            string output = obj.SerializeToJson();
            File.WriteAllText(fileName, output);
        }


    }
}