mod utils;
mod swap_color_channels;

use wasm_bindgen::{prelude::*, Clamped};

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, image-process-app!");
}

#[wasm_bindgen]
pub fn swap_color_channels(buf: Clamped<Vec<u8>>, width: u32, height: u32) -> Vec<u8> {
    swap_color_channels::exec(buf.0, width, height)
}
