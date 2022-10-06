/**
 * This class creates an integer stack
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-3
 */

class Stack {
  readonly stackArray: number[] = []

  // getters
  public getStack(): number[] {
    return this.stackArray
  }

  // methods
  public push(pushedNumber: number): void {
    // add a number to the array
    this.stackArray.push(pushedNumber)
  }

  public pop(): void {
    // remove a number to the array
    this.stackArray.pop()
  }
}
export = Stack
