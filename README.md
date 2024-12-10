# improwised-new-website

## 🔮 Astro + Astro Svelte + Shadcn Svelte + Tailwind CSS

> 🔹**Node js 22.0.0** Prerequisite Required!


## 🚀 Steps to Build a Website with above Tech Stack

### Step1 : Create project with Astro

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

### Step2 : Add svelte configuration


```bash
cd webapp
npx astro add svelte
```
For more info check this link : https://docs.astro.build/en/guides/integrations-guide/svelte/


### Step3 : Add Tailwind css configuration


```bash
cd webapp
npx astro add tailwind
```
For more info check this link : https://docs.astro.build/en/guides/integrations-guide/tailwind/


### Step4 : Add shadcn-svelte configuration

> 🔹[Shadcn-svelte configure steps](https://www.shadcn-svelte.com/docs/installation/astro) Follow the steps from step 5  to step 7 from this link


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


## Configure Astro for GitHub Pages
   For Deploying to a github.io URL please check this link
   https://docs.astro.build/en/guides/deploy/github/



