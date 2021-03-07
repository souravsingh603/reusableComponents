export function exportCSVFile(headers,totalData,fileTitle){
    debugger;
    if(!totalData || !totalData.length){
        return null
    }

    const jsonObject = JSON.stringify(totalData)

   const result = convertToCSV(jsonObject,headers)
   if(result === null ) return

   const blob = new Blob([result])
   const exportedFileName = fileTitle? fileTitle+'.csv' : 'export.csv'

   const link = document.createElement('a')
   if(link.download !== null){
       const url = URL.createObjectURL(blob)
       link.setAttribute("href", url)
       link.setAttribute("download", exportedFileName)
       link.style.visibility = "hidden"
       document.body.appendChild(link)
       link.click()
       document.body.removeChild(link)
   }

}

function convertToCSV(objArray, headers){
    debugger;
    const columnDelimiter = ',' 
    const lineDeliminiter = '\r\n'
    const actualHeaderKey = Object.keys(headers)
    const headerToshow = Object.values(headers)
    let str = '';
    str+= headerToshow.join(columnDelimiter)
    str+= lineDeliminiter

    const data = typeof objArray !=='object' ? JSON.parse(objArray) : objArray

    data.forEach(item => {
        let line = ''
        actualHeaderKey.forEach(key=>{
            if(line !==''){
                line+=columnDelimiter
              
               
            }
            if(item[key] !== undefined){
                let strItem = item[key]+''

                line+= strItem?strItem.replace(/,/g,''): strItem
            }
         
        })
        str+=line
        str+= lineDeliminiter
    });
    debugger;
    console.log('str ',str)

    return str
}