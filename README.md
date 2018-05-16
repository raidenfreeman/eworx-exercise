# BasketNgxs

[Live Demo Here](https://eworx-excercise.firebaseapp.com)

---

#### TL;DR

* Progressive Web Application (not optimized)
* Service worker cached
* AOT compiled
* SEO friendly
* Code splitting / Lazy loaded modules
* NGXS for state management
* [NGXS Storage](https://ngxs.gitbook.io/ngxs/plugins/storage) for persistence in localstorage
* Compatible with Redux DevTools for chrome
* Dummy components (item & product details), reactive on state changes thanks to `async` pipe
* Bare bones UI with Bootstrap 4
* [x2js](https://github.com/x2js/x2js) conversion of JSON to XML
* Snackbar/Toasts provided by AngularMaterial
* Server prepush is easy with Firebase, but wasn't added

You can edit the products in 

    src\app\shared\services\products\products.service.ts

_Testing is bare bones as it's a throwaway project._

---

Built with [Angular CLI](https://github.com/angular/angular-cli) v6.0.0.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project for production. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).
