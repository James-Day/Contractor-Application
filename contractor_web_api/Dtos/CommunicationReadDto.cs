namespace contractor_web_api.Dtos
{
    public class CommunicationReadDto
    {      
        public int Id { get; set; } 
        public string toUserName { get; set; }
        public string fromUserName { get; set; }
        public string message { get; set; }
        public DateTime time { get; set; }
    }
}
