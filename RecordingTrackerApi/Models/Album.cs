using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace RecordingTrackerApi.Models;

public class Album
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string? Name { get; set; }

    [Required]
    [JsonIgnore]
    public Artist? Artist { get; set; }

    public ICollection<Song>? Songs { get; set; }
}