using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace RecordingTrackerApi.Models;

public class Song
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string? Name { get; set; }

    [Required]
    [JsonIgnore]
    public Album? Album { get; set; }

    public ICollection<Part>? Songs { get; set; }
}