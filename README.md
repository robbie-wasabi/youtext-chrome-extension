# Youtext Chrome Extension

This repository contains a simple script that adds a "Summarize Video" button to YouTube videos. When clicked, the button redirects the user to a YouText page that provides a succinct AI-interpreted summary of the video.
Features

- Retrieves the current YouTube video's ID from the URL.
- Opens a new tab with the corresponding YouText page.
- The button is positioned inline with the "like", "dislike", and "share" buttons on YouTube.

## Download on Chrome Web Store 

_coming soon_

## Development

```bash
# clone
$ git clone https://github.com/rrossilli/youtext-chrome-extension.git

# cd
cd youtext-chrome-extension

# install packages
$ pnpm i

# build
$ pnpm build
```

In Chromium browser:

```md
extensions > *enable developer mode* > load unpacked > *select youtext "dist" folder
```

## Code

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
