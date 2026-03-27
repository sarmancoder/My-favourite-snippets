const fs = require('fs')
const info = require('./package.json')

const readme = fs.createWriteStream('README.md')

readme.write('# Listado de extensiones incluidas\n\n')

for (let index = 0; index < info.extensionPack.length; index++) {
    const element = info.extensionPack[index];
    readme.write(` * [${element}](https://marketplace.visualstudio.com/items?itemName=${element})\n`)
}

/**
 * @type {{languages: string[], path string}}
 */
const snippetsAgrupados = Object.values(info.contributes.snippets.reduce((acc, current) => {
    // Si el path no existe en nuestro acumulador, lo creamos
    if (!acc[current.path]) {
        acc[current.path] = {
            path: current.path,
            languages: []
        };
    }
    
    // Añadimos el lenguaje al array de ese path
    acc[current.path].languages.push(current.language);
    
    return acc;
}, {}));

readme.write('\n # Snippets \n \n')

for (let index = 0; index < snippetsAgrupados.length; index++) {
    const snippetFile = snippetsAgrupados[index];
    const fileName = snippetFile.path.split('/').at(-1).split('.')[0]
    readme.write(`\n\n## ${fileName}\n`)
    readme.write('**Lenguajes soportados**:\n')
    readme.write(snippetFile.languages.map(a => ` * ${a}`).join('\n') + '\n\n')
    const snippetFilejson = require(snippetFile.path)
    for (const key in snippetFilejson) {
        if (!Object.hasOwn(snippetFilejson, key)) continue;
        
        const snippet = snippetFilejson[key];
        
        readme.write(`### ${snippet.description} \n`)
        readme.write(`prefix: \`${snippet.prefix}\`\n`)
        readme.write(`\`\`\`${snippetFile.languages[0]}\n${snippet.body.join('\n')}\`\`\`\n\n`)
    }
}

readme.close()
