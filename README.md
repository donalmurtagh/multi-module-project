### Steps to reproduce [the issue](https://github.com/biomejs/biome-intellij/issues/180)

- Setup an IntelliJ project with `biome-web-module` and `java-module` as separate modules thereof
- Install the Biome IntelliJ plugin if necessary
- In the Biome IntelliJ settings, enable Biome and "Enable LSP-based code formatting"
- Notice that the Biome language service does not run when `biome-web-module/src/script.js` is opened
- Remove the `java-module` module from the project
- Re-open `biome-web-module/src/script.js` and you should see that the Biome language service is now running
