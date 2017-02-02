import fetch from 'isomorphic-fetch'

module.exports.run = async function(query) {
	var resp = await fetch('http://ne-tst-wstcas11:9200/', { method: 'GET', headers: {'content-type': 'application/json'} }).then(res => res.json() );
	return resp;
}
