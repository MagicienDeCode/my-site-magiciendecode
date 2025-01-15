# [Xiang LI - Brainy is new sexy](https://magiciendecode.fr/)

## Dev

- dev deploy
  `npm start`

## How to add a category?

- 1. create a folder XX in src/data
- 2. copy an example of title.json
- 3. add a Category in src/components/category.ts
- 4. create a folder XX in src/pages and add index.tsx in it
- 5. add XXJson in src/components/header.tsx in allItems for search auto-complete

## How to add an article?

- 1. add XX.md in src/data/{category}
- 2. add infos in src/data/{category}/title.json
- 3. make sure (xx.md) path == (title.js) type/page

## How to start ?

Start developing:

1. `npm install`
1. `npm run develop`

## Less for css

A global css file is in `src/layouts/gloable.less`

## Layout

A global layout file is in `src/layouts/index.tsx`

# Format on save

- Format On Save
- CMD + SHIFT + P

```
// Set the default
"editor.formatOnSave": false,
// Enable per-language
"[javascript]": {
    "editor.formatOnSave": true
}
```
