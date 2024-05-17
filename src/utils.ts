const fixUrl = (url:string) : string => {
    
    let fixedUrl = url.replace(/\\/g, '/');
        
    // Remove single quotes
    fixedUrl = fixedUrl.replace(/'/g, '');
    
    // Escape double quotes
    fixedUrl = fixedUrl.replace(/"/g, '\\"');
    
    // Remove unnecessary spaces around query parameters
    fixedUrl = fixedUrl.replace(/([?&])\s+/g, '$1')  // Remove spaces after ? or &
                      .replace(/\s+([=&])/g, '$1');  // Remove spaces before = or &


    return fixedUrl;
}

export {fixUrl};