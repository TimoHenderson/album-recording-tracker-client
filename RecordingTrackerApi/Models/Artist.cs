using System.ComponentModel.DataAnnotations;

namespace RecordingTrackerApi.Models;

public class Artist
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string? Name { get; set; }

    public ICollection<Album>? Albums { get; set; }
}