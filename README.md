org-protocol
============

Provides a Firefox address bar button to send the current webpage to
Emacs `org-mode` via [org-protocol][1].  It's mostly a quick and dirty
replacement for the `org-protocol` bookmarklet that was less and less
useful because of CSP (Content Security Policy) blocking them on many
sites (for example Github).  This addon does not suffer from this
limitation.

[1]: https://orgmode.org/worg/org-contrib/org-protocol.html

USAGE
-----

Either press the address bar button or press the hotkey
(<kbd>Ctrl+Alt+E</kbd> by default) and then confirm by clicking the
popup (or pressing <kbd>Space</kbd>/<kbd>Enter</kbd>) to send the
current page to Emacs with `org-protocol`.  The configuration specific
to `org-protocol` is almost certainly needed, please refer to its
documentation.

PERMISSIONS
-----------

This addon requires the "Access your data for all websites"
permission.  It's used solely to extract the currently selected text
to pass it to `org-capture`, see
[this file](https://github.com/vifon/org-protocol-for-firefox/blob/master/content-script.js)
for the details.

COPYRIGHT
---------

Copyright (C) 2019  Wojciech Siewierski

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
