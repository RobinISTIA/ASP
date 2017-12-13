using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using pam_metier_simule.Metier.entites;
using pam_metier_simule.Metier.services;
using pam_web_01.Models;

namespace pam_web_01
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            //----------Auto-généré
            AreaRegistration.RegisterAllAreas();
            //WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            // -------------------------------------------------------------------
            // ---------- configuration spécifique
            // -------------------------------------------------------------------
            // données de portée application
            ApplicationModel application = new ApplicationModel();
            Application["data"] = application;
            // instanciation couche [métier]
            application.PamMetier = new PamMetier();
            // tableau des employés
            application.Employes = application.PamMetier.GetAllIdentitesEmployes();
            // éléments du combo des employés
            application.EmployesItems = application.Employes.Select(emp => new SelectListItem() {
                Text = emp.Prenom + " " + emp.Nom,
                Value = emp.SS
            }).ToArray();
            // model binder pour [ApplicationModel]
            ModelBinders.Binders.Add(typeof(ApplicationModel), new ApplicationModelBinder());
        }
    }
}
