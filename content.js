chrome.storage.local.get(defaultOptions, function(settings) {
  let interval = setInterval(() => {
    let bodyMark = new Mark(document.querySelectorAll('.monitor_body_container .post_body .block')[0])
    , tagsMark = new Mark(document.querySelectorAll('.monitor_body_container .post_tags')[0])
    for (let word of settings.red) {
      bodyMark.markRegExp(new RegExp('^'+word, "i"), {className: 'Red'})
      tagsMark.markRegExp(new RegExp('^#'+word, "i"), {className: 'Red'})
    }
    for (let word of settings.pink) {
      let rWord = new RegExp('^'+word, "i")
      bodyMark.markRegExp(new RegExp('^'+word, "i"), {className: 'HotPink'})
      tagsMark.markRegExp(new RegExp('^#'+word, "i"), {className: 'HotPink'})
    }
    for (let word of settings.orange) {
      let rWord = new RegExp('^'+word, "i")
      bodyMark.markRegExp(new RegExp('^'+word, "i"), {className: 'Orange'})
      tagsMark.markRegExp(new RegExp('^#'+word, "i"), {className: 'Orange'})
    }
    console.log('nT Monitoring tick');
  }, settings.seconds * 1000);
})
