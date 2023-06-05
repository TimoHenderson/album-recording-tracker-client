using System;
using Microsoft.AspNetCore.Mvc;
using RecordingTrackerApi.Models;
using RecordingTrackerApi.Services;

namespace RecordingTrackerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartsController : GenericController<Part>
    {
        public PartsController(PartsService service) : base(service) { }
    }
}

