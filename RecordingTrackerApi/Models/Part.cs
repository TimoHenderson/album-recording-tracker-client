using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RecordingTrackerApi.Models;

public class Part
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string? Name { get; set; }

    [Required]
    [JsonIgnore]
    public Song Parent { get; set; } = new Song();

    [NotMapped]
    public int ParentNum => Parent.Id;

    public Instrument Instrument { get; set; } = new Instrument();

    public int completion { get; set; } = 0;


}