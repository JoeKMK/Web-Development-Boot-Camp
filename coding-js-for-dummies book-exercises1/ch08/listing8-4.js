var myObject = new Object(); // create a new object

// add some properties to the object
myObject.var1 = "the value";
myObject.var2 = "another value";
myObject.var3 = "yet another";

// delete var2 from myObject
delete myObject.var2;

// try to write the value of var2
document.write(var2 in myObject); // result is fals