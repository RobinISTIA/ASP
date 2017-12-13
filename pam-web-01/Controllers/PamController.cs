using System.Web.Mvc;
using pam_web_01.Models;

namespace Pam.Web.Controllers
{
  public class PamController : Controller
  {
    [HttpGet]
    public ViewResult Index(ApplicationModel application)
    {
      return View(new IndexModel() { Application = application });
    }
    [HttpPost]
    public PartialViewResult Simulation()
    {
        return PartialView("Simulation");
    }
    [HttpPost]
    public PartialViewResult EnregistrerSimulation()
    {
        return PartialView("Simulations");
    }
    [HttpPost]
    public PartialViewResult VoirSimulations()
    {
        return PartialView("Simulations");
    }
    [HttpPost]
    public PartialViewResult Formulaire()
    {
        return PartialView("Formulaire");
    }
    [HttpPost]
    public PartialViewResult TerminerSession()
    {
        return PartialView("Formulaire");
    }
        
  }
}