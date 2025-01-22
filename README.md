# improwised-new-website

## 🔮 Astro + Astro Svelte + Shadcn Svelte + Tailwind CSS

## Url :
https://improwised.github.io/improwised-new-website/

## Lighthouse Performance

![image](https://github.com/user-attachments/assets/e62d61da-a58e-4eaf-b451-fbe8ee1011ac)

## Development Prospective

> 🔹**Node js 22.0.0**
> 🔹[Astro](https://astro.build/)
> 🔹[Astro Svelte](https://docs.astro.build/en/guides/integrations-guide/svelte/)
> 🔹[Shadcn Svelte](https://www.shadcn-svelte.com/docs/installation/astro)
> 🔹[Tailwind CSS](https://docs.astro.build/en/guides/integrations-guide/tailwind/)


## 🚀 Steps to clone this website with above Tech Stack

### Git Repo clone


```bash
git clone git@github.com:Improwised/improwised-new-website.git
cd webapp
```

### Environment

* copy `.env.example` to `.env`. (skip if already done)


```bash
$ cp .env.example .env
```

### Developing
Installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
```

### Building

To create a production version of your app:

```sh
npm run build
```

### Preview

You can preview the production build with `npm run preview`.


----------------------------------------------------------------




## 🚀 Steps to Build a new website with above Tech Stack

### Step 1 : Create project with Astro

```text

├── npm create astro@latest
    │
    └── Where should we create your new project?
    │       └── ./webapp
    └── How would you like to start your new project?
    │       └── A basic, minimal starter
    └── Install dependencies? (recommended)
    │       └──  ● Yes ○ No
    └── Initialize a new git repository? (optional)
		    └──  ○ Yes  ● No

```

### Step 2 : Add svelte configuration


```bash
cd webapp
npx astro add svelte
```
For more info check this link : https://docs.astro.build/en/guides/integrations-guide/svelte/


### Step 3 : Add Tailwind css configuration


```bash
cd webapp
npx astro add tailwind
```
For more info check this link : https://docs.astro.build/en/guides/integrations-guide/tailwind/


### Step 4 : Add shadcn-svelte configuration

> 🔹[Shadcn-svelte configure steps](https://www.shadcn-svelte.com/docs/installation/astro) Follow the steps from step 5 from this link


#### Run the shadcn-svelte init command to setup your project:
```bash
npx  shadcn-svelte@latest init
```
#### You will be asked a few questions to configure components.json:

```text
┌   shadcn-svelte  v0.14.0
│
♦️  Which style would you like to use?
│  New York
│
♦️  Which base color would you like to use?
│  Gray
│
♦️  Where is your global CSS file? (this file will be overwritten)
│  src/styles/app.css
│
♦️  Where is your Tailwind config located? (this file will be overwritten)
│  tailwind.config.mjs
│
♦️  Configure the import alias for components:
│  $lib/components
│
♦️  Configure the import alias for utils:
│  $lib/utils
│
♦️  Config file components.json created
│
♦️  Project initialized
│
♦️  Dependencies installed with npm
│
└  Success! Project initialization completed.
```

### Step 5 : Add shadcn-svelte components e.g Button
> 🔹[Button Components](https://www.shadcn-svelte.com/docs/components/button) follow this link for more info and add other components
```bash
npx  shadcn-svelte@latest add button
```


## Configure Astro for GitHub Pages
   For Deploying to a github.io URL please check this link
   https://docs.astro.build/en/guides/deploy/github/



