using System;
using Microsoft.EntityFrameworkCore;
using RecordingTrackerApi.Models;

namespace RecordingTrackerApi.Services
{
	public interface IEntityService<T> where T : IEntityBase
	{
        public Task<IEnumerable<Artist>> GetAll();

        public Task<T?> Get(int id);

        public Task<T> Create(T entity);

        public void Delete(T entity);

        public void Update(T entity);
        
    }
}

