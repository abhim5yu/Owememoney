# Daily pot

Daily shared-contribution tracker. Data stays on the phone (localStorage).

## Update the app
1. Get a new `update.zip` (contains `www/index.html`).
2. GitHub > this repo > Add file > Upload files > pick `update.zip` > Commit.
3. Wait for Actions to finish (green tick).
4. Releases > newest > download the APK > install over the old app.

The zip replaces the old files by itself and is deleted after. Old releases are pruned, newest 3 kept.

## Keep safe
- This repo is public. `signing/` holds the key that signs the APK, so anyone can read it.
  Only install APKs from your own Releases page.
- Download `signing/release.keystore` and `signing/keystore.properties` once and back them up.
  Lose the key = new APKs will not install over the old app.
- Never change `appId` in capacitor.config.json.
