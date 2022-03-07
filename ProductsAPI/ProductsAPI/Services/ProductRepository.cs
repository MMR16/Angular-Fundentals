using ProductsAPI.Models;

namespace ProductsAPI.Services
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationContext _dbContext;

        public ProductRepository(ApplicationContext DbContext)
        {
            _dbContext = DbContext ?? throw new ArgumentNullException(nameof(DbContext));
        }
        public void AddProduct(Product product)
        {
            if (product is null)
            {
                throw new ArgumentNullException(nameof(product));
            }
            _dbContext.Products.Add(product);
        }

        public void DeleteProduct(int id)
        {
            var product = _dbContext.Products.FirstOrDefault(e => e.ProductId == id);
            if (product is null)
            {
                throw new ArgumentNullException(nameof(id));
            }
            _dbContext.Products.Remove(product);
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _dbContext.Products.ToList();
        }
        public IEnumerable<Product> GetTopProducts()
        {
            return _dbContext.Products.OrderByDescending(e => e.StarRating).Take(6).ToList();
        }

        public Product GetProductById(int id)
        {
            return _dbContext.Products.FirstOrDefault(e => e.ProductId == id);
        }

        public Product GetProductByName(string name)
        {
            var product = _dbContext.Products.FirstOrDefault(e => e.ProductName.Trim().ToLower() == name.Trim().ToLower());
            if (product is null)
            {
                throw new ArgumentNullException(nameof(name));
            }
            return product;
        }

        public void UpdateProduct(Product product)
        {
            if (product is null)
            {
                throw new ArgumentException(nameof(product));
            }
            _dbContext.Products.Update(product);
        }

        public bool Save()
        {
            return (_dbContext.SaveChanges() >= 0);
        }

    }
}
