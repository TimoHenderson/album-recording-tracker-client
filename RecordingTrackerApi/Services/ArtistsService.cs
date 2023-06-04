using RecordingTrackerApi.Models;
using RecordingTrackerApi.Data;
using Microsoft.EntityFrameworkCore;

namespace RecordingTrackerApi.Services;

public class ArtistsService: IEntityService<Artist>
{
    private readonly RecordingContext _context;

    public ArtistsService(RecordingContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Artist>> GetAll()
    {
        return await _context.Artists
        .Include(a => a.Children)
        .AsNoTracking()
        .ToListAsync();
    }

    public void Update(Artist artist)
    {
        _context.Update(artist);
        _context.SaveChanges();
    }

    public async Task<Artist?> Get(int id)
    {
        var artist = await _context.Artists.FindAsync(id);

        if (artist == null)
        {
            return null;
        }
        else
        {
            return await _context.Artists.
               Include(a => a.Children)
                .ThenInclude(a => a.Children)
                .ThenInclude(s => s.Children)
                .AsNoTracking()
                .SingleOrDefaultAsync(a => a.Id == id);
        }
    }

    public async Task<Artist> Create(Artist artist)
    {
        _context.Artists.Add(artist);
        
        await _context.SaveChangesAsync();

        return artist;
    }

    public void Delete(Artist entity)
    {
        throw new NotImplementedException();
    }
}