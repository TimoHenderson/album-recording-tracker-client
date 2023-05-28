using RecordingTrackerApi.Services;
using RecordingTrackerApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace RecordingTrackerApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecordingController : ControllerBase
    {
        private readonly RecordingService _service;

        public RecordingController(RecordingService service)
        {
            _service = service;
        }

        [EnableCors]
        [HttpGet]
        public IEnumerable<Artist> GetAll()
        { // make this get all of the linked data that has a reference to the Artist




            return _service.GetAll();
        }
    }
}