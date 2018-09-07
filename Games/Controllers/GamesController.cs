using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GamesService;

namespace Games.Controllers
{
	public class GamesController : ApiController
	{
		// GET api/games
		[HttpGet]
        [Route("api/games/")]
        public HttpResponseMessage Get()
		{
			using (GamesDBEntities entities = new GamesDBEntities())
			{
				List<Game> games = entities.Games.ToList();
				if (games != null)
				{
					return Request.CreateResponse(HttpStatusCode.OK, games);
				}
				else
				{
					return Request.CreateResponse(HttpStatusCode.NotFound, "No games found!");
				}
			}
		}

		// GET api/games/5
		[HttpGet]
		[Route("api/games/{id:int}")]
		public HttpResponseMessage Get(int id)
		{
			using (GamesDBEntities entities = new GamesDBEntities())
			{
				Game game = entities.Games.FirstOrDefault(g => g.Id == id);
				if (game != null)
				{
					return Request.CreateResponse(HttpStatusCode.OK, game);
				}
				else
				{
					return Request.CreateResponse(HttpStatusCode.NotFound, "No games found!");
				}
			}
		}

		// GET api/games/name
		[HttpGet]
		[Route("api/games/{name}")]
		public HttpResponseMessage Get(string name)
		{
			using (GamesDBEntities entities = new GamesDBEntities())
			{
				List<Game> games = entities.Games.Where(g => (g.Player_One == name || g.Player_Two == name)).ToList();
				if (games != null)
				{
					return Request.CreateResponse(HttpStatusCode.OK, games);
				}
				else
				{
					return Request.CreateResponse(HttpStatusCode.NotFound, "No games found!");
				}
			}
		}

		[HttpGet]
		[Route("api/games/seach")]
		public HttpResponseMessage Get(int winner = -1, int id = 0, string gameName = "", string playerOne = "", string playerTwo = "")
		{
			using (GamesDBEntities entities = new GamesDBEntities())
			{
				List<Game> games = entities.Games.Where(g => (
					g.Game_Name.StartsWith(gameName) &&
					g.Player_One.StartsWith(playerOne) &&
					g.Player_Two.StartsWith(playerTwo) &&
					(id == 0 || g.Id == id) &&
					(winner == -1 || g.Winner == winner)
				)).ToList();
				if (games.Count > 0)
				{
					return Request.CreateResponse(HttpStatusCode.OK, games);
				}
				else
				{
					return Request.CreateResponse(HttpStatusCode.NotFound, "No games found");
				}
			}
		}

		// POST api/games
		[HttpPost]
        [Route("api/games/")]
        public HttpResponseMessage Post([FromBody]Game game)
		{
			using (GamesDBEntities entities = new GamesDBEntities())
			{
				entities.Games.Add(game);
				entities.SaveChanges();
				return Request.CreateResponse(HttpStatusCode.OK, "Game was added successfully");
			}
		}

		// PUT api/games/5
		[HttpPut]
        [Route("api/games/{id}")]
        public HttpResponseMessage Put(int id, [FromBody]Game game)
		{
			using (GamesDBEntities entities = new GamesDBEntities())
			{
				Game newGame = entities.Games.FirstOrDefault(g => g.Id == id);
				if (newGame != null)
				{
					newGame.Game_Name = game.Game_Name;
					newGame.Player_One = game.Player_One;
					newGame.Player_Two = game.Player_Two;
					newGame.Winner = game.Winner;
					entities.SaveChanges();
					return Request.CreateResponse(HttpStatusCode.OK, "Game updated successfully");
				}
				else
				{
					return Request.CreateResponse(HttpStatusCode.NotFound, "Game was not found");
				}
			}
		}

		// DELETE api/games/5
		[HttpDelete]
        [Route("api/games/{id}")]
        public HttpResponseMessage Delete(int id)
		{
			using (GamesDBEntities entities = new GamesDBEntities())
			{
				Game game = entities.Games.FirstOrDefault(g => g.Id == id);
				if (game != null)
				{
					entities.Games.Remove(game);
					entities.SaveChanges();
					return Request.CreateResponse(HttpStatusCode.OK, "Game deleted successfully");
				}
				else
				{
					return Request.CreateResponse(HttpStatusCode.NotFound, "Game not found");
				}
			}
		}
	}
}
