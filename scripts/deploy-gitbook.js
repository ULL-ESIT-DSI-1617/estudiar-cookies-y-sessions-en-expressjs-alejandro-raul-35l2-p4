var exec = require('child_process').exec;
var repo = require('./../package.json').repository.gitbook;
console.log(repo);

exec ("cd docs && rm -rf .git && git init && git add . && git commit -m \"Deploy to Gitbook\" && git remote add origin " + repo + " && git push --force origin master:master", function (error, stdout, stderr){
  console.log(stdout);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});