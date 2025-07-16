/** 
 * Fungsi untuk meng-observe elemen apakah sudah masuk viewport
 * @param {HTMLElement} el - elemen DOM yang mau dipantau
 * @param {Function} callback - dipanggil saat elemen terlihat
 * @param {number} [threshold=0.7] - seberapa jauh harus masuk viewport
 */
export function observeVisible(el, callback, threshold = 0.7) {
  const check = () => {
    const rect = el?.getBoundingClientRect();
    if (rect && rect.top < window.innerHeight * threshold) {
      callback();
      window.removeEventListener("scroll", check);
    }
  };

  window.addEventListener("scroll", check);
  check();
}
