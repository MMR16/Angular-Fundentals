using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductsAPI.Models;
using ProductsAPI.Services;

namespace ProductsAPI.Controllers
{
    [Route("api/Products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return Ok(_productRepository.GetAllProducts());
        }
        /// <summary>
        /// List of top 6
        /// </summary>
        /// <returns></returns>
        [HttpGet("top")]
        public ActionResult<IEnumerable<Product>> GetTopProducts()
        {
            return Ok(_productRepository.GetTopProducts());
        }
        [HttpPost]
        public ActionResult<Product> AddProduct(Product product)
        {
            if (ModelState.IsValid)
            {
                _productRepository.AddProduct(product);
                _productRepository.Save();
                return Created("", product);
            };
            return BadRequest();
        }

        [HttpGet("searchById/{id}")]
        public ActionResult<Product> GetById(int id)
        {
            return Ok(_productRepository.GetProductById(id));
        }

        [HttpGet("searchByName/{name}")]
        public ActionResult<Product> GetByname([FromRoute] string name)
        {
            return Ok(_productRepository.GetProductByName(name));
        }

        [HttpPut]
        public ActionResult<Product> EditProduct(Product product)
        {
            _productRepository.UpdateProduct(product);
            _productRepository.Save();
            return NoContent();
        }

    }
}