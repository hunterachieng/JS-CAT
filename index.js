var myObject = {
    name: "Lovelace",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();

 //outer func:  this.name = Lovelace
//outer func:  self.name = Lovelace
//inner func:  this.name = undefined
//inner func:  self.name = Lovelace

/* The above is the output of the code. In JavaScript, 'this' refers to a global object 
or the window object. Whenever a program runs and 'this' is used, it refers to the global object.
If 'this' was defined within a function, it would still refer to the global object.
In this scenario, 'this' does not refer to the global object because it is within a function that 
is bound to an object which turns its execution context from global to within the scope it has been 
defined in. 
When this happens, 'this' now becomes the particular object where in the code, var self = this; 
this will now become myObject and inherit all its properties unpto its current scope. When invoked, 
outer func prints out "lovelace" when this.name and self.name are used. This is because self is used to refer
to the object itself. When the property name is invoked in inner func, this.name prints out undefined because
the outer func was execution context of 'this' has switched back to being a global object as the function's
lifecycle has ended. 
Self.name still prints out "lovelace" within inner func because it is used to refer to the original this
even though the contexts have changed.*/
