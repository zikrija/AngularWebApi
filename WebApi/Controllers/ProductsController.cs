using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApi.Models;

namespace WebApi.Controllers
{
    // Enabled Cors for Controller on class, we can also enable on action
    // http://localhost:53906 - valid origin comma seperated if we set asterix then we allow all,
    // "*" - valid headers
    // "*" - valid methods if we for eg. want to set only read access then we can set this to get
    [EnableCorsAttribute("http://localhost:53906", "*", "*")]
    public class ProductsController : ApiController
    {
        ProductRepository res;
        public ProductsController()
        {
            res = new ProductRepository();
        }

        // GET: api/Products
        public IEnumerable<Product> Get()
        {
            // repository
            var res = new ProductRepository();
            return res.Retrieve();
        }

        // If we not find method with this parameter then we will return Get above
        // parameter name must match with query string parameter
        public IEnumerable<Product> Get(string search)
        {
            // repository
            var res = new ProductRepository();
            var products = res.Retrieve();

            if (string.IsNullOrEmpty(search))
                return products;
            else
                return products.Where(c => c.ProductCode.Contains(search));

        }

        // GET: api/Products/5
        public Product Get(int id)
        {
            Product product;
            var res = new ProductRepository();
            if (id > 0)
            {
                var products = res.Retrieve();
                product = products.FirstOrDefault(c => c.ProductId == id);
            }
            else
            {
                product = res.Create();
            }
            return product;
        }


        // POST: api/Products
        // From Body attribute - say that the parameter value came from body of request
        public void Post([FromBody]Product product)
        {
            var newProduct = res.Save(product);
            
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]Product product)
        {
            var updateProduct = res.Save(id, product);

        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {

        }


    }
}
