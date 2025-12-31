🧹 Clean Web Filter

Clean Web Filter is a lightweight Google Chrome extension that automatically censors abusive and vulgar words across all websites in real time.
It works silently in the background, keeping your browsing experience clean without breaking page layouts or performance.

No fancy UI. No heavy libraries. Just plain JavaScript doing its job.

✨ Features

🚫 Censors abusive words in English and Hindi

🔄 Works on dynamically loaded content (WhatsApp Web, YouTube comments, etc.)

⚡ Extremely lightweight & fast

🌐 Runs on all websites

🧠 Uses DOM traversal + MutationObserver for live filtering

❌ No data collection, no tracking, no external APIs

🛠️ How It Works

A predefined list of abusive words is converted into a case-insensitive regex

The extension:

Scans all text nodes in the DOM

Replaces matched abusive words with ****

A MutationObserver watches for newly added content and censors it instantly

Everything happens locally in the browser.

📁 Project Structure
clean-web-filter/
│
├── manifest.json      # Chrome extension configuration
├── content.js         # Core censoring logic
└── README.md          # Documentation

📄 manifest.json

Uses Manifest V3

Injects content.js into all URLs

Runs after the page loads (document_idle)

Requires only minimal permissions

🚀 Installation (Local / Developer Mode)

Clone or download this repository

Open Chrome and go to
chrome://extensions

Enable Developer Mode (top-right)

Click Load unpacked

Select the project folder

That’s it. The filter is live.

🧪 Example

Before

This is fucking stupid


After

This is **** stupid


Works instantly—even on content loaded later.

⚠️ Limitations

Simple word-based filtering (no AI context detection yet)

May not catch creatively misspelled abuse

Does not censor images, videos, or audio

🔮 Future Improvements (Optional)

AI-based toxicity detection

Custom word list per user

Toggle on/off from extension popup

Per-site enable/disable

Severity levels (mild / strict)

📜 License

MIT License
Free to use, modify, and improve.

👤 Author

Anadi Sharma
Built with the idea that the web doesn’t need to be loud to be powerful.

If you want, next we can:

Add a popup UI

Convert this into a Chrome Web Store–ready package

Upgrade it with AI moderation

Or refactor it for performance edge cases

You’ve built the spine already. Now you decide how sharp it becomes.