import fetch from 'isomorphic-fetch'

module.exports.run = async function(host, query) {
  console.log('Running query against %s', host);
  let args = query.split('\n')[0].split(' ');
  try {
    var resp = await fetch(host + args[1], { method: args[0] }).then(res => res.json() );
  	return resp;
  }
  catch(error) {
    return { 
      error: 'failed to execute request', 
      description: error.toString()
    };
  }
}
