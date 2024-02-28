# dpg-assessment

This app displays users from Github. It has a monorepository setup with Turborepo and shared Tailwind CSS configurations.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/drepko/dpg-assessment.git
```

2. Run `yarn install` from the root directory to install all the dependecies across the monorepo.
3. Run `yarn dev` to start the development servers of all the apps in the monorepo in parrallel. To start an individual app the monorepo, run:
   `yarn workspace <name> dev`.

## Apps & Packages

- `apps/docs`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `apps/web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `packages/ui`: a stub React component library shared by both `web` and `docs` applications
- `packages/config`: shared `tailwindcss`, `eslint` configurations (includes `eslint-config-next`, `eslint-config-prettier`, `eslint-plugin-prettier` etc..)
- `packages/tsconfig`: `tsconfig.json`s which can be used by extending them throughout the monorepo
