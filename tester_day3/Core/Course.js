var PATH = "./assignments/";
// var PATH = "./solutions/";
var USE_WEB_WORKERS = true;
var COURSE = [
	{
		name: "Basics",
		folder: "0_Basics",
		files: [
			"0_Numbers",
			"1_Adder",
			"2_Adder",
			"3_Binary",
			"4_Binary",
		]
	},
	{
		name: "Numbers",
		folder: "1_Numbers",
		files: [
			"0_Reverse",
			"1_NaNs",
			"2_Mice",
			"3_Dist",
			"4_Area",
			"5_Race",
			"6_Primes",
			"7_Emirps",
		]
	},
	{
		name: "Strings",
		folder: "2_Strings",
		files: [
			"0_Longest",
			"1_Reverse",
			"2_Palindroms",
			"3_Change",
			"4_FreqAnalysis",
			"5_FreqWords"
		]
	},
	{
		name: "Arrays",
		folder: "3_Arrays",
		files: [
			"0_Fill",
			"1_Max",
			"2_Diff",
			"3_Compare",
			"4_Copy"
			// "5_FreqWords"
		]
	},
	{
		name: "Types",
		folder: "4_Types",
		files: [
			"0_TypeFreq"
		]
	},
	{
		name: "Objects",
		folder: "5_Objects",
		files: [
			"0_Properties",
			"1_Person",
			"2_Persons",
			"3_Counter",
			"4_Ancestors",
			"5_DoInherit"
		]
	},
	// {
	// 	name: "Functions",
	// 	folder: "6_Functions",
	// 	files: [
	// 		"0_Longest",
	// 		// "1_Reverse",
	// 		// "2_Palindroms",
	// 		// "3_Change",
	// 		// "4_FreqAnal",
	// 		// "5_FreqWords"
	// 	]
	// },
];

// =============
// Course script
var Course = (function(){
	var loadingStatus = false;
	var activeCourse = null;
	var activeTask = null;
	var activeWorkers = [], refreshTestQueue=[];
	var statCnt = 0;
	var statBonusCnt = 0;
	var clipboard = undefined;

	function testWorker() {
		self.addEventListener('message', function(e) {
			var data = e.data;
			if (Array.isArray(data.in)) {
				var ret;
				try {
					ret = func.apply(null, data.in);
					// if (ret === null) ret = "null";
				} catch (e) { if (typeof e == "string") ret = {throwed: e }; else throw e; }
				self.postMessage(ret);
			}
		});
	}

	function checkRet(ret, t, $statusObj, time) {
		var comparison = true;
		var statusType = "danger";
		var statusText = "Wrong answer";
		var info ='expected <code>' + (t.outDesc ? t.outDesc : toString(t.out)) + '</code>, found <code>'+toString(ret)+'</code>';
		var extraInfo = "";
		// throws
		if (t.throws) {
			if (typeof ret == "object" && ret != null && "throwed" in ret) {
				comparison = t.throws === ret.throwed;
				if (!comparison) info = " Throwed exception mismatch, expected throwed string: <code>"+t.throws+"</code>, found <code>"+ret.throwed+"</code>.";
			} else {
				comparison = false;
				info = "Function should throw an error "+t.throws+".";
			}
		// check function
		} else if (typeof t.check == 'function') {

			var checkRet = t.check(ret);
			comparison = checkRet.ret;
			info = checkRet.mess ? checkRet.mess : '';
		// NaN
		} else  if (typeof t.out == "number" && isNaN(t.out)) {
			comparison = isNaN(ret) && typeof ret == "number";
		// precision
		} else if (typeof t.out == "number" && t.precision) {
			comparison = Math.abs(ret - t.out) < Number.EPSILON*10;
			if (!comparison) {
				extraInfo = "Your result is by "+ (ret-t.out) + " " + (ret > t.out ? 'bigger' : 'smaller') +" than expected.";
			}
		// array
		} else if (Array.isArray(t.out)) {
			if (!Array.isArray(ret)) { 
				extraInfo += " (function didn't return array)";
				comparison = false;
			}
			else if(ret.length != t.out.length) {
				extraInfo += " (incorrect length of array: <code>"+ret.length+"</code>, expected <code>"+t.out.length+"</code>)";
				comparison = false;
			}else {
				for(var i=0; i<ret.length;i++) {
					comparison &= (ret[i] === t.out[i] || (typeof ret[i] == "number" && typeof t.out[i] == "number"  && isNaN(ret[i]) && isNaN(t.out[i])));
					if (!comparison) {
						extraInfo += " (error at index <code>"+i+"</code>: <code>"+ret[i]+" !== "+t.out[i]+"</code>)";
						break;
					}
				}
			}
		// Object
		} else  if (typeof t.out == "object" && t.out!=null) {
			comparison = objectsEquals(t.out, ret) && objectsEquals(ret, t.out);
			if (!comparison) info = "Objects don't equal.";
		// basic comparison
		} else {
			comparison = (ret === t.out);

			// type comparison
			if (!comparison && ret == t.out) {
				info = 'expected return type <code>' + typeof t.out + '</code>, found <code>' + (Array.isArray(ret) ? "array" : typeof ret) + '</code>';
				statusType = 'danger';
				statusText = "Wrong type";
			}
		}

		if (comparison) {
			updateTestStatus($statusObj, 'success',"Correct", {val: ret }, undefined, time);
		} else {
			updateTestStatus($statusObj, statusType, statusText, {val: ret }, info + extraInfo, time);
		}
	}

	function refreshTask() {
		if (activeTask !== null)
			loadTask(activeTask);
	}

	function performTest(desc, t, $statusObj) {

		if(typeof(Worker) == "undefined" || !USE_WEB_WORKERS || desc.dontUseWorkers || t.dontUseWorkers) {
			// no WorkerAPI, do it the old way:
			clearTestBtn($statusObj);
			window.setTimeout(function() {
				updateTestStatus($statusObj, 'info',"Running");
				window.setTimeout(function() {
					var ret;
					try {
						ret = desc.func.apply(null, t.in);
						// if (ret === null) ret = "null";
					} catch (e) { ret = e; }
					checkRet(ret, t, $statusObj);
					clearTestBtn($statusObj);
					addTestBtn($statusObj, 'refresh', function(){
						refreshTestQueue.push({task:t, "statusObj": $statusObj});
						refreshTask();
						return false;
					});
				} ,0);
			} ,0);
		
		} else {
			// WorkerAPI, yay!
				// workaround to run web worker on local:
			var funcStr = "(function(){ var func = "+desc.func.toString()+"; ("+testWorker.toString()+")()})()";
			var blob = new Blob([funcStr], {type: 'text/javascript'});
			var worker = new Worker(URL.createObjectURL(blob)); 
			var timeWorkerStart = Date.now();
			updateTestStatus($statusObj, 'info', "Running");
			clearTestBtn($statusObj);
			addTestBtn($statusObj, 'stop', function(){
				deactivateWorker(worker);
				var timeWorkerTime = Date.now()-timeWorkerStart;
				updateTestStatus($statusObj, 'default', "Stopped", undefined,undefined, timeWorkerTime);
				window.setTimeout(function(){
					if (worker)
						worker.terminate();
				})
				return false;
			}, 'danger');

			worker.postMessage({
				in: t.in,
			});

			worker.onmessage = function(e) {
			    checkRet(e.data, t, $statusObj, Date.now()-timeWorkerStart);
			    deactivateWorker(worker);
			};
			worker.onerror = function(e) {
				updateTestStatus($statusObj, 'danger', "Runtime Error", {val: "Error" }, e.message, Date.now()-timeWorkerStart);
				deactivateWorker(worker);
			};

			function deactivateWorker(w) {
				var i = activeWorkers.indexOf(w);
				if (i != -1) activeWorkers.splice(i,1);
				clearTestBtn($statusObj);
				addTestBtn($statusObj, 'refresh', function(){
					refreshTestQueue.push({task:t, "statusObj": $statusObj});
					refreshTask();
					return false;
				});
			}
			activeWorkers.push(worker);
		}
	}

	function checkActiveWorkers() {
		if (activeWorkers.length > 0 || refreshTestQueue.length > 0) {
			if (window.confirm("Do you want to cancel active tasks?")) {
				for(var i = 0; i<activeWorkers.length; i++) activeWorkers[i].terminate();
				activeWorkers = [];
				refreshTestQueue = [];
				return true;
			} else return false;
		}
		return true;
	}

	function registerTest(desc) {
		if (!desc.tests) desc.tests=[];
		if (!desc.bonusTests) desc.bonusTests=[];
		loadingStatus = false;
		try {
			if (refreshTestQueue.length > 0) {
				var tq = refreshTestQueue[0];
				performTest(desc, tq.task, tq.statusObj);
				refreshTestQueue.shift();
				return ;
			}
			clearCntElm();
			statCnt = desc.tests.length; bonusCnt = desc.bonusTests.length;
			drawProgressBar();
			var cnt = 0;
			var $cnt = getCntElm();
			for(var i=0;i<desc.tests.length;i++) {
				var $statusObj = drawTest(cnt++, desc, desc.tests[i], false);
				performTest(desc, desc.tests[i], $statusObj);
				$cnt.append($statusObj);
			}
			for(var i=0;i<desc.bonusTests.length;i++) {
				var $statusObj = drawTest(cnt++, desc, desc.bonusTests[i], true);
				performTest(desc, desc.bonusTests[i], $statusObj);
				$cnt.append($statusObj);
			}
			if (clipboard !== undefined) clipboard.destroy();
			clipboard = new Clipboard(".copyToClipboard", {
				target: function(trigger) { return $(trigger).children('.funcCall').get(0); }
			});
			clipboard.on('success', function(e) {
				var $alertElm = $('<div class="alert copyToClipboardAlert">Code <kbd>'+e.text+'</kbd> was copied to clipboard.</div>')
				$alertElm.click(function(){
					$(this).fadeOut(100,function(){
						$(this).remove();
					});
				});
				window.setTimeout(function(){
					$alertElm.fadeOut(100,function(){
						$alertElm.remove();
					});
				}, 800);
				$(e.trigger).parent().append($alertElm);
			    e.clearSelection();
			});
		} catch(e) {
			cntMsg("Error occured test, please call the lecturer. "+e.toString(), "danger");
			throw e;
		}
	}

	function loadJSFile(file) {
		var headElm;
		var head = document.getElementsByTagName("head");
		if (!head || !head.length) {
			var err = "<head> element missing"; console.error(err);
			return err;
		} else headElm = head[0];
		var oldScriptElm = document.getElementById(file);
		if (oldScriptElm) oldScriptElm.parentElement.removeChild(oldScriptElm);
		var scriptElm = document.createElement("script");
		scriptElm.id = file;
		scriptElm.src = PATH + file + ".js";
		loadingStatus = scriptElm.src;
		// console.log("load",loadingStatus); return;
		scriptElm.onerror = function(a,b,c) {
			cntMsg("Error, cannot load file: <code>" + scriptElm.src + '</code>', "danger");
			loadingStatus = false;
	    };
		scriptElm.onload = function() {
			window.setTimeout(function(){ // wait until compiled
				if (loadingStatus !== false) {
					cntMsg("Error: error while running file "+loadingStatus+". Check console for details.", "danger");
					loadingStatus = false;
				}
			});
	    };
		headElm.appendChild(scriptElm);
	}

	function loadTask(j) {
		if (refreshTestQueue.length == 0) {
			if (!checkActiveWorkers()) return ;
			activeTask = j;
			setMenuActiveTask(activeTask);
			clearCntElm(); cntMsg('Loading...');
		}
		loadJSFile(COURSE[activeCourse].folder + '/' + COURSE[activeCourse].files[j]);
	}

	function loadCourse(i, dontLoadTask) {
		if (!checkActiveWorkers()) return ;
		if (i === activeCourse) {
			clearCntElm();
			showGetStarted();
			activeCourse = null;
			setMenuActiveCourse(null);
			return ;
		}
		setMenuActiveCourse(i);
		activeCourse = i;
		$courseTaskList = $(".course-content .course-task");
		$courseTaskList.html('');
		for (var j = 0; j < COURSE[i].files.length; j++) {
			var $li = $("<li></li>");
			var $a = $('<a href="#'+i+'/'+j+'">'+COURSE[i].files[j]+'</a></li>');
			$a.click((function(j){return function(){
				loadTask(j);
			}})(j));
			$li.append($a);
			$courseTaskList.append($li);
		}
		if (COURSE[i].files.length && !dontLoadTask)
			loadTask(0);
		var $li = $('<li class="refr-task"></li>');
		var $btn = $('<button type="button" class="btn btn-default" aria-label="Left Align">' +
					'<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>' +
				'</button>');
		$btn.click(function() {
			loadTask(activeTask);
		});
		$li.append($btn);
		$courseTaskList.append($li);
	}

	var publicAPI = {
		loadCourse: loadCourse,
		loadTask: loadTask,
		registerTest: registerTest
	};
	return publicAPI;
})();


// =============
// Layout:
function clearCntElm() {
	hideGetStarted();
	getCntElm().html('');
}
function getCntElm() {
	var $ul = $(".course-content .task-tests");
	return $ul;
}

function showGetStarted() {
	$(".getStarted").show();
	$(".course-content .cnt").removeClass("cnt-tests");
	$(".course-content .course-task").hide();
}
function hideGetStarted() {
	$(".getStarted").hide();
	$(".course-content .cnt").addClass("cnt-tests");
	$(".course-content .course-task").show();
}

function setMenuActiveCourse(i) {
	$(".course-list .li").blur();
	$(".course-list").find("li.active").removeClass("active");
	$(".course-list").find("li:eq("+i+")").addClass("active");
}
function setMenuActiveTask(i) {
	$courseTaskList = $(".course-content .course-task");
	$courseTaskList.find(".active").removeClass("active");
	$courseTaskList.find("li:eq("+i+")").addClass("active");
}

// draw test:
function drawTest(num, desc, t, isBonus) {
	var funcCall = '<strong>'+ desc.func.name + '(</strong>';
		if (t.in)
			for (var j=0;j<t.in.length;j++) funcCall+=(j?'<strong>,</strong> ':'') + toString(t.in[j]);
		funcCall+='<strong>)</strong>';
	var $li = $('<li'+(isBonus ? ' class="bonus"':'')+'></li>');
	var $a = $('<a href="#">' +
		'<table class="table table-condensed">'+
		'<tr><th>#'+(isBonus ? 'bonusT':'t')+'est'+(toString(num))+'</th></tr>' +
		'<tr>' +
			'<td><pre class="in copyToClipboard"><span class="funcCall")>'+funcCall+'</span> <span class="glyphicon glyphicon-triangle-right" /><span class="retBox"></span></pre></td>' +
			'<td class="btnTd"></td><td class="retTd"></td>' +
			'<td class="control"></td>' +
		'</tr></table></a>');
	$li.append($a);
	updateTestStatus($a, 'default',"In queue");
	$a.click(function(e){
		e.preventDefault();
		if ($(e.target).is("pre") || $(e.target).parents("pre").length) return true; 
		$(this).find(".btn:eq(0)").click();
		return false;
	});
	return $li;
}

function drawProgressBar() {
	return ;
	// window.setTimeout(function() {
		var $prg = getCntElm().find('.course-progress');
		if ($prg.length == 0) {
			$prg = $('<div class="progress course-progress"></div>');
			getCntElm().append($prg);
		}
		$prg.html('');
		var statusArr = ["success", "warning", "danger", "info"];
		for (var i=0; i<statusArr.length; i++) {
			var cnt = 0;
			try {
				cnt = getCntElm().find(".btnTd .label-"+statusArr[i]).length;
			} catch(e){}
			var num = Number(cnt / getCntElm().find(".btnTd").length * 100).toFixed(2);
			$prg.append($('<div class="progress-bar progress-bar-'+statusArr[i]+'" style="width: '+num+'%">'+num+'%</div>'));
		}
	// }, 20);
}

function getTestObj(i) {
	return getCntElm().find("li:eq("+i+")");
}

// messages:
function updateTestStatus($obj, btnType, btnTxt, retVal, retTxt, time) {
	if (retVal && "val" in retVal)
		retVal = toString(retVal.val);
	else retVal = false;
	var btn = '<span class="label label-'+btnType+'">'+btnTxt+'</span>'+(time?'<span class="timeLabel">'+time+' ms</span>':'');
	var $btnTd = $obj.find(".btnTd"); $btnTd.html(btn);
	var $retBox = $obj.find(".retBox"); $retBox.html((retVal) ? '<kbd>'+retVal+'</kbd>' : '');
	var $retTd = $obj.find(".retTd"); $retTd.html(retTxt ? '<p class="text-'+btnType+'">'+retTxt+'</p>' : '');
	drawProgressBar();
}
function cntMsg(msgText, type) {
	if (!type) type = "info";
	var $cnt = getCntElm();
	var msg = '<div class="alert alert-'+type+'" role="alert">';
	if (type == 'danger')
		msg += '<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> ';
	msg += msgText+'</div>';
	$cnt.html(msg);
}

// buttons
function clearTestBtn($obj) {
	$obj.find(".control").html('');
}
function addTestBtn($obj,img, action, type) {
	if(!type) type='default';
	var $btn = $('<button type="button" class="btn btn-'+type+'" aria-label="Left Align">' +
					'<span class="glyphicon glyphicon-'+img+'" aria-hidden="true"></span>' +
				'</button>');
	$btn.click(action);
	$obj.find(".control").append($btn);
}

// Helpers:
function toString(elm) {
	if (typeof elm == "object" && elm != null && "throwed" in elm) return "Throwed: "+toString(elm.throwed);
	if (typeof elm == "object" && elm != null) try{
		return JSON.stringify(elm);
	} catch(e) { return "[Object (cannot be stringified)]"; } 
	if (typeof elm == "string") return '"'+elm+'"'
	if (typeof elm == "number" && isFinite(elm) && Math.floor(elm) !== elm) return String(parseFloat(elm.toFixed(5)));
	return String(elm);
}
function arraysEquals(arr1, arr2) {
	if (arr1.length != arr2.length) return false;
	for(var i=0;i<arr1.length;i++) {
		if (!(arr1[i] === arr2[i] || (typeof arr1[i] == 'number' && typeof arr2[i] == 'number' && isNaN(arr1[i]) && isNaN(arr2[i])))) return false
	}
	return true;
}
function objectsEquals(obj1, obj2) {
	var ret = true;
	for (var i in obj1) {
		if (obj1.hasOwnProperty(i))
			if (!obj2 || !obj2.hasOwnProperty(i)) return false;
			if (typeof obj1[i] == "object" && obj1[i]!=null)
				ret |= objectsEquals(obj1[i], obj2[i]);
			else
				ret |= obj1[i] === obj2[i];
	}
	return Boolean(ret);
}

// Changes and Polyfills:
Array.prototype.toString = function() {
	var str = '[';
	for(var i=0;i<this.length;i++) {
		str += (i?',':'')+this[i];
	}
	return str + ']';
}
Number.EPSILON = 'EPSILON' in Number ? Number.EPSILON : 2.220446049250313e-16

// =============
// MAIN:
window.onload = function(){
	$(".err_load_msg").hide(0);
	for (var i = 0; i < COURSE.length; i++) {
		var $li = $('<li></li>');
		var $a = $('<a href="#/'+i+'/0">'+COURSE[i].name+"</a>");
		$a.click((function(i){ return function(e){ 
			Course.loadCourse(i);
		}})(i));
		$li.append($a);
		$(".course-list").append($li)
	}
	var hashUrl = location.hash.substr(1);
	if (hashUrl.length && hashUrl[0] == '/') hashUrl = hashUrl.substr(1);
	hashUrl = hashUrl.split('/');
	if ("0" in hashUrl && parseInt(hashUrl[0]) >=0 && parseInt(hashUrl[0]) < COURSE.length) {
		var i = parseInt(hashUrl[0]);
		var urlHasTask = "1" in hashUrl && parseInt(hashUrl[1]) >=0 && parseInt(hashUrl[1]) < COURSE[i].files.length;
		Course.loadCourse(i, urlHasTask);
		if (urlHasTask) {
			var j = parseInt(hashUrl[1]);
			Course.loadTask(j);
		} 
	} 
};
