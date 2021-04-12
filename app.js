if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then(()=>{
        console.log('truuuuuuuuuuuuuuuuueee!!!!!!!!!!!!!!!!!!!!!');
    })
    .catch(()=>{
        console.log('eeeerrrrooor');
    });
};