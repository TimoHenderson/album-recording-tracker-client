using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RecordingTrackerApi.Models;

public class Artist : TreeNode
{
    [NotMapped]
    public override string Type => "Artist";

    [NotMapped]
    public override string ChildType => "Album";

    [JsonIgnore]
    public ICollection<Album> Children { get; set; } = new List<Album>();

    [NotMapped]
    public ICollection<int> ChildrenIds => Children.Select(a => a.Id).ToList();
}