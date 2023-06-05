using System;
using Microsoft.AspNetCore.Mvc;
using RecordingTrackerApi.Models;
using RecordingTrackerApi.Services;

namespace RecordingTrackerApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AlbumsController : GenericController<Album>
	{
		public AlbumsController(AlbumsService service) : base(service) { }
	}
}

