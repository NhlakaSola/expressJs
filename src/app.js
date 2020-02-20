const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  password: "pass",
  port:5432,
  database: "db"
})

const addNewVisitor  = async(vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) =>{
  return new Promise(async(resolve, reject)=>{
    await pool.query( 'INSERT INTO VISITORS( visitor_name, visitors_age, date_of_visit, time_of_visit, assistant_name, comments) VALUES($1,$2,$3,$4,$5,$6) RETURNING *' , 
    [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
    function (err,results) {
			if (err) {
				reject(err);
      } 
      resolve(results.rows[0].id);
		});
  })
	
}

module.exports = {addNewVisitor}