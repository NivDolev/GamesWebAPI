using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Games.Controllers
{
    public class PageController : Controller
    {
		// GET: Page
		public ActionResult XML()
		{
			return new FilePathResult("~/Views/page/xml.html", "text/html");
		}

		public ActionResult AJAX()
		{
			return new FilePathResult("~/Views/page/ajax.html", "text/html");
		}

        public ActionResult RXJS()
        {
            return new FilePathResult("~/Views/page/rxjs.html", "text/html");
        }
    }
}