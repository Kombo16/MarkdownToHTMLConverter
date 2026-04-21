# MarkdownToHTMLConverter
This is my implementation of freeCodeCamp's JavaScript Certification Program of implementing the JavaScript for a function that converts markdown input to a HTML string output
## User Stories:

1. You should have a function named `convertMarkdown` that takes no parameters.
2. The `convertMarkdown` function should use regular expressions to convert the markdown input from `markdown-input` into HTML and should return a string containing the HTML code.
3. The `convertMarkdown` function should convert headings of level one, two, and three into the corresponding `h1`, `h2`, and `h3` elements. A heading in markdown is indicated by as many `#` character as its level followed by a space and the heading text. `#` characters should be placed at the beginning of the line: there can be spaces but no other characters before it.
4. The `convertMarkdown` function should convert bold text into `strong` elements. Bold text in markdown is indicated either by a pair of double asterisks or a pair of double underscores enclosing the text.
5. The `convertMarkdown` function should convert italic text into `em` elements. Italic text in markdown is indicated either by a pair of asterisks or a pair of underscores enclosing the text.
6. The `convertMarkdown` function should convert images into `img` elements. An image in markdown is indicated by `![alt-text](image-source)`, where `alt-text` is the value of the alt attribute and `image-source` is the value of the src attribute.
7. The `convertMarkdown` function should convert links into `anchor` elements. A link in markdown is indicated by `[link text](URL)`, where `link text` is the text to enclosed within the anchor tags and `URL` is the value of href attribute.
8. The `convertMarkdown` function should convert quotes into `blockquote` elements. A quote in markdown is indicated by a `>` followed by a space and the quote text. The `>` character should be placed at the beginning of the line: there can be spaces but no other characters before it.
9. When you input text inside `markdown-input`, the raw HTML code returned by `convertMarkdown` should be displayed inside `#html-output.`
10. When you input text inside `markdown-input`, the HTML code returned by `convertMarkdown` should be rendered inside `#preview.`

| Markdown | HTML |
---------- | --------
| `# heading 1` | `<h1>heading 1</h1>` |
| `## heading 2` | `<h2>heading 2</h2>` |
| `### heading 3` | `<h3>heading 3</h3>` |
| `**bold text**` or `__bold text__` | `<strong>bold text</strong>` |
| `*italic text*` or `_italic text_` | `<em>italic text</em>` |
| `![alt-text](image-source)` | `<img alt="alt-text" src="image-source">` |
| `[link text](URL)` | `<a href="URL">link text</a>` |
| `> quote` | `<blockquote>quote</blockquote>` |
