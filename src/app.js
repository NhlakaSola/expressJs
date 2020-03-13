const dotenv = require('dotenv').config();
const Pool = require("pg").Pool;
const pool = new Pool();

pool.connect((err,res)=>{
	if(err){
		console.log(err)
	}console.log(res);
});

const addNewVisitor  = async(vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) =>{
	return new Promise(async(resolve, reject)=>{
	  await pool.query(`INSERT INTO VISITORS( vName, vAge, dateOfVisit, timeOfVisit, assistantName, comments) VALUES($1,$2,$3,$4,$5,$6) RETURNING *` , 
	  [vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
	  (err,results)=> {
		if (err) {
			reject(err);
		} 
		console.log(results.rows[0]);
		resolve(results[0]);
		});
	})	  
}

addNewVisitor("name",12,"12/12/12","12:21","Nhlaka","Nhkkka")