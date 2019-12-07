const COLORS = ['red', 'pink', 'orange', 'green']

function save_options() {
  let toStorage = {
    seconds: parseFloat(document.getElementById('seconds').value)
  }
  for (let color of COLORS) {
    toStorage[color] = document.getElementById(color).value.split(/\r?\n/)
  }
  chrome.storage.local.set(toStorage, function() {
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() { status.textContent = ''; }, 750);
  });
}

function fetch_options() {
  chrome.storage.local.get(defaultOptions, function(items) {
    document.getElementById('seconds').value = +items.seconds;
    for (let color of COLORS) {
      document.getElementById(color).value = items[color].join('\n');
    }
  });
}

function restore_options() {
  document.getElementById('seconds').value = +defaultOptions.seconds;
  for (let color of COLORS) {
    document.getElementById(color).value = defaultOptions[color].join('\n');
  }
  save_options()
}

document.addEventListener('DOMContentLoaded', fetch_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('restore').addEventListener('click', restore_options);
