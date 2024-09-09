// utils/progressUtils.js
export function getProgressText(percentage) {
    if (percentage <= 100 && percentage >= 75) {
        return "Kerja Bagus !";
    } else if (percentage <= 74 && percentage >= 50) {
        return "Cepat Kerjai Lebih Bagus";
    } else {
        return "Tah hapa pun kerja kelen";
    }
}
