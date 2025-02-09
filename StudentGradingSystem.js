function calculateGrade(marks, attendance) {
   
    if (attendance > 90) {
        marks += 5;
    }

    
    let grade;
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}


console.log(calculateGrade(85, 92)); 
console.log(calculateGrade(75 ,80)); 
console.log(calculateGrade(45 ,90));
console.log(calculateGrade(65, 85));

