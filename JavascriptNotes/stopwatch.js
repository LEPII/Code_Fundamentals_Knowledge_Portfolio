// move the start, stop & reset to the prototype of this object.
// You should put methods on the prototype as an optimization technique. 

function Stopwatch() { 
  let startTime, endTime, running, duration = 0;

 
  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}

const objectBase = Stopwatch.prototype

 Stopwatch.prototype.start = function () {
   if (running) throw new Error("Stopwatch has already started.");

   running = true;

   startTime = new Date();
 };

 Stopwatch.prototype.stop = function () {
   if (!running) throw new Error("Stopwatch is not started.");

   running = false;

   endTime = new Date();

   const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
   duration += seconds;
 };

 Stopwatch.prototype.reset = function () {
   startTime = null;
   endTime = null;
   running = false;
   duration = 0;
 };