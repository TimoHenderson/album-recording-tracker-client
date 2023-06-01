using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecordingTrackerApi.Models;

public class Artist
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string? Name { get; set; }

    [NotMapped]
    public string Type => "Artist";

    [NotMapped]
    public string ChildType => "Album";

    public ICollection<Album> Children { get; set; } = new List<Album>();
}