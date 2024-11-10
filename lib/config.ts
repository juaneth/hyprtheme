import fs from "node:fs";
import Configstore from "configstore";
import dir from "https://deno.land/x/dir/mod.ts";
import * as path from "jsr:@std/path";

import { glob } from "glob";

import { intro, outro } from "@clack/prompts";

const debug = Deno.env.get("DEBUG");

let configLocation: string | undefined = undefined;

if (debug) {
  configLocation = `${Deno.cwd()}/debugConfig.json`;
}

// -- Initalise config --
const config = new Configstore(
  "hyprtheme",
  {
    // Defaults
    selectedTheme: "none",
    installedThemes: [],
    backups: [],
  },
  {
    configPath: configLocation,
  }
);
// --------------------------------

// -- Check if hyprland is installed --
const hyprDirectory = dir("config") + "/hypr/";

if (!fs.existsSync(hyprDirectory)) {
  intro(`Hyprland setup not found at ${hyprDirectory}.`);
  outro(
    "Please make sure hyprland is installed and setup correctly and try again."
  );

  Deno.exit();
}
// --------------------------------

export function setConfig(newconfig: object) {
  // DANGEROUS TO USE, ONLY FOR IMPORTING CONFIGS
  config.all = newconfig;
}

export async function getAllThemes() {
  const themes = await glob("themes/*.json");

  const themesArray: Array<object> = [];

  themes.forEach((theme) => {
    const themeData = fs.readFileSync(path.join(`${Deno.cwd()}/`, theme));
    const json = JSON.parse(themeData.toString());

    themesArray.push(json);
  });

  return themesArray;
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
