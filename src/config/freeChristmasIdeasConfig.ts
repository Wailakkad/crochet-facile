// src/config/freeChristmasIdeasConfig.ts

/** Public URL of the free PDF lead magnet (served from public/downloads). */
export const FREE_CHRISTMAS_IDEAS_PDF_URL =
  '/downloads/40%20Id%C3%A9es%20de%20No%C3%ABl%20au%20Crochet%20%C3%A0%20Croquer.pdf';

/**
 * Public Google Apps Script Web App URL that receives POST requests
 * with JSON body { name, email, source } sent as Content-Type text/plain
 * (avoids the CORS preflight Apps Script cannot answer).
 * Parse it server-side with JSON.parse(e.postData.contents).
 */
export const GOOGLE_APPS_SCRIPT_SIGNUP_URL =
  'https://script.google.com/macros/s/AKfycbyBGLgNC098qAse_wUo5BobtR-1pUw4zmHMsQ9sjln2FkChGSpaoT3eNqfQB3zQjq3QXw/exec';

/** Tracking / list tag sent as `source` with each signup. */
export const FREE_CHRISTMAS_IDEAS_SOURCE_TAG = 'free_christmas_ideas_40';

/** Preview images of the 6 carnet pages ("La Collection Complète" section). */
export const FREE_CHRISTMAS_PAGE_IMAGES = {
  page01:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041217/Crochet_strawberry_milk_Christma__2K_20261026112927.jpg',
  page02:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041211/Crochet_ghost_with_Christmas_hat_2K_20261026112932.jpg',
  page03:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041197/Gingerbread_cat_crochet_project___2K_20261026112937.jpg',
  page04:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041194/Crochet_bunny_Christmas_present___2K_20261026112940.jpg',
  page05:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041194/Crochet_marshmallow_snowman_mug___2K_20261026112943.jpg',
  page06:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041195/Crochet_Christmas_axolotl_projec__2K_20261026112948.jpg',
} as const;

/** Storytelling images of the "L'Expérience Fait Main" section. */
export const FREE_CHRISTMAS_EXPERIENCE_IMAGES = {
  inspiration:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041788/L_inspiration_avant_tout.jpg',
  univers:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041788/4_univers_4_ambiances.jpg',
  moment:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041874/Un_moment_de_douceur_%C3%A0_savourer.jpg',
} as const;

/** Hero illustration (right side) of the free landing page. */
export const FREE_CHRISTMAS_HERO_IMAGE =
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041977/the_right_side_hero_img.jpg';

export const isPlaceholder = (value: string): boolean => value.startsWith('[[');
