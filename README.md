# Turborepo

## Apps and Packages

- `web`: [Next.js](https://nextjs.org/) app
- `api`: [FastAPI](https://fastapi.tiangolo.com/) REST API
- `@repo/ui`: React component library
- `@repo/eslint-config`: `eslint` configurations
- `@repo/typescript-config`

## Commands
### Turborepo setup
1. npm install turbo --global (allows using the turbo command)
2. npx create-turbo@latest inventory (creates a Turborepo starter repo)
3. cd inventory
4. code .
5. rm -rf apps/docs (removes the nextjs static docs repo that comes in the starter)

### FastAPI
1. curl -sSL https://install.python-poetry.org | python3 (download poetry dependency management)
2. echo 'export PATH="/Users/williamphelps/.local/bin:$PATH"' >> ~/.zshrc (adds poetry to the PATH to be able to be used)
3.  poetry new apps/api
4.  cd apps/api
5.  pyproject.toml > [tool.poetry.dependencies]:
    ```
    bcrypt
    cryptography
    fastapi
    httpx
    passlib
    psycopg2-binary
    python-jose
    python-multipart
    SQLAlchemy
    uvicorn
    ```
6.  pyproject.toml > [tool.poetry.group.dev.dependencies]:
    ```
    pytest
    pytest-asyncio
    ruff
    ```
7.  poetry install
8.  touch package.json:
    ```
    {
      "name": "api",
      "version": "1.0.0",
      "private": true,
      "scripts": {
        "dev": "poetry run uvicorn main:app --reload",
        "lint": "ruff format"
      }
    }
    ```
9. touch main database models
10. mkdir routers && touch routers/auth routers/todos routers/users
11. Create CRUD RESTful API with FastAPI...
12. poetry run uvicorn main:app --reload

### Next.js
1. cd apps/web
2. touch queries components types contexts hooks utils
3. package.json > dependencies:
  ```
    tailwind
    react-query
  ```
4. package.json > devDependencies:


### Other Nice to Haves
1. mkdir .vscode && touch extensions.json settings.json
2. extensions.json:
  ```
  {
  "recommendations": [
      "streetsidesoftware.code-spell-checker",
      //python
      "charliermarsh.ruff", // formatter, linter, import sort
      "ms-python.python", // intellisense, linter, formatter, refactoring
      "KevinRose.vsc-python-indent", // indent formatter and linting
      "njqdev.vscode-python-typehint", // type hinting
      "ninoseki.vscode-pylens", // version suggestions
      "tamasfe.even-better-toml", // toml formatter
      //typescript
      "dbaeumer.vscode-eslint", // linter
      "pflannery.vscode-versionlens", // version suggestions
      "esbenp.prettier-vscode", // formatter
      "bradlc.vscode-tailwindcss", // tailwindcss intellisense
     ]
   }
  ```
3. settings.json:
  {
  "editor.formatOnSave": true,
  "editor.minimap.enabled": false, //preference
  "editor.tabSize": 2, //preference
  "files.autoSave": "afterDelay", //preference
  "javascript.updateImportsOnFileMove.enabled": "prompt", //preference
  "workbench.colorTheme": "Night Owl", //preference
  "workbench.sideBar.location": "right", //preference
  "workbench.editor.enablePreview": false, //preference
  "[python]": {
    "editor.defaultFormatter": "charliermarsh.ruff",
    "editor.codeActionsOnSave": {
      "source.fixAll": "always",
      "source.organizeImports": "always"
    }
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "always"
    }
  },
  "ruff.lint.run": "onSave",
  "cSpell.words": []
  }
  ```


## Turborepo for Monorepo Management
### Benefits
1. Unified Codebase Management: Turborepo provides a streamlined approach to managing multiple projects within a single repository, enhancing code sharing and reducing redundancy.
2. Efficient Caching: Turborepo's intelligent caching mechanism speeds up build times by caching the outputs of tasks and only rerunning them when necessary, significantly reducing redundant computations.
3. Parallel Execution: It can run tasks in parallel across packages, utilizing system resources efficiently and reducing overall build times.
4. Dependency Graph Awareness: Turborepo understands the dependencies between projects in the monorepo, ensuring tasks are run in the correct order.
5. Remote Caching: Supports remote caching, allowing teams to share cache artifacts and further speed up build times across different machines and CI environments.

### Commands
1. turbo run <task-name> (run, lint, build)
2. turbo run <task-name> --filter=... (use filters to target specific packages)
3. Clear cache: turbo prune
4. Add a package: turbo add <package-name> --filter=<specific-package>
5. Remove a package: turbo remove <package-name> --filter=<specific-package>
6. Inspect the dependency graph: turbo graph
7. Debug tasks: turbo run <task-name> --debug

## Poetry for Dependency Management
### Benefits
1. Streamlined Dependency Management: Poetry uses the pyproject.toml file to manage dependencies, making it more straightforward and readable compared to the traditional requirements.txt or setup.py files. It simplifies declaring, managing, and installing dependencies.
2. Integrated Virtual Environment Management: Poetry automatically creates and manages virtual environments for each project, eliminating the need for manual virtual environment setup and activation.
3. Lockfile to Ensure Reproducible Builds: Poetry generates a poetry.lock file, which precisely pins the version of each dependency (and sub-dependency) used in the project. This lockfile ensures that every team member and deployment environment uses exactly the same versions, leading to more consistent and reproducible builds.
4. Dependency Resolution: Poetry has a sophisticated dependency resolver that avoids dependency hell. It ensures that all dependencies are compatible with each other, reducing the time developers spend troubleshooting and fixing dependency conflicts.
5. Easy Dependency Updates: With simple commands, Poetry can update dependencies while ensuring compatibility, making it easier to keep the project's dependencies up-to-date and secure.
6. Development Workflow Enhancements: Poetry supports specifying development dependencies separate from production dependencies, aiding in maintaining a cleaner production environment.
7. Plugin System: Poetry supports plugins that can extend its functionality, allowing for customization and additional tools that can be integrated into your workflow.

### Commands
1. Install project dependencies: add dependency to pyproject.toml then poetry install
2. Check for outdated dependencies: poetry show --outdated
3. Update just one dependency: poetry add <package-name>@latest
4. Update all dependencies: poetry update
5. Run commands: poetry run <command>
6. Validate the pyproject.toml file and check for compatibility issues: poetry check

