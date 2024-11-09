import fs from "node:fs";
import Configstore from "configstore";

import dir from "https://deno.land/x/dir/mod.ts";

const config = new Configstore("hyprtheme", {
  selectedTheme: "none",
  installedThemes: [],
  backups: [],
  setup: false,
});

if (config.get("setup") === false) {
    const hyprDirectory = dir("config") + "/hypr/";
    
    if (!fs.existsSync(hyprDirectory)) {
      console.log(`Hyprland setup not found at ${hyprDirectory}`);
    }
    

  config.set("setup", true);
}

export function setConfig(key: string, value: any) {
  // DANGEROUS TO USE, ONLY FOR IMPORTING CONFIGS
  config.set(key, value);
}

export function getThemes() {
  // TODO: get themes from repo
}

export function getSelectedTheme() {
  return config.get("selectedTheme");
}

export function getInstalledThemes() {
  return config.get("installedThemes");
}

export function getBackups() {
  return config.get("backups");
}
