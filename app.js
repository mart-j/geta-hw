const jobList = document.querySelector(".job-list");

let jobs = [];

const fetchData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/mart-j/jobs/main/positions.json"
  );
  jobs = await response.json();
  console.log(jobs);
  jobs.forEach((job) => {
    const jobWrapper = document.createElement("div");
    const jobTitle = document.createElement("h3");
    const button = document.createElement("button");
    const jobType = document.createElement("div");
    const img = document.createElement("img");
    const companyName = document.createElement("div");

    button.addEventListener("click", () => {
        document.location.href = job.company_url;
    });
    
    jobType.innerText = job.type;
    button.innerText = "Apply";
    jobTitle.innerText = job.title;
    jobWrapper.className = "job-wrapper";
    companyName.innerText = job.company;

    img.setAttribute("src", job.company_logo);
    img.setAttribute("width", 100);

    jobList.append(jobWrapper);
    jobWrapper.append(img);
    jobWrapper.append(companyName);
    jobWrapper.append(jobTitle);
    jobWrapper.append(button);
    jobWrapper.append(jobType);
  });
};
fetchData();
