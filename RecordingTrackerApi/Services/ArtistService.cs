using RecordingTrackerApi.Models;
using RecordingTrackerApi.Data;
using Microsoft.EntityFrameworkCore;

namespace RecordingTrackerApi.Services;

public class ArtistService
{
    private readonly ArtistContext _context;

    public ArtistService(ArtistContext context)
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

    public Artist? Get(int id)
    {
        return _context.Artists.
           Include(a => a.Albums)
            .ThenInclude(a => a.Songs)
            .ThenInclude(s => s.Parts)
            .ThenInclude(p => p.Instrument)
            .AsNoTracking()
            .SingleOrDefault(a => a.Id == id);
    }

    public void Update(Artist artist)
    {
        _context.Update(artist);
        _context.SaveChanges();
    }


}