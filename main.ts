import { intro, outro, select } from "@clack/prompts";

intro(`Welcome to the hyprtheme CLI! Need help? Run \`hyprtheme --help\``);

const action = await select({
  message: "Select an action:",
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
  case "themeinstall":
    break;
  case "thememanage":
    break;
  case "import":
    break;
  case "backup":
    break;
}

outro(`You're all set with your new theme!`);
