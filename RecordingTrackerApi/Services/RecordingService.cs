using RecordingTrackerApi.Models;
using RecordingTrackerApi.Data;
using Microsoft.EntityFrameworkCore;

namespace RecordingTrackerApi.Services;

public class RecordingService
{
    private readonly RecordingContext _context;

    public RecordingService(RecordingContext context)
    {
        _context = context;
    }

    public IEnumerable<Artist> GetAll()
    {
        return _context.Artists
            .AsNoTracking()
            .ToList();
    }
}