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

Output:

```
yarn run v1.12.3
$ jest src/features/Auth/__tests__/SignIn.spec.ts
 PASS  src/features/Auth/__tests__/SignIn.spec.ts
  ✓ should render (38ms)

  console.log src/features/Auth/Auth.tsx:27
    { primary: '#000', background: '#fff' }

  console.log src/features/Auth/Auth.tsx:27
    { primary: '#000', background: '#fff' }

  console.log src/features/Auth/SignIn.tsx:25
    { primary: '#000', background: '#fff' }

  console.log src/features/Auth/SignIn.tsx:25
    { primary: '#000', background: '#fff' }

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.978s, estimated 3s
Ran all test suites matching /src\/features\/Auth\/__tests__\/SignIn.spec.ts/i.
✨  Done in 3.55s.
```

## Run the test for the lazy component

Running this:

```sh
yarn test src/features/Auth/__tests__/SignInLazy.spec.ts
```

will test the lazy loaded component.  2 of the `console.log`'s will have the theme since they are in the parent component.  2 of them will not have the theme and will be an empty object.  Those are from the lazy loaded component.

Output:

```
yarn run v1.12.3
$ jest src/features/Auth/__tests__/SignInLazy.spec.ts
  console.log src/features/Auth/Auth.tsx:27
    { primary: '#000', background: '#fff' }

  console.log src/features/Auth/Auth.tsx:27
    { primary: '#000', background: '#fff' }

  console.log src/features/Auth/SignInLazy.tsx:25
    {}

  console.error src/features/Auth/SignInLazy.tsx:31
    Theme is not there!!!!!!!

  console.log src/features/Auth/SignInLazy.tsx:25
    {}

  console.error src/features/Auth/SignInLazy.tsx:31
    Theme is not there!!!!!!!

 PASS  src/features/Auth/__tests__/SignInLazy.spec.ts
  ✓ should render (268ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.373s, estimated 3s
Ran all test suites matching /src\/features\/Auth\/__tests__\/SignInLazy.spec.ts/i.
✨  Done in 2.84s.
```
