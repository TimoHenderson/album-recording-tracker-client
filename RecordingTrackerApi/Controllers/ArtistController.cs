using RecordingTrackerApi.Services;
using RecordingTrackerApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace RecordingTrackerApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArtistController : ControllerBase
    {
        private readonly ArtistService _service;

        public ArtistController(ArtistService service)
        {
            _service = service;
        }

        [EnableCors]
        [HttpGet]
        public IEnumerable<Artist> GetAll()
        {
            return _service.GetAll();
        }

        [EnableCors]
        [HttpPut("{id}")]
        public IActionResult Update(int id, Artist artist)
        {
            if (id != artist.Id)
                return BadRequest();
            var existingArtist = _service.Get(id);
            if (existingArtist is null)
                return NotFound();

            _service.Update(artist);

            return NoContent();
        }

    }
}