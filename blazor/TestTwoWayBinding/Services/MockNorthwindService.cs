using TwoWayBinding.Models.Northwind;

namespace TwoWayBinding.Northwind
{
    public class MockNorthwindService : INorthwindService
    {
        public Task<List<CategoriesType>> GetCategories()
        {
            return Task.FromResult<List<CategoriesType>>(new());
        }
    }
}
