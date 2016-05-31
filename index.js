exports = module.exports = function crypto_federation(id) {
  var map = {
    'keyring': './xom/keyring',
    'secret/find': './xom/secret/find'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add('keyring');
  container.add('secret/find');
};
