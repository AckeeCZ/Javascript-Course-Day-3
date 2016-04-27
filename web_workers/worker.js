self.addEventListener('message', function(e) {
    console.log("Worker "+e.data[1]+" do value: "+e.data[0]);
    var result = e.data[0]; //HINT Count some result
    postMessage([result,e.data[1]]);
});
