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

export function setConfig(newconfig: object) {
  // DANGEROUS TO USE, ONLY FOR IMPORTING CONFIGS
  config.all = newconfig;
}

export function getAllThemes() {
  // TODO: get themes from repo

  // Just gonna use this for now
  return [{ name: "hyppuccin", author: "MathisP75" }];
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
