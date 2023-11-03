const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

const dirToZip = './dist' // Update this to your directory
const outputDir = './zips'
const outputFile = path.join(outputDir, 'youtext_chrome_extension.zip')

if (!fs.existsSync(dirToZip)) {
    console.error(`Directory ${dirToZip} does not exist`)
    process.exit(1)
}

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
}

const output = fs.createWriteStream(outputFile)
const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
})

archive.directory(dirToZip, false)
archive.pipe(output)
archive.finalize()
