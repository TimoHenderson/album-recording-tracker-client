using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecordingTrackerApi.Data;
using RecordingTrackerApi.Models;
using RecordingTrackerApi.Services;
using Microsoft.AspNetCore.Cors;

namespace RecordingTrackerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistController : ControllerBase
    {
        private readonly ArtistsService _service;

        public ArtistController(ArtistsService service)
        {
            _service = service;
        }

        // GET: api/Artist
        [EnableCors]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Artist>>> GetArtists()
        {
            var artists = await _service.GetAll();
            if (artists == null)
            {
                return NotFound();
            }
            return Ok(artists);
        }

        // // GET: api/Artist/5
        // [HttpGet("{id}")]
        // public async Task<ActionResult<Artist>> GetArtist(int id)
        // {
        //     if (ArtistService.Artists == null)
        //     {
        //         return NotFound();
        //     }
        //     var artist = await ArtistService.Artists.FindAsync(id);

        //     if (artist == null)
        //     {
        //         return NotFound();
        //     }

        //     return artist;
        // }

        // // PUT: api/Artist/5
        // // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // [HttpPut("{id}")]
        // public async Task<IActionResult> PutArtist(int id, Artist artist)
        // {
        //     if (id != artist.Id)
        //     {
        //         return BadRequest();
        //     }

        //     ArtistService.Entry(artist).State = EntityState.Modified;

        //     try
        //     {
        //         await ArtistService.SaveChangesAsync();
        //     }
        //     catch (DbUpdateConcurrencyException)
        //     {
        //         if (!ArtistExists(id))
        //         {
        //             return NotFound();
        //         }
        //         else
        //         {
        //             throw;
        //         }
        //     }

        //     return NoContent();
        // }

        // // POST: api/Artist
        // // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // [HttpPost]
        // public async Task<ActionResult<Artist>> PostArtist(Artist artist)
        // {
        //     if (ArtistService.Artists == null)
        //     {
        //         return Problem("Entity set 'RecordingContext.Artists'  is null.");
        //     }
        //     ArtistService.Artists.Add(artist);
        //     await ArtistService.SaveChangesAsync();

        //     return CreatedAtAction("GetArtist", new { id = artist.Id }, artist);
        // }

        // // DELETE: api/Artist/5
        // [HttpDelete("{id}")]
        // public async Task<IActionResult> DeleteArtist(int id)
        // {
        //     if (ArtistService.Artists == null)
        //     {
        //         return NotFound();
        //     }
        //     var artist = await ArtistService.Artists.FindAsync(id);
        //     if (artist == null)
        //     {
        //         return NotFound();
        //     }

        //     ArtistService.Artists.Remove(artist);
        //     await ArtistService.SaveChangesAsync();

        //     return NoContent();
        // }

        // private bool ArtistExists(int id)
        // {
        //     return (ArtistService.Artists?.Any(e => e.Id == id)).GetValueOrDefault();
        // }
    }
}
