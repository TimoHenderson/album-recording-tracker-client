using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RecordingTrackerApi.Migrations
{
    /// <inheritdoc />
    public partial class Generalized : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Albums_Artists_ArtistId",
                table: "Albums");

            migrationBuilder.DropForeignKey(
                name: "FK_Parts_Instruments_InstrumentId",
                table: "Parts");

            migrationBuilder.DropForeignKey(
                name: "FK_Parts_Songs_SongId",
                table: "Parts");

            migrationBuilder.DropForeignKey(
                name: "FK_Songs_Albums_AlbumId",
                table: "Songs");

            migrationBuilder.RenameColumn(
                name: "AlbumId",
                table: "Songs",
                newName: "ParentId");

            migrationBuilder.RenameIndex(
                name: "IX_Songs_AlbumId",
                table: "Songs",
                newName: "IX_Songs_ParentId");

            migrationBuilder.RenameColumn(
                name: "SongId",
                table: "Parts",
                newName: "ParentId");

            migrationBuilder.RenameIndex(
                name: "IX_Parts_SongId",
                table: "Parts",
                newName: "IX_Parts_ParentId");

            migrationBuilder.RenameColumn(
                name: "ArtistId",
                table: "Albums",
                newName: "ParentId");

            migrationBuilder.RenameIndex(
                name: "IX_Albums_ArtistId",
                table: "Albums",
                newName: "IX_Albums_ParentId");

            migrationBuilder.AlterColumn<int>(
                name: "InstrumentId",
                table: "Parts",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Albums_Artists_ParentId",
                table: "Albums",
                column: "ParentId",
                principalTable: "Artists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Parts_Instruments_InstrumentId",
                table: "Parts",
                column: "InstrumentId",
                principalTable: "Instruments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Parts_Songs_ParentId",
                table: "Parts",
                column: "ParentId",
                principalTable: "Songs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Songs_Albums_ParentId",
                table: "Songs",
                column: "ParentId",
                principalTable: "Albums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Albums_Artists_ParentId",
                table: "Albums");

            migrationBuilder.DropForeignKey(
                name: "FK_Parts_Instruments_InstrumentId",
                table: "Parts");

            migrationBuilder.DropForeignKey(
                name: "FK_Parts_Songs_ParentId",
                table: "Parts");

            migrationBuilder.DropForeignKey(
                name: "FK_Songs_Albums_ParentId",
                table: "Songs");

            migrationBuilder.RenameColumn(
                name: "ParentId",
                table: "Songs",
                newName: "AlbumId");

            migrationBuilder.RenameIndex(
                name: "IX_Songs_ParentId",
                table: "Songs",
                newName: "IX_Songs_AlbumId");

            migrationBuilder.RenameColumn(
                name: "ParentId",
                table: "Parts",
                newName: "SongId");

            migrationBuilder.RenameIndex(
                name: "IX_Parts_ParentId",
                table: "Parts",
                newName: "IX_Parts_SongId");

            migrationBuilder.RenameColumn(
                name: "ParentId",
                table: "Albums",
                newName: "ArtistId");

            migrationBuilder.RenameIndex(
                name: "IX_Albums_ParentId",
                table: "Albums",
                newName: "IX_Albums_ArtistId");

            migrationBuilder.AlterColumn<int>(
                name: "InstrumentId",
                table: "Parts",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Albums_Artists_ArtistId",
                table: "Albums",
                column: "ArtistId",
                principalTable: "Artists",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Parts_Instruments_InstrumentId",
                table: "Parts",
                column: "InstrumentId",
                principalTable: "Instruments",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Parts_Songs_SongId",
                table: "Parts",
                column: "SongId",
                principalTable: "Songs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Songs_Albums_AlbumId",
                table: "Songs",
                column: "AlbumId",
                principalTable: "Albums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
