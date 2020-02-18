const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Materials = require('Materials');

// Find your objects
const canvas1 = Scene.root.find('canvas').hidden = false;
const canvas2 = Scene.root.find('canvas 1').hidden = true;
const canvas3 = Scene.root.find('canvas 2').hidden = true;

// Diagnostics.log(canvas1);
// Set an index of 0
const index = 0;

// Create a configuration object
const configuration = {

    // The index of the selected item in the picker
    selectedIndex: index,

    // The image textures to use as the items in the picker
    // Make sure these textures are set to uncompressed or this *will not work*
    items: [
        {image_texture: Textures.get('ui 1')},
        {image_texture: Textures.get('ui 2')},
        {image_texture: Textures.get('ui 3')}
    ]
};

// Create our picker
const picker = NativeUI.picker;

// Load the configuration
picker.configure(configuration);

// // Set the visibility to true
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(index) {
	var indexValue = index.newValue;
	if (indexValue == 0) {
		Scene.root.find('canvas').hidden = false;
		Scene.root.find('canvas 1').hidden = true;
		Scene.root.find('canvas 2').hidden = true;
	} else if (indexValue == 1) {
		Scene.root.find('canvas').hidden = true;
		Scene.root.find('canvas 1').hidden = false;
		Scene.root.find('canvas 2').hidden = true;
	}
	else if (indexValue == 2) {
		Scene.root.find('canvas').hidden = true;
		Scene.root.find('canvas 1').hidden = true;
		Scene.root.find('canvas 2').hidden = false;
	}
}); 

