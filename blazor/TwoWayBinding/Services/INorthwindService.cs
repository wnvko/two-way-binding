using TwoWayBinding.Models.Northwind;

namespace TwoWayBinding.Northwind
{
    public interface INorthwindService
    {
        Task<List<CategoriesType>> GetCategories();
    }
}
