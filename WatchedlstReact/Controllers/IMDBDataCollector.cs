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
        static string apikey = "cd68ecbd";

        static async public Task<string> GetDataById(string id)
        {
            string data = null;
            try
            {
                string imdbAPIURL = String.Format("http://www.omdbapi.com/?i={0}&plot=full&apikey={1}", id, apikey);
                HttpClient client = new HttpClient();

                using (HttpResponseMessage res = await client.GetAsync(imdbAPIURL))
                using (HttpContent content = res.Content)
                {
                    data = await content.ReadAsStringAsync();
                    if (data != null)
                    {
                        //Console.WriteLine(this.Data);
                    }
                }
            }
            catch (Exception err)
            {
                //Console.Error.WriteLine(err.Message);
            }
            return data;
        }

        static async public Task<string> GetDataBySearch(string query)
        {
            string data = null;
            try
            {
                string imdbAPIURL = String.Format("http://www.omdbapi.com/?s={0}&apikey={1}", query, apikey);
                HttpClient client = new HttpClient();

                using (HttpResponseMessage res = await client.GetAsync(imdbAPIURL))
                using (HttpContent content = res.Content)
                {
                    data = await content.ReadAsStringAsync();
                    if (data != null)
                    {
                        //Console.WriteLine(this.Data);
                    }
                }
            }
            catch (Exception err)
            {
                //Console.Error.WriteLine(err.Message);
            }
            return data;
        }
        static async public Task<string> GetDataBySearch(string query, int page)
        {
            string data = null;
            try
            {
                string imdbAPIURL = String.Format("http://www.omdbapi.com/?s={0}&page={1}&apikey={2}", query, page, apikey);
                HttpClient client = new HttpClient();

                using (HttpResponseMessage res = await client.GetAsync(imdbAPIURL))
                using (HttpContent content = res.Content)
                {
                    data = await content.ReadAsStringAsync();
                    if (data != null)
                    {
                        //Console.WriteLine(this.Data);
                    }
                }
            }
            catch (Exception err)
            {
                //Console.Error.WriteLine(err.Message);
            }
            return data;
        }
    }
}
