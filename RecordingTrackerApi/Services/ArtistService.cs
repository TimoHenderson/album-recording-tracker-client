using RecordingTrackerApi.Models;
using RecordingTrackerApi.Data;
using Microsoft.EntityFrameworkCore;

namespace RecordingTrackerApi.Services;

public class ArtistService
{
    private readonly RecordingContext _context;

    public ArtistService(RecordingContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Artist>> GetAll()
    {
        return await _context.Artists
        .Include(a => a.Children)
        .AsNoTracking()
        .ToListAsync();

        // foreach (var artist in artists)
        // {
        //     System.Console.WriteLine(artist.Name, artist.Children.Count);
        //     foreach (var id in artist.ChildrenIds)
        //     {
        //         System.Console.WriteLine(id);
        //     }
        // }
        // return artists;
    }

    public Artist? Get(int id)
    {
        return _context.Artists.
           Include(a => a.Children)
            .ThenInclude(a => a.Children)
            .ThenInclude(s => s.Children)
            // .ThenInclude(p => p.Instrument)
            .AsNoTracking()
            .SingleOrDefault(a => a.Id == id);
    }

    public void Update(Artist artist)
    {
        _context.Update(artist);
        _context.SaveChanges();
    }


}