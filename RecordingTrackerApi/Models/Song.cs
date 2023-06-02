using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RecordingTrackerApi.Models;

public class Song : TreeNode
{
    [NotMapped]
    public override string Type => "Song";

    [NotMapped]
    public override string ChildType => "Part";

    [Required]
    [JsonIgnore]
    public Album Parent { get; set; } = new Album();

    [NotMapped]
    public string? ParentType => Parent != null ? Parent.Type : null;

    [NotMapped]
    public int? ParentNum => Parent != null ? Parent.Id : null;

    [JsonIgnore]
    public ICollection<Part> Children { get; set; } = new List<Part>();

    [NotMapped]
    public ICollection<int> ChildrenIds => Children.Select(a => a.Id).ToList();

}