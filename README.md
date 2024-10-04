# Medleys Website

This is the website for Medleys A Cappella, a community service-based a cappella
group at UCLA.

## Getting Started

Here are some instructions for setting up installations. For the following code
blocks, make sure to paste each line into Terminal one-by-one!

## Installations

You should have installed the following software. See below for more
instructions. These are essential for development:

- [`git`](https://git-scm.com/downloads)
- [`node`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  - Use node version at least 22.8.0.
- [Visual Studio Code](https://code.visualstudio.com/download)
  - Technically, VSCode is not strictly necessary; that being said, it's easiest
    if you're just getting started.

To verify everything is installed, these commands should not fail.

```sh
git -v
node -v
```

For Mac users, use the following commands in Terminal to install `git` and
`node`. This will install additional tooling:

- XCode command line tools (this includes `git`)
- [Homebrew](https://brew.sh/) (this is a package manager for macOS)
- `nvm` (this helps manage `node` versions)

```sh
xcode-select --install
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install nvm
nvm install 22.8.0
nvm use 22.8.0
```

## Setup

Clone the repository, and install dependencies.

```sh
git clone https://github.com/joy-y-cheng/medleys-website.git
cd medleys-website
npm ci
```

## Modifications

View the site live by starting a local server with `npm run start`. To preview
your changes, run `npm run build` to rebuild the site using Eleventy. Push
changes to deploy.

- When you run `npm run start` (or `npm start` for short), you should see
  `[11ty] Server at http://localhost:8080/` or something similar. Go to this URL
  in your browser. As long as `npm start` is running, you can view the webpage
  locally.
  - No one besides you can see these changes.
- You should always build and start the app before merging changes onto `main`
  to ensure that you didn't introduce a breaking change.
  - Generally speaking, you should not directly push to `main`. See below for
    instructions on how to use branches in version control.

## Project Structure

Currently, this website uses a static site generator, `11ty`. Generally
speaking, you will only need to update `src/_data` or edit text to change what
is being displayed on the website.

- If you'd like to change the layout of the website, look through the HTML
  files.
- Technically, these are not true HTML files; we use Liquid for templating.

The following files are in `src/_data`:

- [`alum-info-list.json`](src/_data/alum-info-list.json)
  - Alumni info.
- [`faq-list.json`](src/_data/faq-list.json)
  - List of FAQs.
- [`gallery-video-list.json`](src/_data/gallery-video-list.json)
  - YouTube videos included in the gallery.
- [`member-info-list.json`](src/_data/member-info-list.json)
  - Current member info.
- [`navigation.json`](src/_data/navigation.json)
  - Used for navigation header.
  - You probably won't need to change this unless you want to add a new section
    to the webpage.
- [`service-info-list.json`](src/_data/service-info-list.json)
  - Service organization info.

If you are just editing some text, find the corresponding file (e.g. the Contact
page is in [`src/contact/index.html`]), and edit the text.

Photos should be added in [`src/assets/photos`](src/assets/photos/).

- This includes members' photos in
  [`src/assets/photos/members/`](src/assets/photos/members/)
- This includes members' photos in
  [`src/assets/photos/service/`](src/assets/photos/service/)

Generally speaking, you should only concern yourself with the files found in
`src`. Below is an overview of all folders.

### Folder Overview

```text
medleys-website
├── README.md                                # this file
├── eleventy.config.js                       # 11ty configuration
├── package-lock.json                        # frozen version of packages
├── package.json                             # required packages
└── src
    ├── CNAME                                # domain
    ├── _data
    │   ├── alum-info-list.json              # alumni info
    │   ├── faq-list.json                    # FAQs
    │   ├── gallery-video-list.json          # videos in gallery
    │   ├── member-info-list.json            # current member info
    │   ├── navigation.json                  # navigation bar
    │   └── service-info-list.json           # service organization info
    ├── _includes
    │   └── _layout.html                     # layout template
    ├── assets                               # assets used (e.g. logos, photos)
    │   ├── ...
    │   └── photos                           # photos used throughout
    │       └── ...
    ├── auditions
    │   └── index.html                       # auditions page
    ├── contact
    │   ├── index.html                       # contact us page
    │   └── thank-you
    │       └── index.html                   # thank you after contacting us
    ├── css                                  # styling
    │   ├── ...
    │   ├── custom.css                       # additional styling
    │   └── photos.css                       # styling for photos (e.g. shift)
    ├── files
    │   └── ...                              # additional files to be deployed
    ├── gallery
    │   └── index.html                       # gallery page
    ├── home
    │   └── index.html                       # home page
    ├── index.html                           # root page
    ├── js                                   # required scripting
    │   ├── ...
    │   └── custom.js                        # additional scripting
    ├── love-notes
    │   └── index.html                       # love notes page
    ├── members
    │   └── index.html                       # current members page
    └── service
        └── index.html                       # service organization page
```

## Editing files

When you make changes, you will use VSCode to edit the files, and then you will
need to use `git` to add them to version control. This is done locally (on your
computer) and remotely (to GitHub). `node` is used for managing packages and
running the site locally; see above for instructions with `npm`.

## Adding files

You can add a new file within VSCode using the + in the top of the file
navigator. You will see two icons: one is for adding a new file, the other is
adding for a new folder.

- You can also drag files directly from your file explorer into VSCode. For
  example, if I wanted to add a photo of someone, I can drag the picture from
  Finder (the file explorer on macOS) into VSCode.

### Using VSCode

When you open a folder, you should see all the files in the file navigator to
the left. Clicking a folder will show the files and subfolders within. Clicking
a file will show its contents in an editor. Within the editor, you can make
changes. Use `ctrl/cmd + S` to save a file.

### Using `git`

The basic flow to add a change (local to your computer) is as follows:

- make changes to files
- stage changes
- commit changes

To stage changes,

```sh
git add .
```

To commit changes,

```sh
git commit -m "your commit message"
```

Generally speaking, you will need to create a new branch first. You commit
changes to a branch, and then merge the branch onto the `main` branch.

The basic flow to create a new branch off of `main` and merge back onto `main`
is as follows:

- checkout `main`
- update `main`
- create a new branch
- add changes
- create upstream branch

To checkout and update `main`,

```sh
git checkout main
git fetch
git merge
```

To create a new branch,

```sh
git checkout -b my-new-branch
```

Follow the steps above to add changes (edit, stage, and commit).

### Pushing to GitHub

To create an upstream branch (on GitHub),

```sh
git push -u origin my-new-branch
```

For subsequent pushes to GitHub,

```sh
git push
```

When naming your new branch, pick a descriptive name that starts with a verb
describing what it does.

- For example, if you are updating old member info, you might name the branch
  `update-members`.
- Other common verbs include `fix`, `test`, and `create`.
- Also, you don't have to follow this naming convention.

Once you are ready to merge, go to GitHub.

- After pushing to an upstream branch, if you check GitHub, you should see
  "\[your branch name\] had recent pushes \[time\] ago."
- Click "Compare & pull request."
- Give your pull request a simple title that clearly indicates what task/issue
  it addresses.
- Add any nonobvious details to the description of the pull request.

### Version Control Example

Below is an example of how version control might be used. Suppose I want to add
a new member named Sam.

```sh
# this assumes you have already cloned the repository
git checkout main
git fetch
git merge
git checkout -b add-member-sam
# edit src/_data/member-info-list.json
git add .
git commit -m "Added Sam data"
git push -u origin add-member-sam
# add Sam's photo
git add .
git commit -m "Added Sam photo"
# edit src/members/index.html
git add .
git commit -m "Add Sam to webpage"
git push
# go to GitHub and submit a pull request
```

Notice that you do not need to push changes every single time.

- It is helpful to push for your first commit to create a new upstream branch,
- You must push your last change for it to be included in the pull request.
