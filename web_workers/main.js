$(function(){

	var workers = 0;

    //Workaround to work on local
    //var funcStr = "(function(){ var fibonacci = "+fibonacci.toString()+"; ("+testWorker.toString()+")()})()";
    //var blob = new Blob([funcStr], {type: 'text/javascript'});
    //var myWorker = new Worker(URL.createObjectURL(blob)); 

    //Normal way
	var myWorker = new Worker("worker.js");


    $("#button").click(function(){
    	var i = 45;
    	myWorker.postMessage([i,workers]);
        fibonacci(i);
    });

    myWorker.onmessage = function(e) {
		var result = e.data[0];
		var workerID = e.data[1];
		console.log('Message received from '+workerID+'. worker: ' + result);
	};

});


function fibonacci(n) {
    //
}



//IN WORKER
function testWorker() {
    self.addEventListener('message', function(e) {
        console.log("Worker "+e.data[1]+" do value: "+e.data[0]);
        var result = e.data[0]; 
        postMessage([result,e.data[1]]);
    });
}


