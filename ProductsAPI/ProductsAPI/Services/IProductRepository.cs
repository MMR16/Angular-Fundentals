using ProductsAPI.Models;

namespace ProductsAPI.Services
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetTopProducts();
        Product GetProductById(int id);
        Product GetProductByName(string name);
        void AddProduct(Product product);
        void UpdateProduct(Product product);
        void DeleteProduct(int id);
        bool Save();
    }
}
