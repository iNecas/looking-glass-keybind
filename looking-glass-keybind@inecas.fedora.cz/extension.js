/* -*- mode: js2; js2-basic-offset: 4; indent-tabs-mode: nil -*- */

const Gio = imports.gi.Gio;
const Meta = imports.gi.Meta;

const Main = imports.ui.main;

const KEYBINDING_BASE = 'org.gnome.shell.extensions.looking-glass-keybind.keybindings';

function init() { };

function enable() {
    global.screen.get_display().add_keybinding("launch-looking-glass",
              new Gio.Settings({schema: KEYBINDING_BASE}),
              Meta.KeyBindingFlags.NONE,
              function() { Main.createLookingGlass().open() });
};

function disable() { };

