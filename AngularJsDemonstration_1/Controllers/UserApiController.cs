using AngularJsDemonstration_1.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJsDemonstration_1.Controllers
{
    public class UserApiController : ApiController
    {
        public List<Employee> GetAll()
        {
            return new List<Employee>
            {
                new Employee {Id=101,Name="Abhinav",Location="Bangalore",Qualification="B.E" },
                new Employee {Id=102,Name="Abhishek",Location="Chennai",Qualification="B.E" },
                new Employee {Id=103,Name="Ajay",Location="Bangalore",Qualification="B.E" },
                new Employee {Id=104,Name="Anil",Location="Chennai",Qualification="B.E" },
                new Employee {Id=105,Name="Anirudh",Location="Bangalore",Qualification="B.E" }
            };
        }
        [HttpPost]
        public bool ValidateLogIn(LoginData loginData)
        {
            SqlConnection conn = new SqlConnection(@"server=DESKTOP-89HQ4RL\SQLEXPRESS;database=EmployeeDB;integrated security=true");
            string query = "select count(*) from LoginInfo where UserName=@uName and Password=@pwd";
            SqlCommand cmd = new SqlCommand(query, conn);
            cmd.Parameters.Add(new SqlParameter("@uName", loginData.UserName));
            cmd.Parameters.Add(new SqlParameter("@pwd", loginData.PassWord));
            conn.Open();
            int noOfUsers = (int)cmd.ExecuteScalar();
            conn.Close();
            return noOfUsers > 0 ? true : false;
        }
    }
}
