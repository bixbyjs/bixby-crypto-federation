exports = module.exports = function crypto_federation(id) {
  var map = {
    'keyring': './xom/keyring'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add('keyring');
};
