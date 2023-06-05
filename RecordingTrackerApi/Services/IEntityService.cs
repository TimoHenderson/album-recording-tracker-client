using System;
using Microsoft.EntityFrameworkCore;
using RecordingTrackerApi.Models;

namespace RecordingTrackerApi.Services
{
    public interface IEntityService<T> where T : IEntityBase
    {
        public Task<IEnumerable<T>> GetAll();

        public Task<T?> Get(int id);

        public Task<T?> Create(T entity);

        public Task<T?> Delete(int id);

        public Task<T?> Update(T entity);

    }
}

