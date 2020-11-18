import { NullEngine } from '@babylonjs/core'

export default class Game {
  engine: NullEngine

  constructor() {
    this.engine = new NullEngine()
  } 
}