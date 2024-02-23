import {readFile, appendFile, unlink} from 'fs';

function parseFile(): void {
    readFile('kanji.txt', 'utf-8', (err, data) => {
        if (err) throw err
        const kanji = data.split(' ').map((el, index) => {
            if (index !== data.split(' ').length - 1) {
                return `"${el}", `
            }
            return  `"${el}"`
        }).join('\n')
        unlink('kana.json', () => {})
        appendFile('./kana.json', `
        {
            "kanji": [
                ${kanji}
            ]
        }
        `, () => {
            console.log('done')
        })
    })
}

parseFile()

export { };
