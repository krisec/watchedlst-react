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
    public class IMDBDataCollector
    {
        static string apikey = "2065e398";
        string data;
        bool recieved = false;

        public bool Recieved { get => recieved; set => recieved = value; }
        public string Data { get => data; set => data = value; }

        async public void GetData(string id)
        {
            this.Data = null;
            try
            {
                string imdbAPIURL = String.Format("http://www.omdbapi.com/?i={0}&apikey={1}", id, apikey);
                HttpClient client = new HttpClient();

                using (HttpResponseMessage res = await client.GetAsync(imdbAPIURL))
                using (HttpContent content = res.Content)
                {
                    this.Data = await content.ReadAsStringAsync();
                    if (this.Data != null)
                    {
                        Console.WriteLine(this.Data);
                    }
                }
            }
            catch (Exception err)
            {
                Console.WriteLine(err.Message);
            }
            Recieved = true;
        }
    }
}
