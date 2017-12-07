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
  }
}