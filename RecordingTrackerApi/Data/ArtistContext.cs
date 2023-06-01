using Microsoft.EntityFrameworkCore;
using RecordingTrackerApi.Models;

namespace RecordingTrackerApi.Data;

public class ArtistContext : DbContext
{
    public ArtistContext(DbContextOptions<ArtistContext> options)
        : base(options)
    {
    }

    public DbSet<Artist> Artists => Set<Artist>();
    public DbSet<Album> Albums => Set<Album>();
    public DbSet<Song> Songs => Set<Song>();
    public DbSet<Part> Parts => Set<Part>();
    public DbSet<Instrument> Instruments => Set<Instrument>();
}