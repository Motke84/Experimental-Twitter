using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace TwitWebApi.Extensions
{
    public static class SerializeExtensions
    {
        public static string SerializeToJson<T>(this T obj) where T : class
        {
            return new JavaScriptSerializer().Serialize(obj);
        }

        public static T DeserializeFromJson<T>(this string json) where T : class
        {
            return new JavaScriptSerializer().Deserialize<T>(json);
        }

        public static void SaveToFile<T>(this T obj,string fileName) where T : class
        {
            string output = obj.SerializeToJson();
            File.WriteAllText(fileName, output);
        }

        public static T LoadFromFile<T>(this string fileName) where T : class
        {
            string json = File.ReadAllText(fileName);
            return json.DeserializeFromJson<T>();
        }

    }
}