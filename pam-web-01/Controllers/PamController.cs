using System.Web.Mvc;

namespace Pam.Web.Controllers
{
  public class PamController : Controller
  {
    [HttpGet]
    public ViewResult Index()
    {
      return View();
    }
    [HttpPost]
    public PartialViewResult FaireSimulation()
    {
        return PartialView("Simulation");
    }
    [HttpPost]
    public PartialViewResult EnregistrerSimulation()
    {
        return PartialView("Simulations");
    }
    [HttpPost]
    public PartialViewResult VoirSimulation()
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