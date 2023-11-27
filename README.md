# Spiraloid-Toolkit-for-Photoshop
 Scripts for photoshop to be used in actions in photoshop 2023 on windows.  no support or warranty expressed or implied.  use at your own risk.  just sharing my setup.
![image](https://github.com/spiraloid/Spiraloid-Toolkit-for-Photoshop/assets/36362743/abfd6485-cb9a-4059-85ec-fee57c0e73fb)


br_incremental_save.jsx

![image](https://github.com/spiraloid/Spiraloid-Toolkit-for-Photoshop/assets/36362743/682de572-2e05-48cd-a0a6-9d807dddd7b9)


Determines whether the current document is saved or not, if not it Generates a random name using random three words and the suffix "_v.000" and saves it to a quicksave location located at "X:/Prod/Sketchbook/Photoshop/Quicksaves Psd/".

For already saved documents, it scans all existing filenames with the same name in the document folder and finds the highest version number of the same file and increases it. For example foo_v.004.psd becomes foo_v.005.psd.

It also exports a flattened .PNG file in the same location as the .PSD with the version suffix removed. For example when foo_v.005.psd is saved, foo.png
is saved right next to it, overwriting the existing png.  This is how you know that the .png is always the current version.

br_new_foreground_color.jsx

![image](https://github.com/spiraloid/Spiraloid-Toolkit-for-Photoshop/assets/36362743/e53f3014-5ec0-49c2-af80-0e6dd9788572)


creates a new solid color layer using the current foreground color and creates a mask layer.

br_new_random_color.jsx

![image](https://github.com/spiraloid/Spiraloid-Toolkit-for-Photoshop/assets/36362743/6c8086c6-d991-41fa-b979-4d683b9b3fd5)


creates a new solid color layer using a random neon color and creates a mask layer.

br_reveal_in_explorer.jsx

opens a windows explorer shell at the location of the currently saved document.
