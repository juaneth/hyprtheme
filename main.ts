import { intro, outro, select } from "@clack/prompts";

import { getAllThemes } from "./lib/config.ts";
import { getInstalledThemes } from "./lib/config.ts";

intro(`Welcome to the hyprtheme CLI! Need help? Run \`hyprtheme --help\``);

const action = await select({
  message: "#--- Select an action: ---#",
  options: [
    { value: "themeinstall", label: "Install a theme" },
    { value: "thememanage", label: "Manage installed themes" },
    {
      value: "import",
      label: "Import a configuration",
      hint: "Dangerous, overwrites existing config",
    },
    {
      value: "backup",
      label: "Manage backups",
    },
  ],
});

switch (action) {
  case "themeinstall": {
    const themes: any | object[] = await getAllThemes();

    if (themes.length === 0) {
      outro("No themes found to install!");
      Deno.exit();
    }

    const options: { value: string; label: string; hint?: string }[] = [];

    for (const theme of themes) {
      options.push({
        value: theme.name,
        label: theme.name,
        hint: `${theme.description}, by ${theme.author}`,
      });
    }

    const themeSelected = await select({
      message: "Select a theme to install:",
      options: options,
    });

    let themeConfig = themes.find(
      (themeSelected: object) => themeSelected === themeSelected
    );

    console.log(themeConfig.name);

    break;
  }
  case "thememanage":
    break;
  case "import":
    break;
  case "backup":
    break;
}

outro(`You're all set with your new theme!`);
