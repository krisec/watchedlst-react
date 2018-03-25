using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

/// <summary>
/// Controller for retrival 
/// </summary>
namespace WatchedlstReact.Controllers
{
    public class IMDBDataController : Controller
    {
        static string apikey = "2065e398";
        static async public void GetData(string id)
        {
            try
            {
                string imdbAPIURL = String.Format("http://www.omdbapi.com/?i={0}&apikey={1}", id, apikey);
                HttpClient client = new HttpClient();

                using (HttpResponseMessage res = await client.GetAsync(imdbAPIURL))
                using (HttpContent content = res.Content)
                {
                    string data = await content.ReadAsStringAsync();
                    if (data != null)
                    {
                        Console.WriteLine(data);
                    }
                }
            }
            catch (Exception err)
            {
                Console.WriteLine(err.Message);
            }
        }
    }
}
