let fs = require('fs');

// Path should be absolute!
// You can drag & drop SO Architecture folder to console
if(process.argv[2] === "setpath")
{
    let logger = fs.createWriteStream('path.txt');
    let winPath = process.argv[3];
    let unixPath = winPathToLinuxPath(winPath);
    logger.write(unixPath);
    console.log(`Path is now ${unixPath}`);
} else if(process.argv[2] === 'rm'){
    let className = process.argv[3];
    fs.readFile('path.txt', 'utf8', function(err, path) {
        if (err) throw err;
        console.log(`Class name is ${className}\nPath is ${path}`);
        RemoveFile(`${path}/CustomTypes`,`${className}.cs`);
        RemoveFile(`${path}/Variables`,`${className}Variable.cs`);
        RemoveFile(`${path}/References`,`${className}Reference.cs`);
        RemoveFile(`${path}/Collections`,`${className}Collection.cs`);
        RemoveFile(`${path}/Events/Game Events`,`${className}Event.cs`);
        RemoveFile(`${path}/Events/Listeners`,`${className}Listener.cs`);
        RemoveFile(`${path}/Events/Responses`,`${className}UnityEvent.cs`);
    });
} else {
    let className = process.argv[2];
    fs.readFile('path.txt', 'utf8', function(err, path) {
        if (err) throw err;
        console.log(`Class name is ${className}\nPath is ${path}`);
        console.log(`Data Type class:`);
        GenerateFile(`${path}/CustomTypes`,`${className}.cs`,className,`ClassTypeTemplate.cs`);
        GenerateFile(`${path}/Variables`,`${className}Variable.cs`,className,`VariableTemplate.cs`);
        GenerateFile(`${path}/References`,`${className}Reference.cs`,className,`ReferenceTemplate.cs`);
        GenerateFile(`${path}/Collections`,`${className}Collection.cs`,className,`CollectionTemplate.cs`);
        GenerateFile(`${path}/Events/Game Events`,`${className}Event.cs`,className,`EventTemplate.cs`);
        GenerateFile(`${path}/Events/Listeners`,`${className}Listener.cs`,className,`ListenerTemplate.cs`);
        GenerateFile(`${path}/Events/Responses`,`${className}UnityEvent.cs`,className,`UnityEventTemplate.cs`);
      });
}
function RemoveFile(path, filename){
    try {
        fs.unlinkSync(`${path}/${filename}`)
        console.log(`[REMOVED] ${path}/${filename}`);
        
    } catch(err) {
        console.error(err)
    }
}
function GenerateFile(path,filename,className,template, callback){
    
    fs.readFile(template, 'utf8', function(err, data) {
        if (err) throw err;
        data = data.replace(/__CustomClass__/g,className);
        data = data.replace('//__PROPERTIES__',getPropertiesFromArgs());
        let logger = fs.createWriteStream(`${path}/${filename}`);
        logger.write(data);
        console.log(`[CREATED] ${path}/${filename}`);
    });
}

function getPropertiesFromArgs(){
    let propertiesString = '';
    for(let i = 3; i < process.argv.length; i++){

        if(i % 2 == 1)
        {
            propertiesString += `       public ${process.argv[i]} `;
        } else {
            propertiesString += `${process.argv[i]};\n`;
        }
    }
    return propertiesString;
}
function winPathToLinuxPath(winPath)
{
    winPath = winPath.replace(/\\/g,'/');
    winPath = winPath.replace('c:','/mnt/c')
    return winPath;
}