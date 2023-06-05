using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RecordingTrackerApi.Models;

public abstract class TreeNode : IEntityBase
{
    [Required]
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string? Name { get; set; }

    [NotMapped]
    public abstract string Type { get; }

    public virtual string ChildType { get; } = "None";

    public virtual int? CalculatedCompletion { get; } = null;

}