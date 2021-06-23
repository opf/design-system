# OpenProject design system

This is a basic monorepo scaffolding for all OpenProject design system development. It is not used in production yet. It includes the following parts;

1. A package featuring reusable angular components, directives and services in `packages/angular`,
2. A package featuring sass styles and BEM components in `packages/styles`,
3. An example angular application in `packages/example-angular`,
4. Design system documentation via storybook, in `stories`,

# Installation

To start using this is your projects, install one of the following packages:

* `@openproject/angular`
* `@openproject/styles`

## Using the styles

You can import either all styles or just specific ones into your sass builds:

```
// All styles
@import '@openproject/styles/src/index.sass`

// or for one specific block
@import '@openproject/styles/src/option-list.sass`
```

## Using the angular code

Though all components are exported directly, usually you want to import their module, since they might have internal dependencies:

```
import { NgModule } from '@angular/core';
import { OpOptionListModule } from '@openproject/angular';

@NgModule({
  imports: [
    OpOptionListModule,
  ],
})
export class ExampleModule { }

// <op-option-list /> will now be available in your module

```

# Developing the design system

First, clone this repository.

## Installing dependencies

To start developing, clone this repository, and run the following commands:

```
npm ci
npx lerna bootstrap
```

This will install all needed dependencies.

## Developing

Usually, you'll want to develop components in either the angular example app or storybook stories directly. The easiest way is to start the storybook development server:

```
npm run storybook:build
```

## Publishing

To publish, run

```
npm run lerna:publish <version>
```

where `version` is the semver option of lerna publish. See [their documentation](https://github.com/lerna/lerna/tree/main/commands/version#positionals) on how to do it.

