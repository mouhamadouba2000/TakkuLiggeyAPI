﻿namespace TakkuLiggeyAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Role { get; set; } = "Client";
        public string PhoneNumber { get; set; } // Nouveau champ
        public string Address { get; set; } // Nouveau champ
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
