# hyprtheme

## A theme manager for [hypr](https://github.com/hyprwm/Hyprland)

### Planned Features

- Install themes
- Manage installed themes
- Import configuration
- Manage backups
- List theme configuration features
- Install "dependencies" for themes (waybar widgets, etc)
- 1 Click Rice

### Installation

```bash
deno install -A -f --unstable https://deno.land/x/hyprtheme/cli.ts
```

### Usage

```bash
hyprtheme -i <theme> # Install a theme
hyprtheme -s <theme> # Switch to a theme
hyprtheme -m # Manage installed themes
hyprtheme -b # Manage backups
hyprtheme -h # Show help
```

### License

MIT
