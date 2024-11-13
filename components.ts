// This file is used to store all the components that can be installed. Contribute if youd like to add more of your favorites! PS. Don't forget to add the component to the allComponents array at the bottom of this file!
export type Component = {
  name: string;
  description: string;

  // Github/Gitlab etc. link to the repository of the component
  repository: string;

  // Used to determine if the component is installed
  paths: string[];

  // Commands used to install the component (can be multiple for building stuff)
  installComponent?: string[];

  // Describes the function of the component (for the CLI to describe what certain components do)
  function:
    | "bar"
    | "notification"
    | "widgets"
    | "app"
    | "runner"
    | "wallpaperManager"
    | "shell";

  // Methods used to install the component/create backups/manage config etc.
  methods: {
    // Function thats called to move this config around
    move?: (path: string) => {
      status: "success" | "fail";
      reason?: string;
    };

    // Function called to split this connfig into multiple files that can be blacklisted/left in place etc.
    split?: (path: string) => {
      status: "success" | "fail";
      reason?: string;
    };
  };
};

export const hyprland: Component = {
  name: "hyprland",
  description: "A dynamic tiling Wayland compositor",
  repository: "https://github.com/hyprwm/Hyprland",
  paths: ["/home/[usr]/.config/hypr/"],
  function: "app",
  methods: {
    move: () => {
      console.log("Moving hyprland config...");

      return { status: "success" };
    },
  },
};

export const hyprpaper: Component = {
  name: "hyprpaper",
  description: "Wallpaper manager for Hyprland",
  repository: "https://github.com/hyprwm/Hyprpaper",
  paths: ["/home/[usr]/.config/hypr/hyprpaper.conf"],
  function: "wallpaperManager",
  installComponent: ["pacman -S hyprpaper --noconfirm"],
  methods: {
    move: () => {
      console.log("Moving hyprpaper config...");

      return { status: "success" };
    },
  },
};

export const dunst: Component = {
  name: "dunst",
  description: "Lightweight notification daemon",
  repository: "https://github.com/dunst-project/dunst",
  paths: ["/home/[usr]/.config/dunst/"],
  function: "notification",
  methods: {
    move: () => {
      console.log("Moving dunst config...");

      return { status: "success" };
    },
  },
};

export const swaync: Component = {
  name: "swaync",
  description:
    "A simple notification daemon with a GTK gui for notifications and the control center",
  repository: "https://github.com/ErikReider/SwayNotificationCenter",
  paths: ["/home/[usr]/.config/swaync/"],
  function: "notification",
  methods: {
    move: () => {
      console.log("Moving swaync config...");

      return { status: "success" };
    },
  },
};

export const eww: Component = {
  name: "eww",
  description:
    "Eww is a highly configurable, hackable and extendable Wayland compositor",
  repository: "https://github.com/elkowar/eww",
  paths: ["/home/[usr]/.config/eww/"],
  function: "widgets",
  methods: {
    move: () => {
      console.log("Moving eww config...");

      return { status: "success" };
    },
  },
};

export const wlogout: Component = {
  name: "wlogout",
  description: "A wayland based logout menu",
  repository: "https://github.com/ArtsyMacaw/wlogout",
  paths: ["/home/[usr]/.config/wlogout/"],
  function: "widgets",
  methods: {
    move: () => {
      console.log("Moving wlogout config...");

      return { status: "success" };
    },
  },
};

export const ranger: Component = {
  name: "ranger",
  description: "Console file manager with vi key bindings",
  repository: "https://github.com/ranger/ranger",
  paths: ["/home/[usr]/.config/ranger/"],
  function: "app",
  methods: {
    move: () => {
      console.log("Moving ranger config...");

      return { status: "success" };
    },
  },
};

export const cava: Component = {
  name: "cava",
  description: "Cross-platform Audio Visualizer",
  repository: "https://github.com/karlstav/cava",
  paths: ["/home/[usr]/.config/cava/"],
  function: "app",
  methods: {
    move: () => {
      console.log("Moving cava config...");

      return { status: "success" };
    },
  },
};

export const neofetch: Component = {
  name: "neofetch",
  description: "A command-line system information tool written in bash 3.2+",
  repository: "https://github.com/dylanaraps/neofetch",
  paths: ["/home/[usr]/.config/neofetch/"],
  function: "app",
  methods: {
    move: () => {
      console.log("Moving neofetch config...");

      return { status: "success" };
    },
  },
};

export const rofi: Component = {
  name: "rofi",
  description: "A window switcher, application launcher and dmenu replacement",
  repository: "https://github.com/davatorium/rofi",
  paths: ["/home/[usr]/.config/rofi/"],
  function: "runner",
  methods: {
    move: () => {
      console.log("Moving rofi config...");

      return { status: "success" };
    },
  },
};

export const waybar: Component = {
  name: "waybar",
  description:
    "A fast and customizable Wayland bar for Sway/Wlroots based compositors",
  repository: "https://github.com/Alexays/Waybar",
  paths: ["/home/[usr]/.config/waybar/"],
  function: "bar",
  methods: {
    move: () => {
      console.log("Moving waybar config...");

      return { status: "success" };
    },
  },
};

export const zsh: Component = {
  name: "zsh",
  description:
    "A very advanced and programmable command interpreter (shell) for UNIX",
  repository: "https://github.com/zsh-users/zsh",
  paths: ["/home/[usr]/.zshrc", "/home/[usr]/.zprofile", "/home/[usr]/.zshenv"],
  function: "shell",
  methods: {
    move: () => {
      console.log("Moving zsh config...");

      return { status: "success" };
    },
  },
};

export const fish: Component = {
  name: "fish",
  description: "A smart and user-friendly command line shell for UNIX",
  repository: "https://github.com/fish-shell/fish-shell",
  paths: ["/home/[usr]/.config/fish/config.fish"],
  function: "shell",
  methods: {
    move: () => {
      console.log("Moving fish config...");

      return { status: "success" };
    },
  },
};

export const nvim: Component = {
  name: "nvim",
  description: "Vim-fork focused on extensibility and usability",
  repository: "https://github.com/neovim/neovim",
  paths: ["/home/[usr]/.config/nvim/"],
  function: "app",
  methods: {
    move: () => {
      console.log("Moving neovim config...");

      return { status: "success" };
    },
  },
};

export const kitty: Component = {
  name: "kitty",
  description: "Fast and feature-rich terminal",
  repository: "https://github.com/kovidgoyal/kitty",
  paths: ["/home/[usr]/.config/kitty/"],
  function: "app",
  methods: {
    move: () => {
      console.log("Moving kitty config...");

      return { status: "success" };
    },
  },
};

export const wofi: Component = {
  name: "wofi",
  description:
    "Launcher/menu program for wlroots based wayland compositors such as sway",
  repository: "https://hg.sr.ht/~scoopta/wofi",
  paths: ["/home/[usr]/.config/wofi/"],
  function: "runner",
  methods: {
    move: () => {
      console.log("Moving wofi config...");

      return { status: "success" };
    },
  },
};

// Easy export of all components, add any new components here
export const allComponents: Component[] = [
  hyprland,
  hyprpaper,
  dunst,
  swaync,
  eww,
  wlogout,
  ranger,
  cava,
  neofetch,
  rofi,
  waybar,
  zsh,
  fish,
  nvim,
  kitty,
  wofi,
];
