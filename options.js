function save_options() {
  let red = document.getElementById('red').value.split(/\r?\n/)
  , pink = document.getElementById('pink').value.split(/\r?\n/)
  , orange = document.getElementById('orange').value.split(/\r?\n/)
  , green = document.getElementById('green').value.split(/\r?\n/)
  , seconds = parseFloat(document.getElementById('seconds').value);
  chrome.storage.local.set({ red, pink, orange, green, seconds }, function() {
    // Update status to let user know options were saved.
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.local.get(defaultOptions, function(items) {
    document.getElementById('red').value = items.red.join('\n');
    document.getElementById('pink').value = items.pink.join('\n');
    document.getElementById('orange').value = items.orange.join('\n');
    document.getElementById('green').value = items.green.join('\n');
    document.getElementById('seconds').value = +items.seconds;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
