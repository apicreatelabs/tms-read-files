verfifyFile = (type) =>{
    console.log(type);
    let extencionType = type.split('.')[1];
    if (!extencionType) {
        extencionType = type.split('/')[1];
    }
        return extencionType.toUpperCase();
}

module.exports = {
    verfifyFile
}