using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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
    public Album Parent { get; set; } = new Album();

    [NotMapped]
    public int ParentNum => Parent.Id;

    [NotMapped]
    public string Type => "Song";

    [NotMapped]
    public string ChildType => "Part";


    public ICollection<Part> Children { get; set; } = new List<Part>();
}