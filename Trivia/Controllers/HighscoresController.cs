using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Trivia.Data;
using Trivia.Models;

namespace Trivia.Controllers
{
    [Produces("application/json")]
    [Route("api/Highscores")]
    public class HighscoresController : Controller
    {
        private readonly TriviaContext _context;

        public HighscoresController(TriviaContext context)
        {
            _context = context;
        }

        // GET: api/Highscores
        [HttpGet]
        public IEnumerable<Highscore> GetHighscore()
        {
            return _context.Highscore.OrderByDescending(s => s.Score).ThenByDescending(d => d.Date);
        }

        // GET: api/Highscores/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHighscore([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var highscore = await _context.Highscore.SingleOrDefaultAsync(m => m.Id == id);

            if (highscore == null)
            {
                return NotFound();
            }

            return Ok(highscore);
        }

        // PUT: api/Highscores/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHighscore([FromRoute] int id, [FromBody] Highscore highscore)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != highscore.Id)
            {
                return BadRequest();
            }

            _context.Entry(highscore).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HighscoreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Highscores
        [HttpPost]
        public async Task<IActionResult> PostHighscore([FromBody] Highscore highscore)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Highscore.Add(highscore);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHighscore", new { id = highscore.Id }, highscore);
        }

        // DELETE: api/Highscores/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHighscore([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var highscore = await _context.Highscore.SingleOrDefaultAsync(m => m.Id == id);
            if (highscore == null)
            {
                return NotFound();
            }

            _context.Highscore.Remove(highscore);
            await _context.SaveChangesAsync();

            return Ok(highscore);
        }

        private bool HighscoreExists(int id)
        {
            return _context.Highscore.Any(e => e.Id == id);
        }
    }
}