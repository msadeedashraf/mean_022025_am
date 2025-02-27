fetch ("data/job_listing.json")
.then ((response) => response.json())
.then ((data) => {
console.log(data);
const jobs = data;
getJobs(jobs);
})


function getJobs(jobs)
{
    console.log(jobs);

    let myHTML = "";

for (a = 0; a<jobs.length ; a++)
{

myHTML += `<div class="jobs-listing">
              <h3>${jobs[a].title}</h3>
              <p>${jobs[a].company}</p>
              <p>${jobs[a].location}</p>
              <p>
              ${jobs[a].jobdesc}
              </p>
            </div>`;
}
document.getElementById("demo").innerHTML = myHTML ;
}