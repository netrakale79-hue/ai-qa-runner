# QA Batched Runner starter

A minimal Playwright + Allure runner that can be triggered manually in GitHub Actions and later called from Activepieces.

## Files

- `.github/workflows/qa-batched-runner.yml` — manual GitHub Actions workflow (`workflow_dispatch`)
- `tests/smoke.spec.ts` — one basic navigation smoke test
- `playwright.config.ts` — Playwright config plus Allure and HTML reports
- `package.json` — test/report dependencies

## Add to your GitHub repo

Upload the contents of this folder to the root of your existing repository, keeping the `.github/workflows` path exactly as shown. Commit the files to your default branch.

## Run a test

1. In GitHub, open **Actions**.
2. Select **QA Batched Runner**.
3. Click **Run workflow**.
4. Enter an application URL you are authorized to test, such as a staging/test URL.
5. Click **Run workflow**.
6. When the run finishes, open the run and download the `qa-results-...` artifact. It contains `allure-report/`, `allure-results/`, Playwright HTML report, and test artifacts if generated.

This starter uses `npm install` so it can run before a lockfile is committed. After the first run, it is preferable to commit `package-lock.json` and switch the workflow to `npm ci` for reproducible installs.

## Current scope / limitations

- This is a working smoke-test runner scaffold, not yet the complete BRS-to-defect automation pipeline.
- It does not generate tests from an AI-produced JSON file yet.
- Activepieces must be configured separately to invoke the GitHub Actions workflow and receive results.
- Jira ticket creation is not wired up yet; add it in Activepieces after defect classification and duplicate checks.
- The Allure report is uploaded as a downloadable artifact. It is not automatically published to a public URL.
- Do not store credentials in test files or workflow inputs.
