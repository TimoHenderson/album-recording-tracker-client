using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace RecordingTrackerApi.Models;

public class Part : TreeNode
{

    [Required]
    [JsonIgnore]
    public Song Parent { get; set; } = new Song();

    [NotMapped]
    public string? ParentType => Parent != null ? Parent.Type : null;

    [NotMapped]
    public int? ParentNum => Parent != null ? Parent.Id : null;


    [NotMapped]
    public override string Type => "Part";

    public Instrument Instrument { get; set; } = new Instrument();

    public int Completion { get; set; } = 0;

    [NotMapped]
    public override int? CalculatedCompletion { get => Completion; }

}