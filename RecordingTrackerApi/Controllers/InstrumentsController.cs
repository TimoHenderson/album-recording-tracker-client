using System;
using Microsoft.AspNetCore.Mvc;
using RecordingTrackerApi.Models;
using RecordingTrackerApi.Services;

namespace RecordingTrackerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstrumentsController : GenericController<Instrument>
    {
        public InstrumentsController(InstrumentsService service) : base(service) { }
    }
}

