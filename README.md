# Demo repo for Jest and Lazy loading issues

* When running the tests, the lazy loaded component will have an empty object for `props.theme`.
* The non-lazy components load fine.
* All components load fine when starting the app and loading it in a browser.

## Run the test for the non-lazy component

Running this:

```sh
yarn test src/features/Auth/__tests__/SignIn.spec.ts
```

will test the non-lazy component.  All `console.log`'s will have the theme properties.

## Run the test for the lazy component

Running this:

```sh
yarn test src/features/Auth/__tests__/SignInLazy.spec.ts
```

will test the lazy loaded component.  2 of the `console.log`'s will have the theme since they are in the parent component.  2 of them will not have the theme and will be an empty object.  Those are from the lazy loaded component.
