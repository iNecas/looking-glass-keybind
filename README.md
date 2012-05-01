# Looking Glass Keybind

GNOME Shell extension to bind  Looking Glass to a key.

## Installation

You need GNOME Shell 3.4.1 to run this extension.

    SRC_DIR=`pwd`
    INSTALL_DIR=/usr/share
    cp -r $SRC_DIR/looking-glass-keybind@inecas.fedora.cz\
          $INSTALL_DIR/gnome-shell/extensions
    cp -r $SRC_DIR/looking-glass-keybind@inecas.fedora.cz/schemas/* \
          $INSTALL_DIR/glib-2.0/schemas
    glib-compile-schemas $INSTALL_DIR/glib-2.0/schemas

If you don't wish to install it for the whole system you can install it only to
your local profile by setting `INSTALL_DIR=~/.local/share`. For the
system to find your schema files you need to set it in your `~/.profile`
file:

    export XDG_DATA_DIRS=~/.local/share:/usr/share

After this setting you need to log out and back in to reflect this
changes.

Finally enable the plugin using gsettings or other tool:

    gsettings set org.gnome.shell enabled-extensions "['looking-glass-keybind@inecas.fedora.cz']"

You might expect the GNOME session to be restarted.

## Configuration

By default F12 is used for the binding. You can change it by running:

     gsettings set org.gnome.shell.extensions.looking-glass-keybind.keybindings\
                   launch-looking-glass "['F10']"


## Licence

GPLv3
