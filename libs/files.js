function verfifyFile(type) {
    let extencionType = type.split('.')[1];
    if (!extencionType) {
        extencionType = type.split('/')[1];
    }
    if (!extencionType) {
        return false;
    }
    else{
        return extencionType.toUpperCase();
    }
}

module.exports = {
    verfifyFile
}