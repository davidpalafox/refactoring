// ---------------------- BEGIN REFACTORING ---------------------- //

var hasLongName = false;
var dogNames = ['fido', 'cooper', 'bailey', 'chuck'];

/* @params
 * name: String
 * spotted: Boolean
 * breed: String
 * weight: Number
 */
var Dog = function(name, spotted, breed, weight) {
  this.n = name; // publicly available as DOGINSTANCE.n
  this.s = spotted; // publicly available as DOGINSTANCE.s
  this.b = breed; // publicly available as DOGINSTANCE.b
  this.dN = dogNames; // publicly available as DOGINSTANCE.dN
  var _w = weight; // we want weight kept private

  this.dN.push(name); // add my name to the list of dog names

  function getWeight() {
    return _w;
  }

  function getWeightThreshold() {
    var weightThresh = 45;
    return weightThresh;
  }

  this.hasLongName = function() {
    var s = 6;
    var l = this.n.length;
    if (l > s) {
      hasLongName = true;
    } else {
      hasLongName = false;
    }
    return hasLongName;
  }

  function isHeavy() {
    return getWeight() > getWeightThreshold();
  }

  function isSpotted() {
    return this.s;
  }

  this.anotherdogsharesmyname = function() {
    // in JS checking for the indexOf is used to check for the presence of an el
    return dogNames.indexOf(this.name) > -1;
  }

  this.getDogNames = function() {
    return dN;
  }

  this.isHeavyAndSpottedAndNameIsLong = function() {
    var h = isHeavy.call(this); // must pass the `this` scope to isHeavy
    var s = isSpotted.call(this); // must pass the `this` scope to isSpotted
    var Value = h && s && this.n.length > 6;
    return Value;
  }
}

// ----------------------- END REFACTORING ----------------------- //

var fido = new Dog('fido', false, 'husky', 58);

console.log(fido.isHeavy()) // bug -- isHeavy is undefined
console.log(fido.hasLongName()); // success -- false
console.log(fido.anotherdogsharesmyname()); // bug -- false, but should be true
console.log(fido.isHeavyAndSpottedAndNameIsLong()); // success -- false

/* GOAL:
 * We've created a new instance, fido, to keep a record of our dog
 * ----------------------------------------------------------------
 * We want to be able to answer the following questions about fido:
 * - Is fido a "heavy" dog?
 * - Does fido have a long name?
 * - Does fido share a name with any other dogs in our system?
 * - Is fido "heavy" AND spotted AND has a long name? 
 *
 * NOTE:
 * ## We want to keep fido's weight private.
 * ## We want to know if he is heavy or not, but not his specific weight
 * 
 * NOTE: 
 * ## We do not care to keep track of any info that isn't
 *    needed to answer these specific questions
 *
 * KNOWN BUGS:
 * ## We know another dog named 'Fido' is in our system, but our system
 *    tells us that fido doesn't share a name with another dog
 * ## We hit an undefined error when trying to ask if fido is heavy or not
 */
