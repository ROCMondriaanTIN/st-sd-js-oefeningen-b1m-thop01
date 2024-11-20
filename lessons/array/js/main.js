const exams = [
    "Programmeren", 
    "Engels", 
    "Nederlands", 
    "Burgerschap", 
    "Rekenen", 
    "Project"];

    // schoolrapport is een array, en dat kan je zien door de blokhaken []
const schoolReport = [10, 5, 7, 8,9, 7.5];
const reportList = document.querySelector("ul.report");
reportList.innerHTML = schoolReport;

schoolReport.push(3.2)
schoolReport[1] = 9; // dit zorgt ervoor dat 5 wordt veranderd naar 9

function showReport(){
    for (let index = 0; index < schoolReport.length; index++) {
        const grade = schoolReport[index];
        reportList.innerHTML += `<li> ${grade} </li>`;
    }
}

function showExamns(){
    for (let index = 0; index < exams.length; index++) {
        const subject = exams[index];
        reportList.innerHTML += `<li> ${subject} </li>`;
    }
}

function showFullReport(){
    // maak hier een rapport dat alle examens laat zien en je cijfers.



}

showReport();
showExamns();



console.log(schoolReport);