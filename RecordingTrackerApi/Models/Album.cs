using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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
    public Artist Parent { get; set; } = new Artist();

    [NotMapped]
    public int ParentNum => Parent.Id;

    [NotMapped]
    public string Type => "Album";

    [NotMapped]
    public string ChildType => "Song";

    public ICollection<Song> Children { get; set; } = new List<Song>();
}