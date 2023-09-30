export default function isPalindrome(text: string, ignoreCase: boolean = true): boolean {
  return new RegExp(text, ignoreCase ? "gi" : "g").test(text.split("").reverse().join(""));
}
