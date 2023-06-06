using System;
using Microsoft.AspNetCore.Mvc;
using RecordingTrackerApi.Models;
using RecordingTrackerApi.Services;


namespace RecordingTrackerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistsController : GenericController<Artist>
    {
        public ArtistsController(ArtistsService service) : base(service) { }

    }
}
