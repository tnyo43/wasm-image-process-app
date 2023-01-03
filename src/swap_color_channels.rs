use image::{ImageBuffer, Rgba};

fn swap_color_channels(img: ImageBuffer<Rgba<u8>, Vec<u8>>, width: u32, height: u32) -> ImageBuffer<Rgba<u8>, Vec<u8>> {

    let mut result_img = img.clone();

    for h in 0..height {
        for w in 0..width {
            let p = img.get_pixel(w, h).0;
            result_img.put_pixel(w, h,  Rgba([p[1], p[2], p[0], p[3]]));
        }
    }
    result_img
}

pub fn exec(buf: Vec<u8>, width: u32, height: u32) -> Vec<u8> {
    let img = ImageBuffer::<Rgba<u8>, Vec<u8>>::from_raw(width, height, buf).unwrap();
    swap_color_channels(img, width, height).into_raw()
}
