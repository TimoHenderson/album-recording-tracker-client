
using Microsoft.EntityFrameworkCore;
using RecordingTrackerApi.Data;
using RecordingTrackerApi.Models;

namespace RecordingTrackerApi.Services;

public class InstrumentsService : GenericEntityService<Instrument>
{
    public InstrumentsService(RecordingContext context) : base(context) { }

}