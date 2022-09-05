# Steam Workshop Collections Fix

A userscript to fix some of the deficiencies in the Steam Workshop
Collections management page.

The Steam collections management has a bunch of issues from a UX
perspective. First, there's an absurdly small window to view the list
of currently subscribed mods, and an unlimited amount of space is
allocated to the list of mods that are in the collection. Second, the
page fully refreshes _every time an item is added to the
collection_. These two things combine to make it _extremely_ tedious
to create a collection containing a large number of workshop
items. And finally there's no way to select every item in the list
either!

This userscript fixes all of these issues. It increases the size of
the window for subscribed items, it changes the function that is
called `onClick` for each item so that the page isn't reloaded, and it
adds a "Select All" button that adds every item in the subscribed
items list. Since the Steam web API (presumably) doesn't support
adding all of them at once with a single request, this is done in a
throttled way to not spam the Steam API too badly, so that it takes
about 1/2 a second to add each item.

## Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

See the UNLICENSE file for full information about using and copying
this software.
