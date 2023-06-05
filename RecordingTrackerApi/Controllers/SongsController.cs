using System;
using Microsoft.AspNetCore.Mvc;
using RecordingTrackerApi.Models;
using RecordingTrackerApi.Services;

namespace RecordingTrackerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongsController : GenericController<Song>
    {
        public SongsController(SongsService service) : base(service) { }
    }
}

