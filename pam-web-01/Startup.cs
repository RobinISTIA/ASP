using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(pam_web_01.Startup))]
namespace pam_web_01
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
