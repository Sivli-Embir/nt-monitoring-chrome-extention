const regexBodyWordPre = '^'
const regexTagWordPre = '^#(\s*)'

chrome.storage.local.get(defaultOptions, function(settings) {
  let interval = setInterval(() => {
    let bodyMark = new Mark(document.querySelectorAll('.monitor_body_container .post_body .block')[0])
    , tagsMark = new Mark(document.querySelectorAll('.monitor_body_container .post_tags')[0])
    for (let word of settings.red) {
      bodyMark.markRegExp(new RegExp(regexBodyWordPre+word, "i"), {className: 'red'})
      tagsMark.markRegExp(new RegExp(regexTagWordPre+word, "i"), {className: 'red'})
    }
    for (let word of settings.pink) {
      bodyMark.markRegExp(new RegExp(regexBodyWordPre+word, "i"), {className: 'pink'})
      tagsMark.markRegExp(new RegExp(regexTagWordPre+word, "i"), {className: 'pink'})
    }
    for (let word of settings.orange) {
      bodyMark.markRegExp(new RegExp(regexBodyWordPre+word, "i"), {className: 'orange'})
      tagsMark.markRegExp(new RegExp(regexTagWordPre+word, "i"), {className: 'orange'})
    }
  }, settings.seconds * 1000);
})
