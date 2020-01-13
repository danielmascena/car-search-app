/* 
    Helper function to capitalize a word
    
    String.prototype.wordCapitalize() = function() {
        return (this.length) ? (this.charAt(0).toUpperCase() + this.slice(1)) : this.toString();
    }
*/
export const wordCapitalize = (word: string): string =>
  word.length > 0
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : word.toString();

export function mileageFormat(mileage: number): string {
  const mileageStr = mileage.toString();
  return mileageStr.slice(0, -3) + '.' + mileageStr.slice(-3);
}
