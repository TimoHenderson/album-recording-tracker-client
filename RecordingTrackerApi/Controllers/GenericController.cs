using System;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using RecordingTrackerApi.Models;
using RecordingTrackerApi.Services;

namespace RecordingTrackerApi.Controllers
{
   
    public abstract class GenericController<TEntity> :ControllerBase
		where TEntity:IEntityBase
	{
		protected readonly IEntityService<TEntity> _service;

		protected GenericController(IEntityService<TEntity> service)
		{
			_service = service;
		}

        [EnableCors]
        [HttpGet]
        public virtual async Task<ActionResult<IEnumerable<TEntity>>> GetAll()
        {
            var entities = await _service.GetAll();
            if (entities == null)
            {
                return NotFound();
            }
            return Ok(entities);
        }

        // GET: api/Artists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TEntity>>? GetArtist(int id)
        {
            var entity = await _service.Get(id);
            
            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

    }
}

