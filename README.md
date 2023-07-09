# Spiraloid-Toolkit-for-Photoshop
 Scripts for photoshop to be used in actions.

![image](https://github.com/spiraloid/Spiraloid-Toolkit-for-Photoshop/assets/36362743/2247dffc-1956-4b16-a4ec-78e281f458de)


br_incremental_save.jsx

Determines whether the current document is saved or not, if not it Generates a random name using random three words and the suffix "_v.000" and saves it to a quicksave location located at "X:/Prod/Sketchbook/Photoshop/Quicksaves Psd/".

For already saved documents, it scans all existing filenames with the same name in the document folder and finds the highest version number of the same file and increases it. For example foo_v.004.psd becomes foo_v.005.psd.

It also exports a flattened .PNG file in the same location as the .PSD with the version suffix removed. For example when foo_v.005.psd is saved, foo.png
is saved right next to it, overwriting the existing png.  This is how you know that the .png is always the current version.

br_new_foreground_color.jsx

creates a new solid color layer using the current foreground color and creates a mask layer.

br_new_random_color.jsx

creates a new solid color layer using a random neon color and creates a mask layer.

br_reveal_in_explorer.jsx

opens a windows explorer shell at the location of the currently saved document.
