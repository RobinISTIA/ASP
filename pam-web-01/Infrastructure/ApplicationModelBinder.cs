using System.Web.Mvc;

namespace pam_web_01
{
    public class ApplicationModelBinder : IModelBinder
    {
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            // on rend les données de portée [Application]
            return controllerContext.RequestContext.HttpContext.Application["data"];
        }
    }
}