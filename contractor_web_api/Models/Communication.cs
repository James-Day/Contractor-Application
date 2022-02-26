using System.ComponentModel.DataAnnotations;
namespace contractor_web_api.Models
{
    public class Communication
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(25)]
        public string toUserName { get; set; }
        [Required]
        [MaxLength(25)]
        public string fromUserName { get; set; }
        [Required]
        [MaxLength(500)]
        public string message { get; set; }
        [Required]
        public DateTime time { get; set; }

    }
}
