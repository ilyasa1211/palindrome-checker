export default function checkPalindrome(text: string, ignoreCase: boolean = true): boolean {
  return new RegExp(text, ignoreCase ? "g" : "gi").test(text.split("").reverse().join(""));
}
