using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using pam_metier_simule.Metier.entites;
using pam_metier_simule.Metier.services;

namespace pam_web_01.Models
{
    public class ApplicationModel
    {
        // --- données de portée application ---
        public Employe[] Employes { get; set; }
        public IPamMetier PamMetier { get; set; }
        public SelectListItem[] EmployesItems { get; set; }
    }
}