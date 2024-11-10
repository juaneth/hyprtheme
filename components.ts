// This file is used to store all the components that can be installed. Contribute if youd like to add more of your favorites!

// Name: Obvious name of the component
// Description: Short description of the component
// Repository: Link to the repository of the component
// Paths: Paths to the components configuration files
// Blacklist: Paths to the components configuration files that should not be shared
// Function: The function that the component should be used for (eg. bar, notification, widgets, app, runner, wallpaperManager, shell)
// Replace: Function that should be called when the component config is being installed

export type Component {
    name: string;
    description: string;
    repository: string;
    paths: string[];
    blacklist?: string[];
    function: "bar" | "notification" | "widgets" | "app" | "runner" | "wallpaperManager" | "shell";
    replace?: Function;
}


export const hyprland: Component = {
  name: "hyprland",
  description: "A dynamic tiling Wayland compositor",
  repository: "https://github.com/hyprwm/Hyprland",
  paths: ["/home/[usr]/.config/hypr/hyprland.conf", "/home/[usr]/.config/hypr/theme.conf"],
  function: "app",
};

export const hyprpaper: Component = {
  name: "hyprpaper",
  description: "Wallpaper manager for Hyprland",
  repository: "https://github.com/hyprwm/Hyprpaper",
  paths: ["/home/[usr]/.config/hypr/hyprpaper.conf"],
  function: "wallpaperManager",
};

export const dunst: Component = {
  name: "dunst",
  description: "Lightweight notification daemon",
  repository: "https://github.com/dunst-project/dunst",
  paths: ["/home/[usr]/.config/dunst/"],
  function: "notification",
};

export const eww: Component = {
  name: "eww",
  description: "Eww is a highly configurable, hackable and extendable Wayland compositor",
  repository: "https://github.com/elkowar/eww",
  paths: ["/home/[usr]/.config/eww/"],
  function: "widgets",
};

export const ranger: Component = {
  name: "ranger",
  description: "Console file manager with vi key bindings",
  repository: "https://github.com/ranger/ranger",
  paths: ["/home/[usr]/.config/ranger/"],
    function: "app",
};

export const rofi: Component = {
  name: "rofi",
  description: "A window switcher, application launcher and dmenu replacement",
  repository: "https://github.com/davatorium/rofi",
  paths: ["/home/[usr]/.config/rofi/"],
  function: "runner",
};

export const waybar: Component = {
  name: "waybar",
  description: "A fast and customizable Wayland bar for Sway/Wlroots based compositors",
  repository: "https://github.com/Alexays/Waybar",
  paths: ["/home/[usr]/.config/waybar/"],
  function: "bar",
};

export const zsh: Component = {
  name: "zsh",
  description: "A very advanced and programmable command interpreter (shell) for UNIX",
  repository: "https://github.com/zsh-users/zsh",
  paths: ["/home/[usr]/.zshrc", "/home/[usr]/.zprofile", "/home/[usr]/.zshenv"],
  function: "shell",
};
export const fish: Component = {
  name: "fish",
  description: "A smart and user-friendly command line shell for UNIX",
  repository: "https://github.com/fish-shell/fish-shell",
  paths: ["/home/[usr]/.config/fish/config.fish"],
  function: "shell",
};

export const nvim: Component = {
  name: "nvim",
  description: "Vim-fork focused on extensibility and usability",
  repository: "https://github.com/neovim/neovim",
  paths: ["/home/[usr]/.config/nvim/"],
  function: "app",
};

export const kitty: Component = {
  name: "kitty",
  description: "Fast and feature-rich terminal",
  repository: "https://github.com/kovidgoyal/kitty",
  paths: ["/home/[usr]/.config/kitty/"],
  function: "app",
};

export const wofi: Component = {
  name: "wofi",
  description: "Launcher/menu program for wlroots based wayland compositors such as sway",
  repository: "https://hg.sr.ht/~scoopta/wofi",
  paths: ["/home/[usr]/.config/wofi/"],
  function: "runner",
};
