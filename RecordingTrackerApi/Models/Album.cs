using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RecordingTrackerApi.Models;

public class Album : TreeNode
{
    [Required]
    [JsonIgnore]
    public Artist Parent { get; set; } = new Artist();

    [NotMapped]
    public string? ParentType => Parent != null ? Parent.Type : null;

    [NotMapped]
    public int? ParentNum => Parent != null ? Parent.Id : null;
    [NotMapped]
    public override string Type => "Album";

    [NotMapped]
    public override string ChildType => "Song";

    [JsonIgnore]
    public ICollection<Song> Children { get; set; } = new List<Song>();

    [NotMapped]
    public ICollection<int> ChildrenIds => Children.Select(a => a.Id).ToList();
}