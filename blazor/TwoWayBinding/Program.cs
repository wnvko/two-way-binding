using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using TwoWayBinding;
using TwoWayBinding.Northwind;
using IgniteUI.Blazor.Controls;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddScoped<INorthwindService, NorthwindService>();
RegisterIgniteUI(builder.Services);

await builder.Build().RunAsync();

void RegisterIgniteUI(IServiceCollection services)
{
    services.AddIgniteUIBlazor(
        typeof(IgbNavDrawerModule),
        typeof(IgbRippleModule),
        typeof(IgbInputModule),
        typeof(IgbDatePickerModule),
        typeof(IgbCheckboxModule),
        typeof(IgbComboModule),
        typeof(IgbRadioGroupModule),
        typeof(IgbRadioModule),
        typeof(IgbRatingModule),
        typeof(IgbSelectModule),
        typeof(IgbSliderModule),
        typeof(IgbRangeSliderModule),
        typeof(IgbSwitchModule),
        typeof(IgbTextareaModule),
        typeof(IgbCalendarModule)
    );
}