using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TakkuLiggeyAPI.Data;

namespace TakkuLiggeyAPI.Controllers
{
    [ApiController]
    [Route("api/workers")]
    public class WorkersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public WorkersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("work-types")]
        public async Task<IActionResult> GetWorkTypes()
        {
            var workTypes = await _context.WorkTypes.ToListAsync();
            return Ok(workTypes);
        }
    }

}
