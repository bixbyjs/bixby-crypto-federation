function FederatedKeyring() {
}

FederatedKeyring.prototype.use = function(fn) {
  this._mech = fn;
}

FederatedKeyring.prototype.find = function(options, cb) {
  console.log('**** FIND KEY');
  console.log(options);
  
  //this._mech(options, cb);
  this._mech.query(options, function(err, ck) {
    console.log('GOT FROM KEYSTORE');
    console.log(err);
    console.log(key);
    
    var key;
    switch (options.usage) {
    case 'sign':
      key = ck.privateKey;
      break;
    case 'verify':
    default:
      key = ck.publicKey;
      break;
    }
    
    return cb(null, key, { id: ck.id })
  })
}


module.exports = FederatedKeyring;
