var tableContent = '<tr>';
for (index = 0; index < enteredStrings.length; index++) {
    tableContent += "<td>" + enteredStrings[index] + "</td>";
    nameCounter++;  // I don't know if this should be there, 
                    // logically the counter should be incremented here as well?
    total.innerHTML = "Total: " + nameCounter;
}
tableContent += '</tr><tr>';

for (index = 0; index < enteredStringsTwo.length; index++) {
    tableContent += "<td>" + enteredStringsTwo[index] + "</td>";
    nameCounter++;
    total.innerHTML = "Total: " + nameCounter;
}
tableContent += '</tr>';
output.innerHTML += tableContent;