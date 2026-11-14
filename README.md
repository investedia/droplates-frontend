# Droplates

## Repository layout

This repository is the **frontend**: the static website served at droplates.com (marketplace pages, Template Studio and the free templates in `products/`).

The catalogue data, page generator, annotation tool and tests live in [droplates-backend](https://github.com/investedia/droplates-backend). Generated pages (catalogue, product, docs, preview, match, saved, support, custom) are written into this repository by `node tools/build.js`, run from the backend with both repositories checked out side by side.

