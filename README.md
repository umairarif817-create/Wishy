# For You — a click-through love story

18 chapters, opened one page at a time: a playful "Proceed" gate, an
envelope you open, then a story that moves through memories, photos, a
letter, a song, and a closing page.

**Page order:** `index.html` (the "No" button gate) → `envelope.html` →
`chapter1.html` → … → `chapter18.html` → `finale.html`.

`index.html` shows the cat sticker and a "No" button that dodges around
the screen a few times when you try to click/hover it, then gives up and
shows a popup with a "stop teasing me" button that leads to the envelope.
Edit the subtitle text or swap the image at `images/cute-hug.jpg` in that
file if you'd like to change it. To change how many times the button
dodges before giving in, open `js/script.js` and change `MAX_DODGES`.

## How to edit it

You don't need to know how to code. Every file is plain text — open it in
any text editor (even Notepad or TextEdit), find the bit you want to
change, and save.

Every editable spot is marked with a comment like:
`<!-- EDIT: change the name below -->`

**The 18 chapters, in order:**
1. How It All Began
2. The First Time I Noticed You
3. Our First Conversation
4. Little Moments I Keep (photo gallery — uses photo1–4.jpg)
5. The Day I Knew
6. Little Habits I Adore
7. The Way You Laugh
8. Places We've Been (photo gallery — uses photo5–8.jpg)
9. Things I'm Grateful For
10. Our Inside Jokes
11. A Letter, For You
12. The Hard Days We Got Through
13. What You Mean To Me
14. Little Things You Do
15. Adventures Still To Come
16. A Song That Reminds Me of You (uses music/our-song.mp3)
17. My Favorite Version of Us
18. Forever, Not Just For Now

Followed by `finale.html`, the closing page.

**To add your own photos:**
Put image files into the `images` folder, named `photo1.jpg` through
`photo8.jpg` (jpg or png both work — just keep the same names, or update
the file names inside `chapter4.html` / `chapter8.html` to match yours).

**To add your own song:**
Put an mp3 file into the `music` folder named `our-song.mp3`.
(Prefer Spotify/YouTube instead? Open `chapter16.html` — there's a comment
explaining how to swap in an embed code.)

**To add, remove, or reorder chapters:**
Each chapter file links to the next one via the "Turn the page" button and
back to the previous one via the "back a page" link. If you add or remove
a chapter, just update those two links in the chapters right before and
after it so the chain stays unbroken. The "chapter X of 18" label in the
footer of each page is just text — update it if your total changes.

**To change the colors:**
Open `css/style.css` and edit the color values near the very top
(under `:root`). Every page updates automatically.

## How to put it online (GitHub Pages)

1. Create a new GitHub repository.
2. Upload all these files/folders, keeping the same structure.
3. In the repo, go to Settings → Pages → set Source to the main branch.
4. Your site will be live at `https://yourusername.github.io/repo-name/`
