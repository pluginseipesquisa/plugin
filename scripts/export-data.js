// teste
export const exportData = () => {


// precisa pegar o total passado pela função total-results.js
const total = 20
    // take elements
    const seiType = document.getElementById("p-sei-type");
    const seiNumber = document.getElementById("p-sei-number");
    const seiSubject = document.getElementById("p-sei-subject");
    const seiDate = document.getElementById("p-sei-date");
    const seiUnity = document.getElementById("p-sei-unity");
    const seiUser = document.getElementById("p-sei-user");

    // elements change to array
    const seiTypeArray = seiType.innerText.split("\n\n");
    const seiNumberArray = seiNumber.innerText.split("\n\n");
    const seiSubjectArray = seiSubject.innerText.split("\n\n");
    const seiDateArray = seiDate.innerText.split("\n\n");
    const seiUnityArray = seiUnity.innerText.split("\n\n");
    const seiUserArray = seiUser.innerText.split("\n\n");

    // init new array
    const rows = [
     ["Tipo", "Número", "Assunto", "Data", "Unidade", "Usuário"],
    ];

    // count to iterator take specific element
    let idCount = 0;
      while (idCount < total) {

        // 
        const seiTypeElement = seiTypeArray[`${idCount}`];
        const seiNumberElement = seiNumberArray[`${idCount}`];
        const seiSubjecElement = seiSubjectArray[`${idCount}`];
        const seiDateElement = seiDateArray[`${idCount}`];
        const seiUnityElement = seiUnityArray[`${idCount}`];
        const seiUserElement = seiUserArray[`${idCount}`];

        // append new line
        rows.push([`${seiTypeElement}`, 
                 `${seiNumberElement}`,
                 `${seiSubjecElement}`, 
                 `${seiDateElement}`, 
                 `${seiUnityElement}`, 
                 `${seiUserElement}`]
               )
        
        // increment count
        idCount++;
    }
     

    let csvContent = "data:text/csv;charset=utf-8,";

    rows.forEach(function(rowArray) {
      let row = rowArray.join(";");
      csvContent += row + "\r\n";
    });

    const constEncodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.textContent = "Save as CSV";
    link.download = "file.csv";

    link.href = `${constEncodedUri}`;
    
  };