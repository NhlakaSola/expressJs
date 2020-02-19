const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  password: "pass",
  port:5432,
  database: "db"
})

const addNewVisitor  = (vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) =>{
    pool.query( 'INSERT INTO VISITORS( visitor_name, visitors_age, date_of_visit, time_of_visit, assistant_name, comments) VALUES($1,$2,$3,$4,$5,$6) RETURNING *' , 
    [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
    function (err,results) {
			if (err) {
				return(err);
			} 
			console.log(results.rows);
		});
	
}

module.exports = {addNewVisitor}