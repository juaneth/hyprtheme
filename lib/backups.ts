import { allComponents } from "../components.ts";
import { glob } from "glob";

// Initalise backup directory

export function backup() {
  // Grab all files in config directory from recognised components
  for (const component of allComponents) {
    if (component.methods.move) {
      const status = component.methods.move("");
    }
  }

  // Copy them to backup location
  // Return backup location and list out directories and files copied to user for verification
}

export function restore(theme: string) {
  // TODO: Restore theme
}
