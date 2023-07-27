const fs = require('fs');
const path = require('path');
/**
 * 
 * @param {*} jsonPath 
 * @returns [
          { text: '01.文档声明', link: '/column/1.html/01. 文档声明/文档声明.md' },
        ]
 */
function getJsonFiles (jsonPath) {
    let jsonFiles = [];
    function findJsonFile (www) {
        let files = fs.readdirSync(www);
        files.forEach(function (item, index) {

            let fPath = path.join(www, item);
            let stat = fs.statSync(fPath);
            if (stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) {
                if (fPath.endsWith('.md')) {
                    let obj = { text: '', link: '' }
                    const fPathArr = fPath.split('/')
                    obj.text = fPathArr[1]
                    obj.link = `/column/${fPath}`
                    // console.log(fPathArr);
                    jsonFiles.push(obj);
                }

            }
        });
    }
    findJsonFile(jsonPath);
    // console.log(jsonFiles);
    return jsonFiles;
}

// const files = getJsonFiles('./1.html')
// console.log(files);


let files = fs.readdirSync('./')
let dirs = []
let allFiles = []
files.forEach(function (item, index) {
    
    let fPath = path.join('', item);
    let stat = fs.statSync(fPath);
    
    if (stat.isDirectory() === true) {
        // dirs.push(fPath)
        const files1 = getJsonFiles(fPath)
        // console.log("item",item);
        // console.log("files",files1);
        console.log('-------------------------');
        const itemObj = {
            text: item,
            items:files1
        }
        // console.log("itemObj",itemObj);
        allFiles.push(itemObj)
    }
    
});
console.log(allFiles);
const data = JSON.stringify(allFiles);

// write JSON string to a file
fs.writeFile('allFiles.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
}
)
