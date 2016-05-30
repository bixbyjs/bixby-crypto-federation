exports = module.exports = function() {
  var ALGORITHMS = [
    'hmac-sha256'
  ]
  
  
  return function secret(options, cb) {
    console.log('GETTING SYMMETRIC KEY...');
    console.log(options)
    
    if (options.use == 'decryption') {
      // FXIME: Remove this hack
      return cb(null, 'some-shared-with-rs-s3cr1t-asdfasdfaieraadsfiasdfasd');
    }
    
    
    if (ALGORITHMS.indexOf(options.algorithm) == -1) {
      // The cryptographic operation is using an algorithm that requires
      // an asymmetric (aka public/private) key pair.
      return cb();
    }
    
    if (!options.peer) {
      return cb();
    }
    
    // TODO: Check for usage and algorithm, so multiple secrets may
    //       be in play.
    return cb(null, options.peer.secret, { algorithm: options.algorithm });
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/crypto/Keyring/findFunc';
