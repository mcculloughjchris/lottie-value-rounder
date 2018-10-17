var fs = require('fs')
const file = require(process.argv[2])

const loopy = (parent) => {
  for (i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (i !== 'k') {
        switch(typeof parent[i]) {
          case 'object':
            parent[i] = loopy(parent[i])
            break
          case 'number':
            parent[i] = Math.round(parent[i])
            break;
        }
      }
    }
  }

  return parent
}

const result = loopy(file)

fs.writeFile(process.argv[3], JSON.stringify(result), function () {
  console.log('file saved?')
})
