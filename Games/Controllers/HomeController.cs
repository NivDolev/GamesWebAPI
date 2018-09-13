﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Games.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
            return new FilePathResult("~/Views/page/index.html", "text/html");
        }
	}
}
