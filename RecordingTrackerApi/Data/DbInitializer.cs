using RecordingTrackerApi.Models;
using Microsoft.EntityFrameworkCore;

namespace RecordingTrackerApi.Data
{
    public static class DbInitializer
    {
        public static void Initialize(RecordingContext context)
        {
            context.Database.EnsureDeleted();
            context.Database.Migrate();

            if (context.Artists.Any()
                && context.Albums.Any()
                && context.Songs.Any()
                && context.Parts.Any()
                && context.Instruments.Any())
            {
                return;
            }

            var guitarInstrument = new Instrument { Name = "Guitar" };
            var bassInstrument = new Instrument { Name = "Bass" };
            var drumsInstrument = new Instrument { Name = "Drums" };

            var song1GuitarPart = new Part { Name = "Guitar Part", Instrument = guitarInstrument, completion = 20 };
            var song1BassPart = new Part { Name = "Bass Part", Instrument = bassInstrument, completion = 20 };
            var song1DrumsPart = new Part { Name = "Drums Part", Instrument = drumsInstrument, completion = 20 };

            var song2GuitarPart = new Part { Name = "Guitar Part2", Instrument = guitarInstrument };
            var song2BassPart = new Part { Name = "Bass Part2", Instrument = bassInstrument };
            var song2DrumsPart = new Part { Name = "Drums Part2", Instrument = drumsInstrument };

            var song1 = new Song { Name = "Song 1", Parts = new List<Part> { song1GuitarPart, song1BassPart, song1DrumsPart } };
            var song2 = new Song { Name = "Song 2", Parts = new List<Part> { song2GuitarPart, song2BassPart, song2DrumsPart } };

            var album1 = new Album { Name = "Album 1", Songs = new List<Song> { song1, song2 } };

            var artist1 = new Artist { Name = "Artist 1", Albums = new List<Album> { album1 } };

            var song3GuitarPart = new Part { Name = "Guitar Part3", Instrument = guitarInstrument, completion = 20 };
            var song3BassPart = new Part { Name = "Bass Part3", Instrument = bassInstrument };
            var song3DrumsPart = new Part { Name = "Drums Part3", Instrument = drumsInstrument };

            var song4GuitarPart = new Part { Name = "Guitar Part4", Instrument = guitarInstrument };
            var song4BassPart = new Part { Name = "Bass Part4", Instrument = bassInstrument };
            var song4DrumsPart = new Part { Name = "Drums Part4", Instrument = drumsInstrument };

            var song3 = new Song { Name = "Song 3", Parts = new List<Part> { song3GuitarPart, song3BassPart, song3DrumsPart } };
            var song4 = new Song { Name = "Song 4", Parts = new List<Part> { song4GuitarPart, song4BassPart, song4DrumsPart } };

            var album2 = new Album { Name = "Album 2", Songs = new List<Song> { song3, song4 } };

            var artist2 = new Artist { Name = "Artist 2", Albums = new List<Album> { album2 } };

            var artist3 = new Artist { Name = "Artist 3" };

            var artists = new Artist[] { artist1, artist2, artist3 };
            context.Artists.AddRange(artists);
            context.SaveChanges();

        }
    }
}