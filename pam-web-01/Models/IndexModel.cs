using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace pam_web_01.Models
{
    [Bind(Exclude = "Application")]
    public class IndexModel
    {
        // données de portée application
        public ApplicationModel Application { get; set; }
        // valeurs postées
        [Display(Name = "Employé")]
        public string SS { get; set; }

        [Required(ErrorMessage = "Le champ Heure Travaillées est requis !")]
        [Display(Name = "Heures travaillées")]
        [Range(0, 400, ErrorMessage = "Le nombre d'heures doit être dans l'intervale [0, 400]!")]
        [UIHint("Decimal")]
        public double HeuresTravaillées { get; set; }

        [Required(ErrorMessage = "Le champ Jour Travaillées est requis !")]
        [Display(Name = "Jours travaillés")]
        [Range(0, 31, ErrorMessage = "Le nombre de jours doit être dans l'intervale [0, 31]!")]
        public double JoursTravaillés { get; set; }
    }
}