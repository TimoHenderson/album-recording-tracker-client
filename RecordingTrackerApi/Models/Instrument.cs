using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace RecordingTrackerApi.Models;

public class Instrument
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string? Name { get; set; }

    [JsonIgnore]
    public ICollection<Part>? Parts { get; set; }
}