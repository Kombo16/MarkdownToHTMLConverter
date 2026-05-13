//variables
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output")
const preview = document.getElementById("preview")

//event listeners
markdownInput.addEventListener("input",()=>{

    const converted = convertMarkdown();
    htmlOutput.textContent = converted;
    preview.innerHTML = converted;
})
function convertMarkdown() {
    let input = markdownInput.value;
    //1. Heading parser
    const headingParser = /^\s*(#{1,3})\s+(.+)/gm
    input = input.replace(headingParser, (_, level, text) => {
        const length = level.length;
        return `<h${length}>${text}</h${length}>`
        })

    //2.Bold parser
    const boldParser = /[*_]{2}(?<text>.+)[*_]{2}/gm
    input = input.replace(boldParser, `<strong>$<text></strong>`);

    //3.Italic parser
     const italicParser = /[*_]{1}(?<text>.+)[*_]{1}/gm
    input = input.replace(italicParser, `<em>$<text></em>`);

    //4.Image parser
    const imageParser = /\!\[(?<altText>.+)\]\((?<imageUrl>.+)\)/gm
    input = input.replace(imageParser, `<img alt="$<altText>" src="$<imageUrl>">`);

    //5.Link parser
    const linkParser = /\[(?<linkText>.+)\]\((?<linkUrl>.+)\)/gm
    input = input.replace(linkParser, `<a href="$<linkUrl>">$<linkText></a>`)

    //6.Blockquote parser
    const blockQuoteParser = /^>\s+(?<blockText>.+)/gm
    input = input.replace(blockQuoteParser, `<blockquote>$<blockText></blockquote>`)

    return input;
}



