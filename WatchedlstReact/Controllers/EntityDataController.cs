using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.WindowsAzure;

namespace WatchedlstReact.Controllers
{
    [Route("api/[controller]")]
    public class EntityDataController : Controller
    {
        // GET: Entity
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet("[action]/{id}")]
        public async Task<string> MovieJSONById(string id)
        {
            string s = await IMDBDataCollector.GetDataById(id);
            return s;
        }

        [HttpGet("[action]/{query}")]
        public async Task<string> MovieJSONBySearch(string query)
        {
            string s = await IMDBDataCollector.GetDataBySearch(query);
            return s;
        }

        // GET: Entity/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Entity/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Entity/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Entity/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Entity/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Entity/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Entity/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}