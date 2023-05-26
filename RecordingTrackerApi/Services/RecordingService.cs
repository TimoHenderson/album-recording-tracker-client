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
        return _context.Artists.
            Include(a => a.Albums)
            .ThenInclude(a => a.Songs)
            .ThenInclude(s => s.Parts)
            .ThenInclude(p => p.Instrument)
            .AsNoTracking()
            .ToList();
    }
}