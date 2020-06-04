# Other Feature Workspace

## Purpose

The purpose of this set of Angular workspaces is to give developers a playground and example to use in developing
their own component libraries.  It is important that the examples do not confuse the issue (or new developer) 
by introducing any 3rd party tools.  It only uses Angular.  An accompanying Angular workspace contains 
another Micro Front-End to consume the library created here and hosted on a private local npm repository.

This is the workspace that will house an example micro front-end web site for a generic feature which consumes
custom components that are generated from another project and published to a local npm repository.   


## Terminology

**Feature** - A specific domain of functionality.  This could be a Blog, a shopping cart, or an image 
catalog, to naame a few possibilities

**Micro Front-End** - A web site dedicated to executing a specific feature and only that, passing control
to another Micro Front-End in order to perform a different domain of functionality.

**Custom Components** - Angular Components, Services, Pipes, Directives, or other useful tools that are
created for use by angular applications.  Usually developed as part of a web site, as a lazy loaded 
module, or an exportable library.

**Schematics** - A code generation and automation tooling system used to simplify and standardize common
tasks in project creation and development.  If you have used `ng generate component` you have used schematics.

**NPM Package** - A specific format of library that can be imported from a central repository of components
and used inside of another project.  Node Package Manager (npm) is based on NodeJS.


## Other Feature Micro Front-End

**Project Name**: other-feature-micro-front-end

**Purpose**: Simple front-end that demonstrates usage of components from shared component library built and 
deployed to a local npm repositoryy from another workspace.

**Prefixes**: ofmfe - Other Feature Micro Front-End

**Add Schematics tooling**

`npm install -g @angular-devkit/schematics`

`npm install -g @angular-devkit/schematics-cli`

`npm install -g @schematics/angular`


**Add component library**

`ng add feature-shared-components --registry http://localhost:4873` *run schematic to add library* 

NOTE: You can uninstall the components by `npm uninstall feature-shared-components` and then re-add with above statement.
You may need to do this if you update the components and republish them.

TODO: Add code to automatically import and register the component modules in the workspaces app.module.ts

**Run web front-end**: `npm install` and then `ng serve --port 4202` will run the application on port 4202, showing the imported components work.


## Available Components 

`fsc-button` - Feature Shared Component - Button (barebone component e.g. 'component works!' message only)

`fsc-textbox` - Feature Shared Component - Textbox (barebone component e.g. 'component works!' message only)

## Available Schematics

`ng add feature-shared-components --registry http://localhost:4873`:
Adds the feature-shared-components package stored in the local npm repository to a project, adds a file to the workspace folder, and defines some dummy scripts and sets up the `husky` npm package in the workspacce package.json file.

`ng generate feature-shared-components:feature-starter-service --name doStuff --path services`:
Generates a feature-starter-service service as from the feature-shared-component collection with the specified name and path based on a predetermined template. (e.g. src/app/services/do-stuff.service.ts)



